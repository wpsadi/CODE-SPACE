// discriminatied unions - having different interfaCE FOR DIFFERENT THINGS

interface circle {
    kind: "circle",
    radius: number
}
interface square {
    kind: "square",
    side: number
}

interface rect {
    kind: "rect",
    length: number,
    width: number
}


type shape = circle | square | rect

function getTrueShape(shape: shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }

    // return shape.side ** 2
}

function getArea(shape: shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2

        case "rect":
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}