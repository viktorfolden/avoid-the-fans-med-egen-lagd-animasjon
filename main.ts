scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e 4 f f 4 f f 4 e f . . . 
        . . f e 4 4 4 d 4 4 4 e f . . . 
        . . f f e d d d d d e e f . . . 
        . . f 4 f e 4 4 4 e e e f . . . 
        . . f d f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 1 d f . . . 
        . . . f f d d d d d f f 4 f . . 
        . . . . . f f f f f . . f . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e 4 f f 4 f f 4 e f . . . 
        . . f e 4 4 4 d 4 4 4 e f . . . 
        . . f f e d d d d d e e f . . . 
        . . f 4 f e 4 4 4 e e e f . . . 
        . . f d f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 1 d f . . . 
        . . . f f d d d d d f f 4 f . . 
        . . . . . f f f f f . . f . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e 4 f f 4 f f 4 e f . . . 
        . . f e 4 4 4 d 4 4 4 e f . . . 
        . . f f e d d d d d e e f . . . 
        . . f 4 f e 4 4 4 e e e f . . . 
        . . f d f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 1 d f . . . 
        . . . f f d d d d d f f 4 f . . 
        . . . . . f f f f f . . f . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e 2 e e e 2 e f f . . . 
        . . f f f 4 2 4 2 4 f f f . . . 
        . . f e f b f 2 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . f 4 d f 1 1 1 1 1 f d 4 f . . 
        . . f f f d d d d d f f f . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e 2 e e e 2 e f f . . . 
        . . f f f 4 2 4 2 4 f f f . . . 
        . . f e f b f 2 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . f 4 d f 1 1 1 1 1 f d 4 f . . 
        . . f f f d d d d d f f f . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e 4 f f 4 f f 4 e f . . . 
        . . f e 4 4 4 d 4 4 4 e f . . . 
        . . f f e d d d d d e e f . . . 
        . . f 4 f e 4 4 4 e e e f . . . 
        . . f d f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 1 d f . . . 
        . . . f f d d d d d f f 4 f . . 
        . . . . . f f f f f . . f . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e 2 e e e 2 e f f . . . 
        . . f f f 4 2 4 2 4 f f f . . . 
        . . f e f b f 2 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . f 4 d f 1 1 1 1 1 f d 4 f . . 
        . . f f f d d d d d f f f . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f e e 5 5 f f . . . . 
        . . . f f e e e e 5 5 f . . . . 
        . . f f e e e e e e e f f . . . 
        . . f f f 2 2 2 2 2 f f f . . . 
        . . f e f b f 4 f b f e f . . . 
        . . f e 4 1 f d f 1 4 e f . . . 
        . . f e e d d d d d e e f . . . 
        . . f e e e 4 4 4 e e e f . . . 
        . . f e f 1 1 1 1 1 f e f . . . 
        . . f d f 1 1 1 1 1 f d f . . . 
        . . . 4 f d d d d d f 4 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    game.gameOver(true)
})
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
