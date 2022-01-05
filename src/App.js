import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <>
  


<Navbar title="NavHome" />

   <div className="container my-3">
<TextForm  heading="Enter the text to analyze"/>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



<About/> 
</div>




  </>
  );
}

export default App;