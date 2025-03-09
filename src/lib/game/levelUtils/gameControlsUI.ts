import k from "../kaplay";

export const gameControlsUI = () => {
    const controls = k.add(
        [
            k.sprite("controls"),
            k.scale(3),
            k.layer("ui"),
            k.z(100),
            k.pos(k.width() / 2, k.height() / 2),
            k.anchor("center"),
            "controls",
        ]
    )

    const closeButton = controls.add(
        [
            k.sprite("mini-close-btn"),
            k.layer("ui"),
            k.area(),
            k.z(120),
            k.pos(controls.width / 2 - 15, -controls.height / 2 + 15),
            k.anchor("center"),
            "closeButton",
        ]
    )
}
