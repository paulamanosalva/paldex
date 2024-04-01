import { useState, useEffect } from "react";
import "./home.scss";
import classNames from "classnames";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boxClasses = classNames("box-container", { visible: isVisible });
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="home-container">
      <div className={boxClasses}>
        <h1 className="main-title">PALDEX</h1>
        <button className="start-button" onClick={handleClick}>
          Start discovering!
        </button>
      </div>
    </div>
  );
};

export default Home;
