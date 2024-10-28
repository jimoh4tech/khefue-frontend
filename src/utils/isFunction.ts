// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type
export default function isFunction(x: any): x is Function {
  return typeof x === "function";
}
