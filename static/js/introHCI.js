'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e) {
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	$(".project-description").fadeToggle()
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("A new message!!");

		$(".jumbotron p").toggleClass("active");

	});
	$("a.thumbnail").click(projectClick)

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}