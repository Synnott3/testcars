class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() //load images and sounds
    {
        this.load.image("road","images/road.jpg");
        this.load.spritesheet("cars","images/cars.png",{frameWidth:60,frameHeight:126});
        this.load.image("line","images/line.png");
        this.load.image("pcar1","images/pcar1.png");
        this.load.image("pcar2","images/pcar2.png");
        this.load.image("cone","images/cone.png");
        this.load.image("barrier","images/barrier.png");

        this.load.image("toggleBack", "images/ui/toggles/1.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");

        this.load.audio('backgroundMusic',["audio/random-race.mp3","audio/random-race.ogg"]);
        this.load.audio('boom',["audio/boom.mp3","audio/boom.ogg"]);
        this.load.audio('whoosh',["audio/whoosh.mp3","audio/whoosh.ogg"]);

    }
    create() { //define objects
        emitter=new Phaser.Events.EventEmitter();
        controller=new Controller();
        var mediaManager=new MediaManager({scene:this});
        Model.gameOver=false;

        this.sb=new ScoreBox({scene:this});
        this.sb.x=game.config.width-50;
        this.sb.y=50;    

        this.road=new Road({scene:this})
        this.road.x=game.config.width/2;
        this.road.makeLines();

        this.AlignGrid=new AlignGrid({scene:this,rows:5,cols:5}); 
        //this.AlignGrid.showNumbers();
        this.AlignGrid.placeAtIndex(4,this.sb);

        var soundButtons=new SoundButtons({scene:this});
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
    } //constant running loop

}