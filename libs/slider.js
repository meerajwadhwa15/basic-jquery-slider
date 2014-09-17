$.fn.slider = function(opt) {

    // current slider tab default to first
    var _this = this,

    options = {
        // crousel length
        crouselLength: 4,
        // crousel per element width
        crouselWidth: 500,
        currentTab : 1
    },



    selector = {
        ul: ".slider-container ul",
        prev: ".prev",
        next: ".next",
        container: ".slider-container",
        mainContainer: ".main-slider-container",
        li: ".slider-container ul li"
    },

    bindEvents = function() {
    	$(selector.prev).click(function() { _this.moveBack() });
        $(selector.next).click(function() { _this.moveForward() });
    },

    init = function() {
    	// set crousel layout
    	_this.setCrousel();
        bindEvents();
    };

    $.extend(options, opt);

    this.setCrousel = function() {
    	// disable prev link
    	$(selector.prev).addClass("disable-link");	
    	$(selector.ul).css({width: (options.crouselLength * options.crouselWidth) + "px"});
    	$(selector.container +"," + selector.mainContainer +"," + selector.li ).css({width: options.crouselWidth + "px"});
    },

    // move back
    this.moveBack = function() {
    	if(options.currentTab > 1) {
	    	$(selector.prev).removeClass("disable-link");	
	    	$(selector.next).removeClass("disable-link");	
    		options.currentTab--;
    		_this.moveCrousel();
    	} 

    	if(options.currentTab == 1) {
    		$(selector.prev).addClass("disable-link");
    	}
    },

    // move forward
    this.moveForward = function() {
    	if(options.currentTab < options.crouselLength) {	
    		$(selector.prev).removeClass("disable-link");	
	    	$(selector.next).removeClass("disable-link");	
    		options.currentTab++;
    		_this.moveCrousel();
    	} 

    	if(options.currentTab == options.crouselLength) {
    		$(selector.next).addClass("disable-link");
    	}
    },

    // move crousel
    this.moveCrousel = function() {
		$(selector.ul).animate({ 'left': -((options.currentTab - 1)*500)+'px' }, 1000, function() {});
    };

    init();
};