import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    // <Router>
    //   <Topbar />
    //   <Routes>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/register">
    //       {user?<Home/>:<Register />}
    //     </Route>
    //     <Route path="/login">
    //       {user?<Home/>:<Login />}
    //     </Route>
    //     <Route path="/write">
    //       {user?<Write/>:<Register />}
    //     </Route>
    //     <Route path="/settings">
    //     {user?<Settings/>:<Register />}
    //     </Route>
    //     <Route path="/post/:postId">
    //       <Single />
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
