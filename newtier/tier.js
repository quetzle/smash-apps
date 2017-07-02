/***

	Tier List Maker v3.0
		by radbot
	
*/

var currentGameId;			// id of game the user is making a tier list for
var currentImageSetId;		// id of image set the user is using
var currentCharacter;		// jQuery object of the currently selected character
var gameList = [];			// list of game options, used for filling dropdowns
var imageSetList = [];		// list of image set options for current game, used for filling dropdowns
var characterList = [];		// list of character images, used for filling tier lists or during setup

var charHTML = "<div class=\"character\"><div class=\"char-controls\"><span class=\"char-settings\"></span><span class=\"left\"></span><span class=\"up\"></span><span class=\"down\"></span><span class=\"right\"></span></div></div>";		// html for a character icon
var colors = ["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#7F7FFF","#FF7FFF","#BF7FBF","#3B3B3A","#858585","#CFCFCF","#F7F7F7"];		// default tier label colors

function addCharacter(gameId, imageSet, charId, row, character) {
	console.log(charId + " " + character.name);
	var currentRow = $(".tier:eq(" + row + ")")
	// if `row` is -1, add images to default bin at the bottom
	if (row = -1)
		currentRow = $(".bin");
	var imageSet = games[currentGameId].imageSets[currentImageSetId].folder;
	$(charHTML).css("background-image","url('img/" + imageSet + "/" + character.name + ".png')")
			   .attr("data-game-id", gameId)
			   .attr("data-image-set", imageSet)
			   .attr("data-char-id", charId)
			   .appendTo(currentRow);
}

function showModal(name) {
	$(".modal-" + name).css("display", "block");
	$(".modal-wrap").css({"opacity": "1", "visibility": "visible"});
}

function hideModals() {
	$(".modal").css("display", "none");
	$(".modal-wrap").css({"opacity": "0", "visibility": "hidden"});
}

$(document).ready(function() {
	console.log("Page loaded.");
	console.log(games);
	
	// load games into dropdown menu
	for (var i in order) {
		gameList.push("<optgroup label=\"" + order[i].name + "\">");
		for (var k in order[i].games) {
			var gameId = Number(order[i].games[k]);
			gameList.push("<option value=\"" + gameId + "\">" + games[gameId].name + "</option>");
		}
		gameList.push("</optgroup>");
	}
	$("#game-select").append(gameList.join(""));
	
	$(document).on("click", ".modal-close, .modal-wrap", function(e) {
		if (e.target != this) return;
		hideModals();
	});
	
	$(document).on("click", ".modal-button", function() {
		showModal(this.dataset.modal);
	});
	
	$(document).on("click", ".char-settings", function() {
		console.log("Settings clicked");
		currentCharacter = $(this).closest(".character");
		$("#settings-game-id").val(currentCharacter.attr("data-game-id"));
		$("#settings-image-set").val(currentCharacter.attr("data-image-set"));
		$("#settings-char-id").val(currentCharacter.attr("data-char-id"));
	});
	$(document).on("click", "#settings-go", function() {
		var name = games[Number($("#settings-game-id").val())].characters[Number($("#settings-char-id").val())].name;
		var imageSet = $("#settings-image-set").val();
		currentCharacter.css("background-image","url('img/" + imageSet + "/" + name + ".png')")
						.attr("data-game-id", $("#settings-game-id").val())
						.attr("data-image-set", imageSet)
						.attr("data-char-id", $("#settings-char-id").val());
	});
	
	$(document).on("click", "#setup-go", function() {
		characterList = [];
		currentImageSetId = Number($("#imageset-select option:selected").val());
		for (var i in games[currentGameId].characters) {
			addCharacter(currentGameId, games[currentGameId].imageSets[currentImageSetId], i, -1, games[currentGameId].characters[i]);
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