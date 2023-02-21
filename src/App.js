import { createBrowserRouter, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Header/SideBar";
import ExpenseDashboard from "./components/ExpenseDashBoard/ExpenseDashboard";
import Root from "./pages/root";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
      </header>
      <div className="App-header-2">
        <SideBar />
      </div>
      <main className="App-body">
        <ExpenseDashboard />
        {/* <h2>This is dashboard</h2> */}
      </main>
    </div>
  );
}

export default App;
