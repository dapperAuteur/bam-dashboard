export function Array2String(arr, str){
  if (arr.length === 0) {
    str = "NO EXAMPLES/MEANINGS";
  } else if (arr.length === 1) {
    str = arr[0];
    return arr;
  } else {
    str = arr.join(", ");
    // console.log('str :>> ', str);
  }
return str
}