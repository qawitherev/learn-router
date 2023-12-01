// import logo from './logo.svg';
import "./App.css";
import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/render">Render</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/render" element={<h1>Render</h1>} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

//home page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);

//about page
const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
);

//contact page
const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
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

function CounterButton() {
  const [count, setCounter] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);

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

  return (
    <div>
      <p>Counter value: {count}</p>
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
