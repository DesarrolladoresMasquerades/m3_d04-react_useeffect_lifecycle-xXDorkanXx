import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
// import TimerTwo from "./components/03-use-effect-mounting/TimerTwo";
// import TimerThree from "./components/04-use-effect-unmounting/TimerThree";
// import TimerFour from "./components/05-use-effect-conditional-updates/TimerFour";

//import IronbnbList from './components/IronbnbList';  // <== IMPORT

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default App;
