import SortingBars from "./Components/SortingBars";
import Header from "./Components/Header";
import SortingContextProvider from "./Context/SortingContext";

const App = () => {
  return (
    <div className="w-screen h-screen flex gap-2 flex-col items-center ">
      <SortingContextProvider>
        <Header />
        <SortingBars />
      </SortingContextProvider>
    </div>
  );
};

export default App;
