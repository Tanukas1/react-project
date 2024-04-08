import './App.css';
// import Index from './Components/Index'
// import List from './Components/List'
// import Todolist from './Components/Todolist';
// import Example from './Components/Eample';
// import Example2 from './Components/Example2';
// import Weather from './Components/Weather';
// import Weather2 from './Components/Weather2';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
function App() {
  return (
    <>
      {/* <Index/> */}
      {/* <List/> */}
      {/* <Todolist/> */}
      {/* <Example/>
      <Example2/> */}
      {/* <Weather/> */}
      {/* <Weather2/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
