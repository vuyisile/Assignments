const paths = [
    { x: 16, y: 1, player: "", type: "walkThrough" },
    { x: 17, y: 1, player: "", type: "walkThrough" },
    { x: 18, y: 1, player: "", type: "walkThrough" },
    { x: 19, y: 1, player: "", type: "walkThrough" },
    { x: 14, y: 1, player: "", type: "walkThrough" },
    { x: 16, y: 2, player: "", type: "walkThrough" },
    { x: 15, y: 2, player: "", type: "walkThrough" },
    { x: 16, y: 3, player: "", type: "walkThrough" },
    { x: 15, y: 3, player: "", type: "walkThrough" },
    { x: 14, y: 2, player: "", type: "walkThrough" },
    { x: 14, y: 3, player: "", type: "walkThrough" },
    { x: 12, y: 1, player: "", type: "walkThrough" },
    { x: 13, y: 1, player: "", type: "walkThrough" },
    { x: 11, y: 1, player: "", type: "walkThrough" },
    { x: 10, y: 1, player: "", type: "walkThrough" },
    { x: 9, y: 1, player: "", type: "walkThrough" },
    { x: 8, y: 1, player: "", type: "walkThrough" },
    { x: 7, y: 10, player: "", type: "walkThrough" },
    { x: 8, y: 2, player: "", type: "walkThrough" },
    { x: 7, y: 1, player: "", type: "walkThrough" },
    { x: 11, y: 3, player: "", type: "walkThrough" },
    { x: 11, y: 4, player: "", type: "walkThrough" },
    { x: 11, y: 5, player: "", type: "walkThrough" },
    { x: 11, y: 6, player: "", type: "walkThrough" },
    { x: 11, y: 2, player: "", type: "walkThrough" },
    { x: 10, y: 2, player: "", type: "walkThrough" },
    { x: 10, y: 3, player: "", type: "walkThrough" },
    { x: 10, y: 3, player: "", type: "walkThrough" },
    { x: 10, y: 3, player: "", type: "walkThrough" },
    { x: 8, y: 3, player: "", type: "walkThrough" },
    { x: 9, y: 3, player: "", type: "walkThrough" },
    { x: 14, y: 3, player: "", type: "walkThrough" },
    { x: 14, y: 3, player: "", type: "walkThrough" },
    { x: 6, y: 1, player: "", type: "walkThrough" },
    { x: 4, y: 3, player: "", type: "walkThrough" },
    { x: 4, y: 4, player: "", type: "walkThrough" },
    { x: 4, y: 5, player: "", type: "walkThrough" },
    { x: 4, y: 6, player: "", obj: "weapons", type: "walkThrough" },
    { x: 4, y: 2, player: "", type: "walkThrough" },
    { x: 4, y: 1, player: "", type: "walkThrough" },
    { x: 5, y: 1, player: "", type: "walkThrough" },
    { x: 7, y: 7, player: "", type: "walkThrough" },
    { x: 8, y: 7, player: "", type: "walkThrough" },
    { x: 9, y: 7, player: "", type: "walkThrough" },
    { x: 10, y: 7, player: "", type: "walkThrough" },
    { x: 11, y: 7, player: "", type: "walkThrough" },
    { x: 12, y: 7, player: "", type: "walkThrough" },
    { x: 13, y: 7, player: "", type: "walkThrough" },
    { x: 14, y: 7, player: "", type: "walkThrough" },
    { x: 15, y: 7, player: "", type: "walkThrough" },
    { x: 16, y: 7, player: "", type: "walkThrough" },
    { x: 11, y: 7, player: "", type: "walkThrough" },
    { x: 8, y: 8, player: "", type: "walkThrough" },
    { x: 10, y: 8, player: "", type: "walkThrough" },
    { x: 11, y: 8, player: "", type: "walkThrough" },
    { x: 12, y: 8, player: "", type: "walkThrough" },
    { x: 13, y: 8, player: "", type: "walkThrough" },
    { x: 14, y: 8, player: "", type: "walkThrough" },
    { x: 16, y: 8, player: "", type: "walkThrough" },
    { x: 11, y: 8, player: "", type: "walkThrough" },
    { x: 7, y: 9, player: "", type: "walkThrough" },
    { x: 8, y: 9, player: "", type: "walkThrough" },
    { x: 9, y: 9, player: "", type: "walkThrough" },
    { x: 10, y: 9, player: "", type: "walkThrough" },
    { x: 11, y: 9, player: "", type: "walkThrough" },
    { x: 13, y: 9, player: "", type: "walkThrough" },
    { x: 14, y: 9, player: "", type: "walkThrough" },
    { x: 15, y: 9, player: "", type: "walkThrough" },
    { x: 16, y: 9, player: "", type: "walkThrough" },
    { x: 14, y: 10, player: "", type: "walkThrough" },
    { x: 14, y: 11, player: "", type: "walkThrough" },
    { x: 14, y: 12, player: "", type: "walkThrough" },
    { x: 14, y: 13, player: "", type: "walkThrough" },
    { x: 14, y: 14, player: "", type: "walkThrough" },
    { x: 13, y: 13, player: "", type: "walkThrough" },
    { x: 12, y: 13, player: "", type: "walkThrough" },
    { x: 12, y: 13, player: "", type: "walkThrough" },
    { x: 15, y: 13, player: "", type: "walkThrough" },
    { x: 1, y: 4, player: "", type: "walkThrough" },
    { x: 1, y: 5, player: "", type: "walkThrough" },
    { x: 1, y: 6, player: "", type: "walkThrough" },
    { x: 1, y: 7, player: "", type: "walkThrough" },
    { x: 1, y: 9, player: "", type: "walkThrough" },
    { x: 3, y: 10, player: "", type: "walkThrough" },
    { x: 1, y: 10, player: "", type: "walkThrough" },
    { x: 1, y: 10, player: "", type: "walkThrough" },
    { x: 2, y: 4, player: "", type: "walkThrough" },
    { x: 2, y: 5, player: "", type: "walkThrough" },
    { x: 2, y: 6, player: "", type: "walkThrough" },
    { x: 2, y: 7, player: "", type: "walkThrough" },
    { x: 2, y: 8, player: "", type: "walkThrough" },
    { x: 2, y: 9, player: "", type: "walkThrough" },
    { x: 2, y: 10, player: "", type: "walkThrough" },
    { x: 3, y: 11, player: "", type: "walkThrough" },
    { x: 3, y: 12, player: "", type: "walkThrough" },
    { x: 3, y: 13, player: "", type: "walkThrough" },
    { x: 3, y: 14, player: "", type: "walkThrough" },
    { x: 4, y: 11, player: "", type: "walkThrough" },
    { x: 4, y: 12, player: "", type: "walkThrough" },
    { x: 4, y: 14, player: "", type: "walkThrough" },
    { x: 5, y: 12, player: "", type: "walkThrough" },
    { x: 5, y: 13, player: "", type: "walkThrough" },
    { x: 5, y: 14, player: "", type: "walkThrough" },
    { x: 6, y: 11, player: "", type: "walkThrough" },
    { x: 6, y: 12, player: "", type: "walkThrough" },
    { x: 6, y: 14, player: "", type: "walkThrough" },
    { x: 7, y: 11, player: "", type: "walkThrough" },
    { x: 7, y: 12, player: "", type: "walkThrough" },
    { x: 7, y: 13, player: "", type: "walkThrough" },
    { x: 7, y: 14, player: "", type: "walkThrough" },
    { x: 4, y: 0, player: "", type: "walkThrough" },
    { x: 5, y: 0, player: "", type: "walkThrough" },
    { x: 6, y: 0, player: "", type: "walkThrough" },
    { x: 7, y: 0, player: "", type: "walkThrough" },
    { x: 8, y: 0, player: "", type: "walkThrough" },
    { x: 9, y: 0, player: "", type: "walkThrough" },
    { x: 10, y: 0, player: "", type: "walkThrough" },
    { x: 11, y: 0, player: "", type: "walkThrough" },
    { x: 12, y: 0, player: "", type: "walkThrough" },
    { x: 13, y: 0, player: "", type: "walkThrough" },
    { x: 7, y: 0, player: "", type: "walkThrough" },
    { x: 7, y: 0, player: "", type: "walkThrough" },
    { x: 17, y: 2, player: "", type: "walkThrough" },
    { x: 19, y: 2, player: "", type: "walkThrough" },
    { x: 18, y: 2, player: "", type: "walkThrough" },
    { x: 17, y: 3, player: "", type: "walkThrough" },
    { x: 19, y: 3, player: "", type: "walkThrough" },
    { x: 18, y: 3, player: "", type: "walkThrough" },
    { x: 16, y: 4, player: "", type: "walkThrough" },
    { x: 16, y: 5, player: "", type: "walkThrough" },
    { x: 16, y: 6, player: "", type: "walkThrough" },
    { x: 18, y: 5, player: "", type: "walkThrough" },
    { x: 18, y: 4, player: "", type: "walkThrough" },
    { x: 17, y: 5, player: "", type: "walkThrough" },
    { x: 8, y: 4, player: "", type: "walkThrough" },
    { x: 8, y: 5, player: "", type: "walkThrough" },
    { x: 8, y: 6, player: "", type: "walkThrough" },
    { x: 18, y: 6, player: "", type: "walkThrough" },
    { x: 18, y: 4, player: "", type: "walkThrough" },
    { x: 17, y: 6, player: "", type: "walkThrough" },
]
module.exports = { paths }