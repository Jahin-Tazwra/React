import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    userName: "John",
    age: 18
  }

  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <h1 className="text-black bg-green-400 p-4 font-bold mb-2">Tailwind test</h1>
      <Card product="Siuuu" obj={myObj} arr={myArr}/>
    </>
  );
}

export default App;
