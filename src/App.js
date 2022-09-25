import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const toggleMode = () =>{
      setMode(mode === 'light' ? 'dark' : 'light');  
      showAlert(mode + ' mode has been enabled','success')
   }

   const showAlert = (msg, type) =>{
      setAlert({
        message : msg,
        type: type
      })
   }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/>
      <Alert alert={alert}/>
      <div className={"pt-4 " + (mode === 'light' ? '' : 'bg-secondary text-white')}>
        <div className={"container vh-100"}>
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />
          {/* <About/> */}
        </div>
      </div>

      
    </>
  );
}

export default App;
