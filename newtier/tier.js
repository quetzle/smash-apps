/***

	Tier List Maker v3.0
		by radbot
	
*/

var currentGameId;			// id of game the user is making a tier list for
var currentImageSetId;		// id of image set the user is using
var gameList = [];			// list of game options, used for filling dropdowns
var imageSetList = [];		// list of image set options for current game, used for filling dropdowns
var characterList = [];		// list of character images, used for filling tier lists or during setup

var charHTML = "<div class=\"character\"><div class=\"char-controls\"><span class=\"char-settings\"></span><span class=\"left\"></span><span class=\"up\"></span><span class=\"down\"></span><span class=\"right\"></span></div></div>";		// html for a character icon
var colors = ["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#7F7FFF","#FF7FFF","#BF7FBF","#3B3B3A","#858585","#CFCFCF","#F7F7F7"];		// default tier label colors

function addCharacter(id, row, name) {
	console.log(id + " " + name);
	var currentRow = (row > -1 ) ? $(".tier:eq(" + row + ")") : $(".bin");	// if `row` is -1, add images to default bin at the bottom
	var imageSet = games[currentGameId].imageSets[currentImageSetId].folder;
	$(charHTML).css("background-image","url('img/" + imageSet + "/" + name + ".png')")
			   .attr("id",id)
			   .appendTo(currentRow);
}

$(document).ready(function() {
	console.log("Page loaded.");
	console.log(games);
	
	// load games into dropdown menu
	for (var i in games)
		gameList.push("<option value=\"" + i + "\">" + games[i].name + "</option>");
	$("#game-select").append(gameList.join(""));
	
	$(document).on("click", "#go", function() {
		characterList = [];
		currentImageSetId = Number($("#imageset-select option:selected").val());
		for (var i in games[currentGameId].characters) {
			addCharacter(i, -1, games[currentGameId].characters[i].name);
		}
	});
	
	$(document).on("change", "#game-select", function() {
		currentGameId = Number($("#game-select option:selected").val());
		console.log(currentGameId);
		imageSetList = [];
		if (isNaN(currentGameId)) {
			$("#imageset-select").html("");
		} else {
			for (var i in games[currentGameId].imageSets)
				imageSetList.push("<option value=\"" + i + "\">" + games[currentGameId].imageSets[i].name + "</option>");
			$("#imageset-select").html("");
			$("#imageset-select").append(imageSetList.join(""));
		}
	});
	$(document).on("change", "#imageset-select", function() {
		currentImageSetId = Number($("#imageset-select option:selected").val());
	});
	
	// move character icon with buttons instead of drag-and-drop
	$(document).on("click", ".left", function() {
		console.log("left");
		$(this).closest(".character").insertBefore($(this).closest(".character").prev());
	});
	$(document).on("click", ".right", function() {
		console.log("right");
		$(this).closest(".character").insertAfter($(this).closest(".character").next());
	});
	$(document).on("click", ".up", function() {
		console.log("up");
		$(this).closest(".character").appendTo($(this).closest(".row").prevAll(".row:first").children(".tier"));
	});
	$(document).on("click", ".down", function() {
		console.log("down");
		$(this).closest(".character").prependTo($(this).closest(".row").nextAll(".row:first").children(".tier"));
	});
	
	// drag and drop
	dragula({
		isContainer: function (el) {
			return el.classList.contains('tier');
		},
		direction: 'horizontal'
	});
});