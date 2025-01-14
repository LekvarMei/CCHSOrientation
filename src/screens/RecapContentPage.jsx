import React, { useState } from "react";
import modules from '../JSONs/modules.json';  // Adjust the path according to your file structure
import { useParams } from 'react-router-dom';
import NavBar from "../ui-components/NavBar";

import { useNavigate } from 'react-router-dom';

import {
  Drawer,
  Menu,
  Card,
  Progress,
  Row,
  Col,
} from "antd";
const { Meta } = Card;
// Import other icons here if needed and use them as intended
function RecapContentPage(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    // navigate to the route corresponding to the menu item key
    navigate(`/recap`);
  };
  const { moduleName } = useParams();  // Get the module name from the URL parameter

  const moduleContent = modules.find((module) => module.name === moduleName)?.content;

  return (
    <div style={{ height: "100vh", backgroundColor: "whit" }}>
      <NavBar />
      <div className="contentBody">
      <div style={{ background: "white", padding: 20, minHeight: "100vh" }}>
        <p onClick={handleClick} style={{fontWeight:500, color:'#9E2A2B',fontFamily:'Inter'}}>&lt; Go Back</p>

        <h2 className="header1">{moduleName}</h2>
        <p className="content">{moduleContent}</p>

      </div>
      </div>
    </div>
  );
}

export default RecapContentPage;
