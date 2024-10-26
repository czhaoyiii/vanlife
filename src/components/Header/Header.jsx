import styles from "../../styles/Header/Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMobileNav() {
    setShowMenu((prevMenu) => !prevMenu);
  }

  function signOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedin");
  }

  const activeStyles = {
    padding: "4px 0",
    fontWeight: "bold",
    borderBottom: "2px solid #161616",
    color: "#161616",
    marginBottom: "-2px",
  };

  return (
    <>
      <div className={styles.header}>
        <Link
          to="."
          className={styles.logo}
          onClick={showMenu ? handleMobileNav : null}
        >
          #VanLife
        </Link>
        <div className={styles.links}>
          {isLoggedIn && (
            <NavLink
              to="host"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Host
            </NavLink>
          )}
          <NavLink
            to="vans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Our Vans
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/" className={styles.signOut} onClick={signOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="login">Sign In</NavLink>
          )}
        </div>
        <button className={styles.hamburger} onClick={handleMobileNav}>
          <BiMenu size={30} />
        </button>
      </div>
      <MobileMenu
        handleMobileNav={handleMobileNav}
        showMenu={showMenu}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        signOut={signOut}
      />
    </>
  );
}
