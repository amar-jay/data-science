import * as d3 from "d3";
import * as asciichart from "asciichart";
import { salaries_and_tenures } from "./consts";

/**
 * converting salaries_and_tenures to a plottable data
 */
const plottable_salaries_and_tenures = salaries_and_tenures.map(([salaries, tenures]) => {
  return { salaries, tenures };

});


