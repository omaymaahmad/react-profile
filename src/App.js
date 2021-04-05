import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import CV from './Components/CV';
import FooterPage from './Components/FooterPage';


function App() {
  return (
    <>
    < Router>
      < NavBar />
      <Route exact path="/">
        <Redirect to="/about" />
      </Route>
      <Route exact path="/react-profile">
        <Redirect to="/about" />
      </Route>
      < Route exact path="/about" component={AboutMe}/>
      < Route path="/projects" component={Projects}/>
      < Route path="/cv" component={CV}/>
      < FooterPage />
    </Router>
    </>
  );
}

export default App;
