import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();
  const { closeModal } = useModal();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <i
        className="fas fa-user-circle fa-xl main-nav--profile-icon"
        onClick={openMenu}
      />
      {user ? (
        <span className="main-nav--profile-greeting">
          {" "}
          Hi, {user?.firstName} |
        </span>
      ) : null}
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li className="main-nav--admin-link">
              {user?.accountType === "Admin" ? (
                <p onClick={() => history.push("/admin-portal")}>
                  Admin Portal
                </p>
              ) : null}
            </li>
            <li>
              <button
                className="main-nav-profile--logout"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li>
          </div>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
