import { UserProvidings } from "../Context/SortingContext";

const SortingBars = () => {
  const { array } = UserProvidings();
  return (
    <div className="bars w-5/6 h-5/6 grid grid-flow-col gap-1">
      {array.map((value, idx) => (
        <div
          key={idx}
          className={`array-bar bg-black `}
          style={{
            height: `${value}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SortingBars;
