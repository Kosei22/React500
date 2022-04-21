import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";

import Customer from "./components/Customer";
import CustomerClass from "./components/CustomerClass";
import Employee from "./components/Employee";
import EmployeeClass from "./components/EmployeeClass";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/users" className="nav-link text-white">
            Users
          </Link>
        </div>
      </nav>

      {/* routes */}
      <div className="container py-3">
        <div className="grid">
          <Routes>
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col">
                    <div className="h3 fw-bold text-success">App Component</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident amet possimus laborum. Nesciunt architecto, ea
                      molestiae a quia voluptas, illo exercitationem facilis
                      adipisci laborum ipsa totam error quo distinctio
                      voluptate.
                    </p>

                    <button className="btn btn-success btn-sm">
                      <i>
                        <FontAwesomeIcon icon={faBook} />
                        Read More
                      </i>
                    </button>
                  </div>
                </div>
              }
            />

            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
