import React from "react";
import { Card } from "react-bootstrap";
import friendsNightIn from "../Assets/Images/Screenshot-1.png";
import workoutWeekly from "../Assets/Images/Workout-Weekly.png";
import eatTheBurger from "../Assets/Images/Eat-The-Burger.png";
import budgetTracker from "../Assets/Images/budget-tracker.png";
import employeeDirectory from "../Assets/Images/employee-directory.png";

function Projects() {
  return (
    <>
      <div className="projectdiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={friendsNightIn} />
          <Card.Body>
            <Card.Title>Friends Night In</Card.Title>
            <Card.Text>
              For my first project, I worked with my team mates to make a web
              application that uses API keys to gather recipe and movie data.
              User's can insert a singular ingredient and the API will provide
              them with a random recipe, same with the movie API - a random word
              can be searched and users are presented with a movie. The
              application was created through JavaScript, Bulma, HTML & CSS, the
              site is responsive to desktop, mobile and tablet devices. Click
              <a
                href="https://omaymaahmad.github.io/friends-night-in/"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              to view the site and{" "}
              <a
                href="https://github.com/omaymaahmad/friends-night-in"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              for the GitHub repository.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="projectdiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={workoutWeekly} />
          <Card.Body>
            <Card.Title>Workout Weekly</Card.Title>
            <Card.Text>
              For my second project, I worked with my team mates to make a
              workout calender application that can be used to organise an
              exercise schedule around working engagements. Once signed up adn
              logged in, users can fill out their weekly work engagements. In
              any gaps they are able to request a workout video from the library
              of over 200 curated YouTube exercise videos from some of the best
              known YouTube fitness channels. The application was created
              through JavaScript, Node.js/Express.j Sequelize/MySQL, Google API,
              TDD with Jest.js, ESLint/Travis CI, Moment.js, Passport/Bcrypt,
              Axios & CSS, the site is responsive to desktop, mobile and tablet
              devices. Click
              <a href="https://workout-weekly.herokuapp.com/" target="_blank">
                {" "}
                here
              </a>{" "}
              to view the site and{" "}
              <a
                href="https://github.com/omaymaahmad/project-2"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              for the GitHub repository.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="projectdiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={eatTheBurger} />
          <Card.Body>
            <Card.Title>Eat the Burger</Card.Title>
            <Card.Text>
              The week 13 homework was particularly challenging, utilising
              Express.js and Sequelize to create a restaurant application that
              lets users input the names of burgers they would like to eat.
              Whenever a user submits a burger's name it appears on the left
              side of the page. By clicking the "Devour it!" button the burger
              will shift to the right side. All burgers are stored in the
              database, whether devoured or not! Click
              <a
                href="https://eat-the-burger-hwtask.herokuapp.com/"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              to view the site and{" "}
              <a
                href="https://github.com/omaymaahmad/week-13-eat-the-burger"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              for the GitHub repository.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="projectdiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={budgetTracker} />
          <Card.Body>
            <Card.Title>PWA Budget Tracker</Card.Title>
            <Card.Text>
              Workout Tracker is a budget tracker that lets users view, add and
              subtract funds. Users are able to add expenses and deposists to
              their budget with or without a connection. Transactions entered
              offline will populate once the application is brought back online.
              Click
              <a
                href="https://pw-budget-tracker.herokuapp.com/"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              to view the site and{" "}
              <a
                href="https://github.com/omaymaahmad/week-18-pwa-budget-tracker"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              for the GitHub repository.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="projectdiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={employeeDirectory} />
          <Card.Body>
            <Card.Title>React Employee Directory</Card.Title>
            <Card.Text>
              Using the table of random users generated from the Random User
              API, a table of employees is rendered to the user. User is able to
              sort and filter the table by Name category. User can search for an
              employee by their name. Click
              <a
                href="https://omaymaahmad.github.io/week-19-react-employee-directory/"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              to view the site and{" "}
              <a
                href="https://github.com/omaymaahmad/week-19-react-employee-directory"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              for the GitHub repository.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Projects;
