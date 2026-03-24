var FIRST_GAME;

var COLUMNS_COORDS = [179,248,316,384,452,521,589];
var ROWS_COORDS = [496,565,633,701,769,838,906];

var MILLS_LIGHT_INDEX = [0,1,2,2,2,2,1,0,0,1,2,2,2,2,1,0];
var MILLS_LIGHT_X = [383,383,383,247,521,383,383,383,180,248,316,384,384,452,520,589];
var MILLS_LIGHT_Y = [498,565,633,701,701,769,837,905,700,700,700,562,839,700,700,700];
var MILLS_LIGHT_ROTATION = [0,0,0,0,0,0,0,0,90,90,90,90,90,90,90,90];

// BOARD COORDINATES: "NULL" COORDS ARE PLACES WHERE THERE IS NO POINT
var BOARD_COORDS = [[COLUMNS_COORDS[0],ROWS_COORDS[0]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[0]],
                    [COLUMNS_COORDS[6],ROWS_COORDS[0]], 
                    [COLUMNS_COORDS[1],ROWS_COORDS[1]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[1]],
                    [COLUMNS_COORDS[5],ROWS_COORDS[1]],
                    [COLUMNS_COORDS[2],ROWS_COORDS[2]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[2]],
                    [COLUMNS_COORDS[4],ROWS_COORDS[2]],
                    [COLUMNS_COORDS[0],ROWS_COORDS[3]],
                    [COLUMNS_COORDS[1],ROWS_COORDS[3]],
                    [COLUMNS_COORDS[2],ROWS_COORDS[3]],
                    [COLUMNS_COORDS[4],ROWS_COORDS[3]],
                    [COLUMNS_COORDS[5],ROWS_COORDS[3]],
                    [COLUMNS_COORDS[6],ROWS_COORDS[3]], 
                    [COLUMNS_COORDS[2],ROWS_COORDS[4]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[4]],
                    [COLUMNS_COORDS[4],ROWS_COORDS[4]],
                    [COLUMNS_COORDS[1],ROWS_COORDS[5]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[5]],
                    [COLUMNS_COORDS[5],ROWS_COORDS[5]],
                    [COLUMNS_COORDS[0],ROWS_COORDS[6]],
                    [COLUMNS_COORDS[3],ROWS_COORDS[6]],
                    [COLUMNS_COORDS[6],ROWS_COORDS[6]]];
                
var PLAYERS_CHIPS_POSITION = [80,690];

var SQUARES_COMBINATIONS = [[ 0, 1, 2],
                            [ 3, 4, 5],
                            [ 6, 7, 8],
                            [ 9,10,11],
                            [12,13,14],
                            [15,16,17],
                            [18,19,20],
                            [21,22,23],
                            [ 0, 9,21],
                            [ 3,10,18],
                            [ 6,11,15],
                            [ 1, 4, 7],
                            [16,19,22],
                            [ 8,12,17],
                            [ 5,13,20],
                            [ 2,14,23]];
