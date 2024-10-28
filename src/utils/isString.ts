// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isString(x: any): x is string {
  return typeof x === "string";
}
