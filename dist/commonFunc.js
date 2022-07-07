"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDict = exports.Print = void 0;
/**
 * Print the Fucking Shit Out
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
