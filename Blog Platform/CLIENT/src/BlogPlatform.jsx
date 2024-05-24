import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

function BlogPlatform() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
    </Routes>
  );
}

export default BlogPlatform;
