import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./containers/landing";
import History from "./containers/history";
import Shopping from "./containers/shopping";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
