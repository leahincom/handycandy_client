export default function random(_lower: number, _upper: number) {
  let lower = _lower;
  let upper = _upper;
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  } else {
    lower = _lower;
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = _upper;
    }
  }
  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }
  if (lower % 1 || upper % 1) {
    const rand = Math.random();
    const randLength = `${rand}`.length - 1;
    return Math.min(lower + rand * (upper - lower + parseFloat(`1e-${randLength}`)), upper);
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}
