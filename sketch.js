
let level = [
    '                 g             p g           p                                                                                                                                                                                                    ',
    '                gd      p    ggggd                                                             p   p               p                                                                                                                              ',
    '                ddp p p p  x ddddd        p  g                                               p   p   p             p                                                                                                                              ',
    '         g     xddgggggggggggddddd     ggggggd  pp  p                                  p  gggggvvvvvvvvvvggg       h                                          pp                                                                                  ',
    '         dggggggdddddddddddddddddd     dddddddgggggggggg p p                    pp    ggggg                       p                                            gggg               p                                                      pp      e ',
    '   p  p         dddddddddddddddddd     ddddddddddddddddggggg  p p p           ggg                    z        gggggg                                                 p      p   ggg                          pp                        pppp       ',
    'ggggggp  p                                   dddddddddddddddggggggg     ggggggddd          p           p             g  x  p                    p                    gggvvvvggg                 pp        gggggg      pp            gggggggggggggg',
    'ddddddp                                                                 ddddddddd    p  p p        ggggg             dgggggggg  p               p    gggg p  gggg                            g             p      gg    gggg                      ',
    'ddddddggggg                                                             ddddddddd    ggggggggggggg ddddd             dddddddddggg              gggg  ddddggggdddd            p p p  x   gggggd     ggggggggp          p          p  gggg          ',
    'ddddddddddd                         gpppp             p p p p           ddddddddd    ddddddddddddd ddddd             dddddddddddd        ggggg dddd  dddddddddddd            gggggggggggdddddd     ddddddddp       p     p       ggggddd          ',
    'ddddddddddd                         dggggggg  x ggggggggggggggggggggggggddddddddd    ddddddddddddd ddddd             dddddddddddd xp p p ddddd dddd  dddddddddddd            ddddddddddddddddd     ddddddddggg    p       p                       ',
    'ddddddddddd                         ddddddddggggddddddddddddddddddddddddddddddddd    ddddddddddddd ddddd             ddddddddddddggggggggddddd dddd  dddddddddddd            ddddddddddddddddd     dddddddddddgggggggggggggggggggggggggggggggggggg'
]

let level2 = [
    '       k                            k                                        k k                                                          mmm k k mmmmmmmmmmmmmmmmmmmmmmmmmmm                            k k k k k            k k k               ',
    '       k                           mmmm                                     bbbbb                                                         sssmmmmmsssssssssssssssssssssssssssmmmmmmmmmm      mmmmmmmmmmmmmmmmmmmmmmmmm     mmmmmmmmmm             ',
    '       k                                 k                               k                                                       k        sssssssssssssssssssssssssssssssssssssssssssss      sssssssssssssssssssssssss          sssss             ',
    '       k                                 k                                          mmmm                                       mmmmmmm    sssssssssssssssssssssssssssssssssssssssssssss        sssssssssssssssssssssss          sssss             ',
    '      mmmmm                      k       k                               k        k ssss k                       k        h    sssssss                sssssssss   k k    kkk                     sssssssssssssssssssss       kk sssss k           ',
    '                              mmmmmm    mmmmmmm                                     ssss   k                      k            sssssss                sssssssss  k k k   kkk                                     sssss          sssssmmmm         ',
    '                                     k                                  mmm k  mmm  ssss     k                   k       mmmmmmsssssss    k k k k k k sssssssssk k k k k kkk                                     sssss     mmmmmsssss             ',
    '               k                     k                       kmmmmmmmbbbsss    sss  ssss       k                  k   mmmsssssssssssss    mmmmmmmmmmmmmmsssssss  k k k   kkk  mmmmmbbbbbbbbbb                    sssss          sssss     k       ',
    '       k  mmmmmmmmmm                 k    k                  ksssssss   sss    sss  ssss      m  k             mmmmmm sssk k k k k k      k k k k k k sssssssss   k k    kkk  s                    kkkkkkkkkk                   sssss    mmmm     ',
    '  k  mmmmmssssssssss k       mmmmmmmmmmmmmmmmmmmmm   x k k   ksssssss   sss    sss  ssss      s    k           ssssss sssk k k k k k      k k k k k k sssssssss    k     kkk  s                                                 sssss    ssss     ',
    'mmmmmsssssssssssssss   k x   sssssssssssssssssssssmmmmmmmmmmmmsssssss   sss kk sss  ssss      s      k       x ssssss sssk k k k k k      k k k k k k sssssssss   k k    kkk  s               kkkkkkkkkk                        sssss    ssss     ',
    'ssssssssssssssssssssmmmmmmmmmssssssssssssssssssssssssssssssssssssssss   sssmmmmsss  ssss      smmmmmmmmmmmmmmmmssssss ssmmmmmmmmmmmmmmmmmmbbbbbbbbbbmmssssssbbbbbbbbbbbbbbbbbbs              mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsssss    ssssmmmmm'

]

