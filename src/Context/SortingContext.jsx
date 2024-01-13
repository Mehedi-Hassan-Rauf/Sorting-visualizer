import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const Sortingcontext = createContext(null);

const SortingContextProvider = ({ children }) => {
  const [array, setArray] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [arraySize, setArraySize] = useState(10);
  const [arraySpeed, setArraySpeed] = useState(60);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    const bar = document.getElementsByClassName("array-bar");
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.background = "black";
    }
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(randomIntFromInterval(20, 200));
    }
    //console.log(arr);
    setArray(arr);
  }, [arraySize, isNew]);

  const provider = {
    array,
    setArray,
    arraySize,
    setArraySize,
    setIsNew,
    arraySpeed,
    setArraySpeed,
  };
  return (
    <Sortingcontext.Provider value={provider}>
      {children}
    </Sortingcontext.Provider>
  );
};

export default SortingContextProvider;

export const UserProvidings = () => {
  return useContext(Sortingcontext);
};
