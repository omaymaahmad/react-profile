import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';

function App() {
  return (
    <>
  
    < Router>
      < NavBar />
      < Route exact path="/" component={AboutMe}/>
      < Route exact path="/projects" component={Projects}/>
    </Router>
    </>
  );
}

export default App;
