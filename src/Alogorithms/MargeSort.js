// Selecting speed slider from DOM
//let delay = document.getElementById("speed")?.value;

function Wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay);
  });
}

export async function mergeSort(array, l, r, arraySpeed) {
  // console.log("In mergeSort()");
  if (l >= r) {
    // console.log(`return cause just 1 arraymment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  // console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSort(array, l, m, arraySpeed);
  await mergeSort(array, m + 1, r, arraySpeed);
  await merge(array, l, m, r, arraySpeed);
}

async function merge(array, low, mid, high, arraySpeed) {
  // console.log("In merge()");
  // console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  // console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await Wait(arraySpeed);
    // console.log("In merge left loop");
    // console.log(array[low + i].style.height + " at " + (low + i));
    // color
    array[low + i].style.background = "orange";
    left[i] = array[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await Wait(arraySpeed);
    // console.log("In merge right loop");
    // console.log(array[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    array[mid + 1 + i].style.background = "yellow";
    right[i] = array[mid + 1 + i].style.height;
  }
  await Wait(arraySpeed);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await Wait(arraySpeed);
    // console.log("In merge while loop");
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // console.log("In merge while loop if");
      // color
      if (n1 + n2 === array.length) {
        array[k].style.background = "green";
      } else {
        array[k].style.background = "lightgreen";
      }

      array[k].style.height = left[i];
      i++;
      k++;
    } else {
      // console.log("In merge while loop else");
      // color
      if (n1 + n2 === array.length) {
        array[k].style.background = "green";
      } else {
        array[k].style.background = "lightgreen";
      }
      array[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await Wait(arraySpeed);
    // console.log("In while if n1 is left");
    // color
    if (n1 + n2 === array.length) {
      array[k].style.background = "green";
    } else {
      array[k].style.background = "lightgreen";
    }
    array[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await Wait(arraySpeed);
    // console.log("In while if n2 is left");
    // color
    if (n1 + n2 === array.length) {
      array[k].style.background = "green";
    } else {
      array[k].style.background = "lightgreen";
    }
    array[k].style.height = right[j];
    j++;
    k++;
  }
}
