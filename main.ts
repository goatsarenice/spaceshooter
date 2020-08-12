namespace SpriteKind {
    export const UfoProjectileKind = SpriteKind.create()
    export const SpacehipProjectileKind = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SpaceshipProjectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Spaceship, 50, 0)
    SpaceshipProjectile.setKind(SpriteKind.SpacehipProjectileKind)
    pause(500)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UfoProjectileKind, function (sprite, otherSprite) {
    UFOprojectile.destroy()
    info.changeLifeBy(-1)
    Spaceship.destroy(effects.fire, 100)
    if (info.life() == 0) {
        game.over(false)
    } else {
        Spaceship = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 4 4 1 1 1 1 1 1 1 9 9 . . . . 
            . 2 4 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 5 4 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 . . . . 1 . . . . . . 
            . . . . . 1 1 . . . 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(Spaceship)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.SpacehipProjectileKind, function (sprite, otherSprite) {
    UFO.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    SpaceshipProjectile.destroy()
    if (info.score() == 15) {
        effects.confetti.startScreenEffect()
        game.over(true)
    } else {
        UFO = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        UFO.setPosition(147, 53)
        UFO.setVelocity(0, -50)
    }
})
let UFOprojectile: Sprite = null
let SpaceshipProjectile: Sprite = null
let UFO: Sprite = null
let Spaceship: Sprite = null
Spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 4 4 1 1 1 1 1 1 1 9 9 . . . . 
    . 2 4 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 5 4 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 . . . . 1 . . . . . . 
    . . . . . 1 1 . . . 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
effects.blizzard.startScreenEffect()
UFO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
UFO.setPosition(147, 53)
controller.moveSprite(Spaceship)
UFO.setVelocity(0, -50)
info.setLife(3)
info.setScore(0)
forever(function () {
    UFOprojectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, UFO, -100, 0)
    UFOprojectile.setKind(SpriteKind.UfoProjectileKind)
    pause(500)
    music.pewPew.play()
})
forever(function () {
    if (UFO.y > 120) {
        UFO.setVelocity(0, -48)
    }
    if (UFO.y <= 10) {
        UFO.setVelocity(0, 50)
    }
})
forever(function () {
    music.playMelody("F C5 A E C B G D ", 145)
})
