import React from "react";
import {
  Link,
  useLocation
} from "react-router-dom";

const Page404 = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        <Link to="/">Return to Home</Link>
      </h3>
    </div>
  );
}

export default Page404;
