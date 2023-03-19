import "./home.css";
import { FaBell } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function ClientHeader() {
  return (
    <header id="client-home-header">
      <div>
        <h3>Good morning, Enock</h3>
        <p>Hope you have a wonderful day</p>
      </div>

      <span>
        <form id="header-search">
          <FaSearch id="search-icon" />
          <input type="text" placeholder="Search" />
        </form>

        <button className="notifications">
          <FaBell />
        </button>

        <button className="notifications">
          <FaComment />
        </button>
      </span>
    </header>
  );
}