//var game = new Phaser.Game(1300, 650, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, update: update});
var game = new Phaser.Game(1300, 650, Phaser.AUTO, document.getElementById('game'));

var Game = {};


var platforms;

Game.init = function () {
    game.stage.disableVisibilityChange = true;
};

//PRELOAD
Game.preload = function () {
    game.load.image('bg', 'assets/img/bg.png');
    game.load.image('ground', 'assets/img/platform.png');
    game.load.atlasJSONHash('player', 'assets/sprites/defector/defector.png', 'assets/sprites/defector/defector.json');
    game.load.atlasJSONHash('player_attack', 'assets/sprites/defector/defector_attack.png', 'assets/sprites/defector/defector_attack.json');
    game.load.image('player_jump', 'assets/sprites/knight03_pulo.png');
};
//CREATE
Game.create = function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    var mp = game.add.tileSprite(0, 0, 3072, 650, 'bg');
    game.world.setBounds(0, 0, 3072, 650);

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height - 5, 'ground');
    ground.scale.setTo(10, 0.2);
    ground.body.immovable = true;

};
//UPDATE
Game.update = function () {

};

game.state.add('Game', Game);
game.state.start('Game');