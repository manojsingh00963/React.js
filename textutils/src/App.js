import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextFrom';
import React, { useState } from 'react';
import About from './Component/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './Component/Alert';
import Footer from './Footer';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [toggleText, setToggleText] = useState("Enable dark mode")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setToggleText("Disable dark mode");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setToggleText("Enable dark mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleText={toggleText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading=" Try TextUtils - word counter, Character Counter," mode={mode} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer toggleMode={toggleMode}  mode={mode}/>
    </>
  );
}

export default App;