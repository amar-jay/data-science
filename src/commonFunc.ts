import { IntrestsTypes } from "./consts";

/**
 * Print the Fucking Shit Out
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
				name in target? target[name]: (target[name] =
              typeof defaultInit === "function"? new defaultInit().valueOf(): defaultInit),
		});
	}
}
