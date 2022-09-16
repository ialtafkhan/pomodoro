import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogleAction } from "../redux/actions/authActions";

export default function LoginWithGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.auth);
  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogleAction());
  };
  useEffect(() => {
    if (login) {
      navigate("/timer");
    }
  }, [login]);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleLoginWithGoogle}
      >
        Login with Google
      </button>
    </>
  );
}
