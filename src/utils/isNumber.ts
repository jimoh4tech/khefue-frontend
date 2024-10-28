// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isNumber(x: any): x is number {
  return typeof x === "number" && !isNaN(x);
}
