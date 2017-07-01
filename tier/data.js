let games =
[
	{
		"custom": false,
		"name": "Smash 4",
		"imageSets": [
			{"folder": "ssb4", "name": "Screenshots"},
			{"folder": "ssb4r", "name": "Renders"}
		],
		"characters": [
			{"name": "mario", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "luigi", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "peach", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "bowser", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "yoshi", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "rosalinaluma", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "bowserjr", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "wario", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "donkeykong", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "diddykong", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "mrgamewatch", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "littlemac", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "link", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "zelda", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "sheik", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "ganondorf", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "toonlink", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "samus", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "zerosuitsamus", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "pit", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "palutena", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "marth", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "ike", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "robin", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "duckhunt", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "kirby", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "kingdedede", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "metaknight", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "fox", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "falco", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "pikachu", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "charizard", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "lucario", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "jigglypuff", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "greninja", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "rob", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "ness", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "captainfalcon", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "villager", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "olimar", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "wiifittrainer", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "shulk", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "drmario", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "darkpit", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "lucina", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "pacman", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "megaman", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "sonic", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "mewtwo", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "lucas", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "roy", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "ryu", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "cloud", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "corrin", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "bayonetta", "main": true, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miibrawler1", "main": false, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miigunner1", "main": false, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miisword1", "main": false, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miibrawler", "main": false, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miigunner", "main": false, "imageSets": ["ssb4","ssb4r"]},
			{"name": "miisword", "main": false, "imageSets": ["ssb4","ssb4r"]}
		]
	}
];

let Game = `
{
	"custom": = false,
	"name": "",
	"imageSets": [],
	"defaultChars": [],
	"extraChars": []
}
`;

let Save = `
{
	"name": "",
	"custom": = false,
	"game": = 0,
	"tiers": [
		{"label": "", "color": "", "characters": [
			{"folder": "", "name": "", "label": "", "url": ""}
		]}
	]
}
`;