"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenureBucket = exports.Plot = exports.DefaultDict = exports.Print = void 0;
const asciichart = __importStar(require("asciichart"));
const lodash_1 = __importDefault(require("lodash"));
/**
 * 🖨️ Print the Fucking Shit Out
 */
function Print(func, whatever) {
    console.log(func);
    console.log(whatever);
}
exports.Print = Print;
// export function defaultDict(x: T) {
//   new Proxy<T>({} as T, {
//     get: (target, name) => (name in target ? target[name] : x),
//   });
// }
class DefaultDict {
    constructor(defaultInit) {
        return new Proxy({}, {
            get: (target, name) => name in target
                ? target[name]
                : (target[name] =
                    typeof defaultInit === "function"
                        ? new defaultInit().valueOf()
                        : defaultInit),
        });
    }
}
exports.DefaultDict = DefaultDict;
/**
 * Plot a linear graph that synthetize as a scatter plot or any other kind of graph for now
 * @param name Name of graph
 * @param data Should be of [x, y][] formatting
 * @param display to display array data
 */
function Plot(name, data, display) {
    const salaries_and_tenures = data;
    const [, max] = lodash_1.default.maxBy(salaries_and_tenures, ([, tenure]) => tenure) || [
        0, 0,
    ];
    const [, min] = [0, 0] ||
        lodash_1.default.minBy(salaries_and_tenures, ([, tenure]) => tenure) || [0, 0];
    const len = Math.ceil((max - min) * 10);
    const arr = new Array(len).fill(0);
    salaries_and_tenures.forEach(([salary, tenure]) => (arr[(tenure - min) * 10] = salary / 10000));
    console.clear();
    console.log(`\t\t📈${name}`);
    console.log(`\t\t${"-".repeat(name.length)}---`);
    if (display)
        console.log("Data displayed:", arr);
    console.log(asciichart.plot(arr, { colors: [asciichart.blue] }));
}
exports.Plot = Plot;
function tenureBucket(tenure) {
    if (tenure < 2)
        return "tenure is less than 2";
    else if (tenure < 5)
        return "between 2 and 5";
    else if (tenure < 10)
        return "between 5 and 10";
    else
        return "tenure is greater than 10";
}
exports.tenureBucket = tenureBucket;
