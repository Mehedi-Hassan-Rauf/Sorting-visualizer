function Wait(arraySpeed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, arraySpeed);
  });
}

export async function SelectionSort(arr, arraySpeed) {
  //   console.log("In selection()");
  for (let i = 0; i < arr.length; i++) {
    // console.log("In ith loop");
    let min_index = i;
    // Change color of the position to swap with the next min
    arr[i].style.background = "blue";
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log("In jth loop");
      // Change color for the current comparision (in consideration for min_index)
      arr[j].style.background = "red";

      await Wait(arraySpeed);
      if (
        parseInt(arr[j].style.height) < parseInt(arr[min_index].style.height)
      ) {
        // console.log("In if condition height comparision");
        if (min_index !== i) {
          // new min_index is found so change prev min_index color back to normal
          arr[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        // if the currnent comparision is more than min_index change is back to normal
        arr[j].style.background = "cyan";
      }
    }
    await Wait(arraySpeed);
    //swap(arr[min_index], arr[i]);
    const temp = arr[min_index].style.height;
    arr[min_index].style.height = arr[i].style.height;
    arr[i].style.height = temp;
    // change the min element index back to normal as it is swapped
    arr[min_index].style.background = "cyan";
    // change the sorted elements color to green
    arr[i].style.background = "green";
  }
}
