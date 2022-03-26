import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home";
import Blog from "./Blog";
import Signup from "./Signup";
import Login from "./Login";
import { useState, useEffect } from "react";


function App() {
  const [blogs, setBlogs ]= useState(null);


useEffect(() => {
fetch('http://localhost:8000/blogs')
.then(res => {
  return res.json()
})
.then((data) =>{
 setBlogs(data)
})
}, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ < Home /> } />
        {blogs && <Route path='/blog' element={ <Blog blogs = {blogs} title = "Welcome to my blog"/>} />}
        <Route path='/signup' element={ <Signup />} />
        <Route path='/login' element={ <Login />} />
      </Routes>
    </Router>
  );
}

export default App;