let itemName = 'pineapples:'

let spawnPointX = 0;
let spawnPointY = 0;

function preload() {
    playerSheet = loadImage("./Free/MainCharacters/NinjaFrog/Idle (32x32).png");
    worldSheet = loadImage("./Free/Terrain/Terrain (16x16).png");
    pineappleSheet = loadImage("./Free/Items/Fruits/pineapple.png");
    halfwaySheet = loadImage("./Free/Items/Checkpoints/Checkpoint/Checkpoint(idle).png");
    startSheet = loadImage("./Free/Items/Checkpoints/Start/Start(Moving).png");
    endSheet = loadImage("./Free/Items/Checkpoints/End/End(Pressed).png");
    enemiSheet = loadImage("./Free/MainCharacters/PinkMan/Idle (32x32).png");
    kiwiSheet = loadImage("./Free/Items/Fruits/Kiwi.png");
}


function setup() {
    new Canvas(innerWidth / 4, innerHeight / 4, "pixelated x4");

    // GROUND
    grass = new Group();
    grass.spriteSheet = worldSheet;
    grass.tile = 'g';
    grass.collider = 'static';
    grass.addAni({ col: 7, row: 0, w: 16, h: 16 })

    // BRIDGE
    bridge = new Group();
    bridge.spriteSheet = worldSheet;
    bridge.tile = 'b';
    bridge.collider = 'static';
    bridge.addAni({ col: 18, row: 1, w: 16, h: 16 })

    // METAL BRIDGE
    metal = new Group();
    metal.spriteSheet = worldSheet;
    metal.tile = 'v';
    metal.collider = 'static';
    metal.addAni({ col: 18, row: 2, w: 16, h: 16 })

    // GROUND2
    pink = new Group();
    pink.spriteSheet = worldSheet;
    pink.tile = 'm';
    pink.collider = 'static';
    pink.addAni({ col: 7, row: 8, w: 16, h: 16 })

    // DIRT
    dirt = new Group();
    dirt.spriteSheet = worldSheet;
    dirt.tile = 'd';
    dirt.collider = 'static';
    dirt.addAni({ col: 7, row: 1, w: 16, h: 16 })

    // DIRT2
    soil = new Group();
    soil.spriteSheet = worldSheet;
    soil.tile = 's';
    soil.collider = 'static';
    soil.addAni({ col: 7, row: 9, w: 16, h: 16 })

    // ITEM ONE (PINEAPPLE)
    pineapples = new Group();
    pineapples.spriteSheet = pineappleSheet;
    pineapples.tile = 'p';
    pineapples.collider = 'none';
    pineapples.addAnis({
        idle: { frames: 17, w: 32, h: 32, row: 0 }
    })

    // ITEM ONE LEVEL2 (KIWI)
    kiwis = new Group();
    kiwis.spriteSheet = kiwiSheet;
    kiwis.tile = 'k';
    kiwis.collider = 'none';
    kiwis.addAnis({
        idle: { frames: 17, w: 32, h: 32, row: 0 }
    })

    // ITEM TWO (FLAGPOINT)
    halfway = new Group();
    halfway.height = 64;
    halfway.width = 64;
    halfway.spriteSheet = halfwaySheet;
    halfway.tile = 'h';
    halfway.collider = 'none';
    halfway.addAnis({
        idle: { frames: 10, w: 64, h: 64, row: 0 }
    })

    // ITEM THREE (START)
    start = new Group();
    start.height = 64;
    start.width = 64;
    start.spriteSheet = startSheet;
    start.tile = 'z';
    start.collider = 'none';
    start.addAnis({
        idle: { frames: 17, w: 64, h: 64, row: 0 }
    })

    // ITEM FOUR (END)
    ends = new Group();
    ends.height = 64;
    ends.width = 64;
    ends.spriteSheet = endSheet;
    ends.tile = 'e';
    ends.collider = 'none';
    ends.addAnis({
        idle: { frames: 8, w: 64, h: 64, row: 0 }
    })

    // ENEMI
    enemies = new Group();
    enemies.spriteSheet = enemiSheet;
    enemies.tile = 'x';
    enemies.debug = true;
    enemies.width = 24;
    enemies.height = 24;
    enemies.rotationLock = true;
    enemies.addAnis({
        idle: { frames: 11, w: 32, h: 32, row: 0 }
    })

    // CREATION OF TILES
    tiles = new Tiles(level, 0, 0, 16, 16);

    // CREATION OF FIRST CHARACTER
    player = new Sprite()
    player.points = 0;
    player.bounciness = 0.01;
    player.friction = 1;
    player.rotationLock = true;
    player.spriteSheet = playerSheet;
    player.addAnis({
        idle: { frames: 11, w: 32, h: 32, row: 0 }
    });


    world.gravity.y = 9.81;
}

