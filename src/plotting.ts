<<<<<<< Updated upstream
import * as d3 from "d3";
import * as asciichart from "asciichart";
import { salaries_and_tenures } from "./consts";

/**
 * converting salaries_and_tenures to a plottable data
 */
const plottable_salaries_and_tenures = salaries_and_tenures.map(([salaries, tenures]) => {
  return { salaries, tenures };

});


=======
import { Plot } from "d3";

Plot.plot({
  marks: [
    Plot.dot(data_scatterplot, { x: "flipper_length_mm", y: "body_mass_g" }),
  ],
});
>>>>>>> Stashed changes
