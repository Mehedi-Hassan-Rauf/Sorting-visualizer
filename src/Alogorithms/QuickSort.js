function Wait(arraySpeed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, arraySpeed);
  });
}

export async function quickSort(arr, l, r, arraySpeed) {
  //   console.log("In quickSort()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partitionLomuto(arr, l, r, arraySpeed);
    await quickSort(arr, l, pivot_index - 1, arraySpeed);
    await quickSort(arr, pivot_index + 1, r, arraySpeed);
  } else {
    if (l >= 0 && r >= 0 && l < arr.length && r < arr.length) {
      arr[r].style.background = "green";
      arr[l].style.background = "green";
    }
  }
}

async function partitionLomuto(arr, l, r, arraySpeed) {
  //   console.log("In partitionLomuto()");
  let i = l - 1;
  // color pivot element
  arr[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    // console.log("In partitionLomuto for j");
    // color current element
    arr[j].style.background = "yellow";
    // pauseChamp
    await Wait(arraySpeed);

    if (parseInt(arr[j].style.height) < parseInt(arr[r].style.height)) {
      //   console.log("In partitionLomuto for j if");
      i++;
      //swap(arr[i], arr[j]);
      //swap
      const temp = arr[i].style.height;
      arr[i].style.height = arr[j].style.height;
      arr[j].style.height = temp;
      // color
      arr[i].style.background = "orange";
      if (i != j) arr[j].style.background = "orange";
      // pauseChamp
      await Wait(arraySpeed);
    } else {
      // color if not less than pivot
      arr[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  await Wait(arraySpeed);
  const temp = arr[i].style.height;
  arr[i].style.height = arr[r].style.height;
  arr[r].style.height = temp;
  //swap(arr[i], arr[r]); // pivot height one
  //   console.log(`i = ${i}`, typeof i);
  // color
  arr[r].style.background = "pink";
  arr[i].style.background = "green";

  // pauseChamp
  await Wait(arraySpeed);

  // color
  for (let k = 0; k < arr.length; k++) {
    if (arr[k].style.background != "green") arr[k].style.background = "cyan";
  }

  return i;
}
