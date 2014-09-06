enchant(); //the magic words that start enchant.js

window.onload = function() {
	
	//game object creation
	var game = new Core(320, 320);

	//image loading
	game.preload('images/jipster_small.png');
	
	game.fps = 20;
	
    game.onload = function(){
        var bear = new Sprite(69, 104);
        bear.image = game.assets['images/jipster_small.png'];
        game.rootScene.addChild(bear);
        bear.frame = [6];   // select sprite frame
        
        bear.tl.moveBy(278, 0, 90)   // move right
            .scaleTo(-1, 1, 10)      // turn left
            .moveBy(-278, 0, 90)     // move left
            .scaleTo(1, 1, 10)       // turn right
            .loop();                 // loop it
    };

    game.start(); // start your game!

};