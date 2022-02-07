
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Enabled Dark mode', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Enabled Light mode', 'success')
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    });
    
    setTimeout(() =>{
      setAlert(null);
    }, 2000)
  }


  return (
    <>
    <Navbar title="TextUtils" showSearchBox={false} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
