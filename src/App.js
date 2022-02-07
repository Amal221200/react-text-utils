import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Enabled Dark mode', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Enabled Light mode', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const capitalize = (word) => {
    // let lower = word.toLowerCase();
    if (word.charAt(0) === " ") {
      return word.charAt(0 + 1).toUpperCase() + word.slice(1 + 1)
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1)
    };
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" showSearchBox={false} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} capitalize={capitalize} />
        <Routes>
          <Route path="/" element={
            <div className="container my-3">
            <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} capitalize={capitalize} />
          </div>
          } />
          
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
