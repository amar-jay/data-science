"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
/**
 * converting salaries_and_tenures to a plottable data
 */
const plottable_salaries_and_tenures = consts_1.salaries_and_tenures.map(([salaries, tenures]) => {
    return { salaries, tenures };
});
