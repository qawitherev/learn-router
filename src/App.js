// import logo from './logo.svg';
import "./App.css";
import { Fragment, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Weather from "./pages/weather/Weather";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import CounterTest from "./pages/counter/CounterTest";
import CounterDisplayV2 from "./pages/counterDisplayV2/CounterDisplayV2";

function App() {
  const name = "Abing";

  return (
    <main>
      <nav style={headerStyle}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${name}`}>About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/counter-test">Counter Test</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter-test" element={<CounterTest />} />
        <Route path="/display-count/:count" element={<DisplayCount />} />
        <Route
          path="/counter-test/counter-display-v2/:counterValue"
          element={<CounterDisplayV2 />}
        />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </main>
  );
}

//home page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);

const Counter = () => {
  return (
    <div style={counterStyle.container}>
      <h1 style={counterStyle.title}>This is Counter Page</h1>
      <div style={counterStyle.centered}>
        <CounterButton />
      </div>
    </div>
  );
};

const DisplayCount = () => {
  const { count } = useParams();
  console.log(`Count is ${count}`);
  return (
    <div>
      <h1>Display Count</h1>
      <h2>The count received is : {count} </h2>
    </div>
  );
};

function CounterButton() {
  const [count, setCounter] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  const increment = () => setCounter(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCounter(count - 1);
    } else {
      alert("Counter value cannot be less than 0");
    }
  };

  const reset = () => setCounter(0);

  //button state
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const submitCount = () => {
    navigate(`/display-count/${count}`);
  };

  return (
    <div>
      <p>Counter value: {count}</p>
      <div className={counterStyle.buttonContainer}>
        <div className={counterStyle.buttonRow}>
          <button
            style={
              hoveredButton === 1
                ? { ...counterStyle.buttonStyle, backgroundColor: "#45a049" }
                : counterStyle.buttonStyle
            }
            onClick={increment}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave()}
          >
            Increase Counter
          </button>
          <button
            style={
              hoveredButton === 2
                ? { ...counterStyle.buttonStyle, backgroundColor: "#45a049" }
                : counterStyle.buttonStyle
            }
            onClick={decrement}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave()}
          >
            Decrease Counter
          </button>
          <button
            style={
              hoveredButton === 3
                ? { ...counterStyle.buttonStyle, backgroundColor: "#45a049" }
                : counterStyle.buttonStyle
            }
            onClick={reset}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave()}
          >
            Reset Counter
          </button>
        </div>
        <div className={counterStyle.buttonCentered}>
          <div style={counterStyle.contentCentered}>
            <button
              style={
                hoveredButton === 4
                  ? { ...counterStyle.buttonStyle, backgroundColor: "#45a049" }
                  : counterStyle.buttonStyle
              }
              onClick={() => submitCount()}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave()}
            >
              Submit Count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const counterStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#4CAF50",
    margin: "5px 5px", //trbl
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonRow: {
    display: "flex",
  },
  buttonCentered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentCentered: {
    textAlign: "center",
  },
};

const headerStyle = {
  backgroundColor: "#26BA2D",
  color: "white",
  padding: "15px 20px",
};

const FakeText = () => (
  <Fragment>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Fragment>
);

export default App;
