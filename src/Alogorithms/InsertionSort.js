function Wait(arraySpeed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, arraySpeed);
  });
}

export async function InsertionSort(arr, arraySpeed) {
  //   console.log("In insertion()");
  // color
  arr[0].style.background = "green";
  for (let i = 1; i < arr.length; i++) {
    // console.log("In ith loop");
    let j = i - 1;
    let key = arr[i].style.height;
    // color
    arr[i].style.background = "blue";

    await Wait(arraySpeed);

    while (j >= 0 && parseInt(arr[j].style.height) > parseInt(key)) {
      //   console.log("In while loop");
      // color
      arr[j].style.background = "blue";
      arr[j + 1].style.height = arr[j].style.height;
      j--;

      await Wait(arraySpeed);

      // color
      for (let k = i; k >= 0; k--) {
        arr[k].style.background = "green";
      }
    }
    arr[j + 1].style.height = key;
    // color
    arr[i].style.background = "green";
  }
}
