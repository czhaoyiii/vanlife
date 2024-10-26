import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/Header/MobileMenu.module.css";
import { NavLink } from "react-router-dom";

export default function MobileMenu({
  handleMobileNav,
  showMenu,
  isLoggedIn,
  signOut,
}) {
  const mobileSignOut = () => {
    signOut();
    handleMobileNav();
  };

  return (
    <div className={`${styles.mobileMenu} ${showMenu ? styles.open : null}`}>
      <div className={styles.mobileHeader}>
        <h2>Menu</h2>
        <button className={styles.closeMenu} onClick={handleMobileNav}>
          <AiOutlineClose size={30} />
        </button>
      </div>
      <div className={styles.mobileNavigation}>
        {isLoggedIn ? (
          <NavLink className={styles.signOut} to="/" onClick={mobileSignOut}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink
            className={styles.signIn}
            to="login"
            onClick={handleMobileNav}
          >
            Sign In
          </NavLink>
        )}
        <h3 className={styles.mobileNavigationTitle}>Main navigation</h3>
        <div className={styles.mobileLinks}>
          {isLoggedIn && (
            <NavLink to="host" onClick={handleMobileNav}>
              Host
            </NavLink>
          )}
          <NavLink to="vans" onClick={handleMobileNav}>
            Our Vans
          </NavLink>
          <NavLink to="about" onClick={handleMobileNav}>
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
