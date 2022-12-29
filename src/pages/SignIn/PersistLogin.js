import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useRefreshMutation } from "../../app/slice/authApiSlice";
import usePersist from "../../hooks/UsePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../app/slice/authSlice";

const PersistLogin = () => {
  const location = useLocation();

  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
          setTrueSuccess(true);
        } catch (error) {
          console.error(error);
        }
      };
      if (!token && persist) verifyRefreshToken();
    }
    return () => (effectRan.current = true);
    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    console.log("no persist");
    content = <Outlet />;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    if (location.pathname === "/profile") {
      console.log("error");
      return (content = (
        <p className="err">
          {error.data?.message} <Link to="/">Please Login Again</Link>
        </p>
      ));
    }
    content = <Outlet />;
  } else if (isSuccess && trueSuccess) {
    console.log("success");
    content = <Outlet />;
  } else if (token && isUninitialized) {
    console.log("token and uninit");
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return content;
};

export default PersistLogin;
