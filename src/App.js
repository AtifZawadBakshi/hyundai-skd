import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Sidebar from "./components/Layouts/Sidebar.js";
import AppLayout from "./components/Layouts/AppLayout";
import Dashboard from "./components/Dashboard/Index";
function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div id="sidebar" className="active">
          <Sidebar />
        </div>
        <AppLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
