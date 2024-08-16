import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


function AppBar() {
  const navigate = useNavigate();
  return (
    <div style={{background: "black"}}>
        <h1 style={{color: "white"}}>This is a Navbar</h1>

        <button onClick={() => {
          //window.location.href = "/"
          navigate("/");
        }}>Landing</button>

        <button onClick={() => {
          //window.location.href = "/dashboard"

          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  )
}


export default App;
