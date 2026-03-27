#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片下载压缩脚本
功能：从 JSON 文件中下载图片并压缩到指定规格
- 尺寸：最长边 300px(保持宽高比)
- 分辨率：96dpi
- 格式：JPG
- 大小：约 20KB
- 质量：高清晰度
"""

import json
import os
import requests
from PIL import Image
from io import BytesIO
import concurrent.futures

def download_and_compress(item, headers):
    '''下载并压缩单张图片'''
    try:
        img_id = item.get('id')
        img_url = item.get('image')
        
        if not img_url:
            return False, '缺少 image 字段', img_id
        
        # 下载图片
        response = requests.get(img_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # 打开图片
        img = Image.open(BytesIO(response.content))
        
        # 转换为 RGB 模式
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # 按比例缩小到最长边 300px
        max_size = 300
        width, height = img.size
        if width > height:
            new_width = max_size
            new_height = int(height * (max_size / width))
        else:
            new_height = max_size
            new_width = int(width * (max_size / height))
        
        # 使用 LANCZOS 重采样保持清晰度
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        output_path = f'icons/{img_id}.jpg'
        
        # 智能质量调整：逐步测试直到文件大小接近 20KB
        # 从较高质量开始，保证清晰度
        quality = 90
        for q in [90, 85, 80, 75, 70, 65, 60, 55]:
            temp_buffer = BytesIO()
            img.save(temp_buffer, format='JPEG', quality=q, dpi=(96, 96), optimize=True, progressive=True)
            file_size = len(temp_buffer.getvalue()) / 1024
            
            if file_size <= 22:  # 目标 20KB 左右
                quality = q
                break
        
        # 保存最终图片
        img.save(output_path, format='JPEG', quality=quality, dpi=(96, 96), optimize=True, progressive=True)
        
        final_size = os.path.getsize(output_path) / 1024
        return True, final_size, img_id
        
    except Exception as e:
        return False, str(e)[:80], img_id

def main():
    # 创建 icons 文件夹
    if not os.path.exists('icons'):
        os.makedirs('icons')
        print(' 已创建 icons 文件夹')
    
    # 读取 JSON 文件
    try:
        with open('games9-data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f' 加载 {len(data)} 个条目')
    except FileNotFoundError:
        print(' 错误：找不到 games9-data.json 文件')
        return
    
    # 请求头 (模拟浏览器)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.gamemonetize.com/'
    }
    
    print('开始下载图片...')
    success_count = 0
    failed_count = 0
    
    # 使用线程池并发下载 (3 个并发)
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(download_and_compress, item, headers): item for item in data}
        
        for i, future in enumerate(concurrent.futures.as_completed(futures), 1):
            result = future.result()
            success, info, img_id = result
            
            if success:
                success_count += 1
                print(f'{i}/{len(data)} ID {img_id}:  {info:.1f}KB')
            else:
                failed_count += 1
                print(f'{i}/{len(data)} ID {img_id}:  {info}')
    
    print(f'\n{'='*70}')
    print(f'完成！成功：{success_count}, 失败：{failed_count}')
    print(f'保存位置：icons/')
    print(f'{'='*70}')

if __name__ == '__main__':
    main()