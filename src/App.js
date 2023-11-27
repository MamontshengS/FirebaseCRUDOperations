
const React = require("react");
const { Component } = React;
const { Routes, Route, Link } = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.css");

const AddTutorial = require("./components/add-tutorial.component");
const TutorialsList = require("./components/tutorial-list.component");

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firebase Database CRUD</h2>
          <Routes>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

