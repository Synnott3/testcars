class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() //load images and sounds
    {
        
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