define(function(require, exports, module) {
    // import dependencies
    var Engine 				= require("famous/core/Engine");
    var Surface 			= require("famous/core/Surface");
    var Modifier 			= require("famous/core/Modifier");
    var Transform 			= require("famous/core/Transform");

    var Transitionable  	= require("famous/transitions/Transitionable");
    var Easing		        = require("famous/transitions/Easing");

    var ContainerSurface    = require("famous/surfaces/ContainerSurface");
    var ScrollView          = require("famous/views/ScrollView");

   	
    // create the main context
    var mainContext = Engine.createContext();

    //show a grid for reference
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });
    mainContext.add(new Modifier({origin:[.5,.5], transform: Transform.translate(100,0,0)})).add(grid);


    //create the dot
    var surface = new Surface({
    	size:[100,100],
    	classes: ['famousRedBackground'],
    	properties: {
    		borderRadius: "50px"
    	}
    });

    var modifier = new Modifier({
    	origin: [.5,.5],
        transform: Transform.translate(100,-240,0)
    });

    mainContext.add(modifier).add(surface);


    //This is where the meat is
    function _playCurve(curve){
        modifier.setTransform(Transform.translate(100,-240,0));
        modifier.setTransform(
            Transform.translate(100,0,0), 
            { curve: curve, duration: 1000}
        );
    }


    //Create a scroll view to let the user play with the different easing curves available.
    var curves = [];
    for(var curve in Easing){
        var surface = new Surface({
            size:[200,40],
            content: "<h3>" + curve + "</h3>",
            properties: {color:"#3cf"}
        });

        curves.push(surface);
        surface.on("click", 
            _playCurve.bind(null, Easing[curve])
        );
    }

    




    //this code creates a scrollview and container to clip it for showing the different 
    //easing curves

    //this will hold and clip the scroll view
    var scrollContainer = new ContainerSurface({
        size: [200,480],
        properties: {
            overflow:"hidden",
            border: "1px solid rgba(255,255,255, .8)",
            borderRadius: "10px 0px 0px 10px"
        }
    })

    //the actual scroll view
    var scrollView = new ScrollView({
        clipSize: 460
    });

    //set where the items come from 
    scrollView.sequenceFrom(curves);

    //give the scroll view input
    scrollContainer.pipe(scrollView);

    //add the scrollview to the scroll container
    scrollContainer.add(new Modifier({transform: Transform.translate(20,0,0)})).add(scrollView);
    
    //finally add the scroll container to the context
    mainContext.add(new Modifier({origin: [.5,.5], transform: Transform.translate(-240,0,0)})).add(scrollContainer);


});
