import React from "react"
import { Link } from "gatsby"

const Button = props => {
  const { color, name, animation, delay, infinite, link } = props;
  return (
    <Link
      to={link}
      className={`btn animated ${color} ${animation} ${delay} ${infinite}`}
    >
      {name}
    </Link>
  );
};

export default Button;
