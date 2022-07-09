import { Plot } from "d3";

Plot.plot({
	marks: [
		Plot.dot(data_scatterplot, { x: "flipper_length_mm", y: "body_mass_g" }),
	],
});
