import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <>
  
    < Router>
      < NavBar />
      < Route exact path="/" component={AboutMe}/>
    </Router>
    </>
  );
}

export default App;