let isGamePaused = false;

function draw() {
    background(201, 225, 251);

    if (isGamePaused) {
        if (keyIsDown('R')) {
            location.reload();
        }
        gameOver();
        return;
    }
    // ENEMIES MOVE TOWARDS PLAYER
    for (let enemi of enemies) {
        enemi.moveTowards(player.x, undefined, 0.01);
    }
    for (enemi of enemies) {
        if (enemi.overlapping(player))
            killPlayer()
    }

    for (let end of ends) {
        if (end.overlapping(player)) {
            tiles.remove();
            tiles = new Tiles(level2, 0, 0, 16, 16);
            itemName = 'kiwis:'
            player.x = 0;
            player.y = 0;
        }
    }

    camera.x = player.x;
    camera.y = player.y;

    // MOVE TO THE LEFT
    if (kb.pressing("left")) {
        player.vel.x = -3;
        player.mirror.x = true;
    }
    // MOVE TO THE RIGHT
    if (kb.pressing("right")) {
        player.vel.x = 3;
        player.mirror.x = false;
    }

    // JUMP UP
    if (kb.pressing("up") && player.colliding(tiles)) { player.vel.y = -4; }

    for (let pineapple of pineapples) {
        if (pineapple.overlapping(player)) {
            player.points = player.points + 1;
            pineapple.remove();
        }
    }

    for (let kiwi of kiwis) {
        if (kiwi.overlapping(player)) {
            player.points = player.points + 1;
            kiwi.remove();
        }
    }

    if (player.y > 240) {
        killPlayer();
    }

    // AFFICHAGE
    text(itemName + player.points, 0, 20);

    if (halfway.overlapping(player)) {
        text("Savepoint :)", 0, 40);
        spawnPointX = 1801;
        spawnPointY = 55;
    }



    print(player.x, player.y);
    // 1801 55 
}

function killPlayer() {
    isGamePaused = true;

}

function gameOver() {
 //   enemies.remove();
//    tiles.collider = "none";
    text("GAME OVER", 0, 60);
    text("Press R to restart", 0, 70);

    setTimeout(() => {
    player.x = spawnPointX;
    player.y = spawnPointY;
    isGamePaused = false;
    }, 2000)
}