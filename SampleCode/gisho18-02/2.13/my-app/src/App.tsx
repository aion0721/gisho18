import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import About from "./pages/About";
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
