//add this code to sdk.js and make it import for event
runOnStartup(async runtime =>
{
// Code to run on the loading screen.
// Note layouts, objects etc. are not yet available.

runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});
async function OnBeforeProjectStart(runtime)
{
// Code to run just before 'On start of layout' on
// the first layout. Loading has finished and initial
// instances are created and available to use here.

runtime.addEventListener("tick", () => Tick(runtime));

// Scorenga script tag
const Adsence_sdk = document.createElement('script');
Adsence_sdk.innerHTML = `var s = document.createElement("script");
s.setAttribute("async", "");
s.setAttribute("data-ad-client", "ca-pub-2622226100196993");
s.setAttribute("data-ad-frequency-hint", "30s");
s.setAttribute("data-ad-channel", "3900405302");
s.setAttribute("data-adbreak-test", "on");
s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.head.appendChild(s);
//}
window.adsbygoogle = window.adsbygoogle || [];
const adBreak = adConfig = function (o) {
adsbygoogle.push(o);
}
adConfig({
preloadAdBreaks: 'on',
sound: 'on', // This game has sound
onReady: () => {
},
});
`;
document.getElementsByTagName('head')[0].appendChild(Adsence_sdk);
}
function Tick(runtime)
{
// Code to run every tick
}


const scriptsInEvents = {

	async ["Onstart-E_Event6_Act1"](runtime, localVars)
	{
		var gameName = 'cute-cat-jigsaw-puzzle-2023';
		var domainName = document.referrer;
		if (domainName == "")
		{
		domainName = window.location.href;
		}
		var domain_parts = domainName.split("://");
		var domain_subparts = domain_parts[1].split("/");
		var hostNames = domain_subparts[0];
		window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=moregames", "_blank");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

