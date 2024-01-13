function Wait(arraySpeed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, arraySpeed);
  });
}

export async function BubbleSort(arr, arraySpeed) {
  //   console.log("In bubbe()");
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log("In ith loop");
    for (let j = 0; j < arr.length - i - 1; j++) {
      //   console.log("In jth loop");
      arr[j].style.background = "blue";
      arr[j + 1].style.background = "blue";
      if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
        // console.log("In if condition");
        await Wait(arraySpeed);
        const temp = arr[j].style.height;
        arr[j].style.height = arr[j + 1].style.height;
        arr[j + 1].style.height = temp;
      }
      arr[j].style.background = "cyan";
      arr[j + 1].style.background = "cyan";
    }
    arr[arr.length - 1 - i].style.background = "green";
  }
  arr[0].style.background = "green";
}
