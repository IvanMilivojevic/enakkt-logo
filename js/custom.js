jQuery(document).ready(function(){
	var delay = 0;
	var delayLetter = 3;
	jQuery(".anim-item").each(function(){
		delay += 0.2;
		trans = delay.toFixed(2).concat("s");
		jQuery(this).css("transition-delay", trans);
	});
	jQuery(".letter-holder").each(function(){
		delayLetter += 0.2;
		transLetter = delayLetter.toFixed(2).concat("s");
		jQuery(this).css("transition-delay", transLetter);
	});
	setTimeout(function(){
		jQuery(".anim-section").addClass("completed");
	}, 4400);
	jQuery(".anim-wrapper").addClass("active");
});
