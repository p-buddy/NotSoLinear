$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".header").show(100);
    } else {
        $(".header").hide(100);
    }
    this.previousTop = currentTop;
});

$( document ).ready(function() {
	// first run
});

$(document).on('click','.toggle',function() {
	var toggleID = $(this).data("tid");
	$(this).find('span').toggleClass('toggle-on toggle-off');
	var explanationText = ", " + $('.toggle-on').data("expl");
	$(".explanation[data-tid='" + toggleID + "']").html(explanationText);
});

// var updateDescription = function(element, type) {
// 	phraseStart = "";
// 	phraseEnd = "";
// 	block = '<div class="dropdown-content"><p class="dropdown-selector" onclick="updateDescription(this,' + "'simple'" + ')">Simply</p><p class="dropdown-selector" onclick="updateDescription(this, ' + "'notsimple'" + ')">Not so simply</p></div>';

// 	if (type === 'simple') {
// 		phraseStart = "Simply";
// 		phraseEnd = "we want to use interface design to remove some of the mystery around how a modern AI makes decisions. That way doctors can interact with and trust in an AI's responses and use them to better treat patients"
// 	}
// 	else {
// 		phraseStart = "Not so simply";
// 		phraseEnd = "we are exploring how interface design can improve the intepretability of <button class='tooltip'>deep neural networks<span class='tooltiptext'>These are the things that enable some of the smartest AI systems to <em>think</em> and make decisions.</span></button>. That way doctors can fully scrutinize the conclusions of an AI and use them to augment their own thinking."
// 	}
// 	element.classList.add("selected-dropdown");
// 	document.getElementById("simple-selector").innerHTML = phraseStart + ',' + block;
// 	document.getElementById("description").innerHTML = phraseEnd;
// };
