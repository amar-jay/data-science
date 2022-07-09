import { IntrestsTypes } from "./consts";
import * as asciichart from "asciichart";
import ld from "lodash";
/**
 * 🖨️ Print the Fucking Shit Out
 */
export function Print(func: string, whatever: unknown): void {
  console.log(func);
  console.log(whatever);
}

// export function defaultDict(x: T) {
//   new Proxy<T>({} as T, {
//     get: (target, name) => (name in target ? target[name] : x),
//   });
// }

export class DefaultDict<
  T extends
    | NumberConstructor
    | ArrayConstructor
    | ObjectConstructor
    | SetConstructor
    | (new () => IntrestsTypes)
> {
  constructor(defaultInit: any) {
    return new Proxy<T>({} as T, {
      get: (target: { [name: string | symbol]: any }, name) =>
        name in target
          ? target[name]
          : (target[name] =
              typeof defaultInit === "function"
                ? new defaultInit().valueOf()
                : defaultInit),
    });
  }
}
/**
 * Plot a linear graph that synthetize as a scatter plot or any other kind of graph for now
 * @param name Name of graph
 * @param data Should be of [x, y][] formatting
 * @param display to display array data
 */
export function Plot(
  name: string,
  data: [number, number][],
  display?: boolean
) {
  const salaries_and_tenures = data;
  const [, max] = ld.maxBy(salaries_and_tenures, ([, tenure]) => tenure) || [
    0, 0,
  ];
  const [, min] = [0, 0] ||
    ld.minBy(salaries_and_tenures, ([, tenure]) => tenure) || [0, 0];
  const len = Math.ceil((max - min) * 10);
  const arr = new Array(len).fill(0);
  salaries_and_tenures.forEach(
    ([salary, tenure]) => (arr[(tenure - min) * 10] = salary / 10000)
  );
  console.clear();
  console.log(`\t\t📈${name}`);
  console.log(`\t\t${"-".repeat(name.length)}---`);
  if (display) console.log("Data displayed:", arr);

  console.log(asciichart.plot(arr, { colors: [asciichart.blue] }));
}

export function tenureBucket(tenure: number) {
  if (tenure < 2) return "tenure is less than 2";
  else if (tenure < 5) return "between 2 and 5";
  else if (tenure < 10) return "between 5 and 10";
  else return "tenure is greater than 10";
}
