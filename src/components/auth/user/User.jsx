import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../../services/authServices";
import { logout } from "../../../services/authServices";
import * as userServices from '../../../services/userServices'

const User = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/")
  } else {
    userServices.getUserData(user,setUserData)
  }
  }, [user, loading]);

  console.log('useris', userData)
  return (
    <>
      {user ? ( //Ar turim prisijungusi vartotoja ?
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Name Surname" id="basic-nav-dropdown">
            <NavDropdown.Item>name@something.com</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>LOGOUT</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <p>LOGIN</p>
        </Navbar.Collapse>
      )}
    </>
  );
};

export default User;
