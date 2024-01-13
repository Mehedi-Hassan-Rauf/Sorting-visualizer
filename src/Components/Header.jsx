import { mergeSort } from "../Alogorithms/MargeSort";
import { BubbleSort } from "../Alogorithms/BubleSort";
import { UserProvidings } from "../Context/SortingContext";
import { quickSort } from "../Alogorithms/QuickSort";
import { InsertionSort } from "../Alogorithms/InsertionSort";
import { SelectionSort } from "../Alogorithms/SelectionSort";
const Header = () => {
  const { arraySize, setArraySize, setIsNew, arraySpeed, setArraySpeed } =
    UserProvidings();
  const arr = document.getElementsByClassName("array-bar");
  return (
    <div className="w-full flex gap-2 ">
      <button
        onClick={() => setIsNew((prev) => !prev)}
        className="bg-green-500"
      >
        New Array
      </button>
      <div className="flex flex-col">
        <label htmlFor="Size">Size</label>
        <input
          type="range"
          min={10}
          max={100}
          value={arraySize}
          step={1}
          onChange={(e) => {
            setArraySize(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Speed">Speed</label>
        <input
          id="speed"
          type="range"
          min={20}
          max={300}
          step={10}
          value={arraySpeed}
          onChange={(e) => {
            setArraySpeed(e.target.value);
          }}
        />
      </div>
      <button
        onClick={async () => {
          //const arr = [...array];
          await mergeSort(arr, 0, arr.length - 1, arraySpeed);
          //console.log(arr);
          //setArray(arr);
        }}
        className="bg-green-500"
      >
        Merge Sort
      </button>
      <button
        onClick={async () => {
          await BubbleSort(arr, arraySpeed);
          //console.log(arr);
        }}
        className="bg-green-500"
      >
        Buble Sort
      </button>
      <button
        onClick={async () => {
          await quickSort(arr, 0, arr.length - 1, arraySpeed);

          //console.log(arr);
          //setArray(arr);
        }}
        className="bg-green-500"
      >
        Quick Sort
      </button>
      <button
        onClick={async () => {
          await InsertionSort(arr, arraySpeed);
          //console.log(arr);
          //setArray(arr);
        }}
        className="bg-green-500"
      >
        Insertion Sort
      </button>
      <button
        onClick={async () => {
          await SelectionSort(arr, arraySpeed);
          //console.log(arr);
          //setArray(arr);
        }}
        className="bg-green-500"
      >
        Selection Sort
      </button>
    </div>
  );
};

export default Header;
