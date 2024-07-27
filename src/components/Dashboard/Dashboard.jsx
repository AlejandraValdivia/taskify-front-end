import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
import { useContext } from "react";
import { AuthedUserContext } from "../../App";

import "../TaskList/TaskList.css";
import "./Dashboard.css";
const Dashboard = () => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      <Link to="/dashboard">
        <h1>Dashboard</h1>
      </Link>

      <p>
        This is the dashboard page where you can manage your tasks and account.
      </p>
      <div className="dashboard-links">
        <Link className="dashboard-link" to="/">
          Home
        </Link>
        <Link className="dashboard-link" to="/account">
          Account
        </Link>
        <Link className="dashboard-link" to="/tasks">
          View Tasks
        </Link>
      </div>

      <div className="dashboard-content">
        <h2>Popular Projects</h2>
        <div id="dashboard-img-gallery">
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/AdobeStock_189916326.jpeg"
                alt="man assembling furniture"
              />
            </a>
            <h3 className="dashboard-img-title">Furniture Assembly</h3>
            <p className="dashboard-img-desc">Projects starting at $49</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/robinson-greig-HrnAxAUwle8-unsplash.jpg"
                alt="men loading a truck"
              />
            </a>
            <h3 className="dashboard-img-title">Help Moving</h3>
            <p className="dashboard-img-desc">Projects starting at $67</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/theme-photos-Klby0nxseY8-unsplash.jpg"
                alt="drill"
              />
            </a>
            <h3 className="dashboard-img-title">Home Repairs</h3>
            <p className="dashboard-img-desc">Projects starting at $47</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img src="images/AdobeStock_320287361.jpeg" alt="drill" />
            </a>
            <h3 className="dashboard-img-title">Home Cleaning</h3>
            <p className="dashboard-img-desc">Projects starting at $49</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/AdobeStock_718073342.jpeg"
                alt="man fixing a leaky faucet"
              />
            </a>
            <h3 className="dashboard-img-title">Plumbing Repairs</h3>
            <p className="dashboard-img-desc">Projects starting at $74</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/AdobeStock_636880936.jpeg"
                alt="electrician fixing a circuit"
              />
            </a>
            <h3 className="dashboard-img-title">Electrical Help</h3>
            <p className="dashboard-img-desc">Projects starting at $69</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/AdobeStock_516534949.jpeg"
                alt="men carrying a couch"
              />
            </a>
            <h3 className="dashboard-img-title">Heavy Lifting</h3>
            <p className="dashboard-img-desc">Projects starting at $61</p>
          </div>
          <div className="dashboard-img">
            <a href="/task/1/book" target="_self" rel="noreferrer">
              <img
                src="images/AdobeStock_593389323.jpeg"
                alt="gardener trimming shrubs"
              />
            </a>
            <h3 className="dashboard-img-title">Yard Word & Gardeing</h3>
            <p className="dashboard-img-desc">Projects starting at $47</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
