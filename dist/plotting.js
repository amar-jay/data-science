"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_1 = require("d3");
d3_1.Plot.plot({
    marks: [
        d3_1.Plot.dot(data_scatterplot, { x: "flipper_length_mm", y: "body_mass_g" }),
    ],
});
