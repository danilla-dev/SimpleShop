import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";
import { LuPackageCheck } from "react-icons/lu";
import { Waypoint } from "react-waypoint";

import "../styles/StoreStats.scss";

import { stats } from "../db/stats";

const StoreStats = () => {
  const [planetCount, setPlanetCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [windowOnSection, setWindowOnSection] = useState(false);

  const handleStartCount = () => {
    console.log("hej");
    setWindowOnSection(true);
  };

  useEffect(() => {
    if (windowOnSection && planetCount < stats.planets) {
      setTimeout(() => {
        setPlanetCount(planetCount + 1);
      }, 10);
    }
    if (windowOnSection && customersCount < stats.customers) {
      setTimeout(() => {
        setCustomersCount(customersCount + 1);
      }, 1);
    }
    if (windowOnSection && ordersCount < stats.orders) {
      setTimeout(() => {
        setOrdersCount(ordersCount + 1);
      }, 1);
    }
  }, [windowOnSection, planetCount, customersCount, ordersCount]);

  return (
    <div className="store-stats-background">
      <Waypoint onEnter={handleStartCount} bottomOffset="70%" />
      <div className="store-stats wrapper">
        <h4 className="store-stats__header">Look at this statistics!</h4>
        <div className="store-stats__container">
          <div className="stat">
            <FontAwesomeIcon className="stat__icon" icon={faGlobe} />
            <span className="stat__count">{planetCount}</span>
            <h5 className="stat__title">Planets we serve.</h5>
          </div>
          <div className="stat">
            <FontAwesomeIcon className="stat__icon" icon={faUsers} />
            <span className="stat__count">{customersCount}</span>
            <h5 className="stat__title">Customers</h5>
          </div>
          <div className="stat">
            <LuPackageCheck className="stat__icon" />
            <span className="stat__count">{ordersCount}</span>
            <h5 className="stat__title">Completed orders</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreStats;
