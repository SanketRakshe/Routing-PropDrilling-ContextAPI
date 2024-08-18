// import Home from "./components/Home";
// import { Landing } from "./components/Landing";
// import { Dashboard } from "./components/Dashboard";
// import { useNavigate } from "react-router-dom";

// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// // Lazy load the components
// const Home = React.lazy(() => import('./components/Home'));
// const About = React.lazy(() => import('./components/About'));


// Routing................................................................

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <AppBar />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div style={{background: "black"}}>
//         <h1 style={{color: "white"}}>This is a Navbar</h1>

//         <button onClick={() => {
//           //window.location.href = "/"
//           navigate("/");
//         }}>Landing</button>

//         <button onClick={() => {
//           //window.location.href = "/dashboard"

//           navigate("/dashboard");
//         }}>Dashboard</button>
//       </div>
//   )
// }


// ................................................................
// Lazy loading
// ................................................................



// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }




// Prop Drilling ....................................................................
// .................................................................................

import { useState } from 'react';

const App = () => {
  
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count}/>
      <Button count={count} setCount={setCount} />
    </div>
  )
};


function Count({count}){
  return <div>
    {count}
  </div>
}

function Button({count, setCount}){
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
  
}

export default App;