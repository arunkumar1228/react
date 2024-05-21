import React, { useState } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom'; 
import AllService from '../Services/AllService/Allservice';
import NewAssetEntry from '../Services/New/NewAssetEntry';
import UpdateAssetEntry from '../Services/Update/UpdateAssetEntry';
import DeleteAssetEntry from '../Services/Delete/DeleteAssetEntry';
import ViewAssetData from '../Services/View/ViewAssetData';
import OwnAssetsData from '../Services/View/OwnAssetsData';
import RtAssetsData from '../Services/View/RtAssetsData';
import logo from '../../Assets/QBrainX-trademark-logo-Original-hashtag.png';
import '../dashboard/dashboard.css';

// const Header = () => {
//   return (
//     <header className="header"> {/* Add the "header" class */}
//       <h1>Sample Header</h1>
//     </header>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="footer"> {/* Add the "footer" class */}
//       <p>Sample Footer</p>
//     </footer>
//   );
// };

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'All Service', icon: 'fas fa-home', link: '/all-service' },
    { name: 'New Asset Entry', icon: 'fas fa-user', link: '/all-service/new-asset-entry' },
    { name: 'View Asset Data', icon: 'fas fa-cog', submenu: true },
    { name: 'Update Asset Entry', icon: 'fas fa-user', link: '/all-service/update-asset-entry' },
    { name: 'Delete Asset Entry', icon: 'fas fa-user', link: '/all-service/delete-asset-entry' },
  ];

  const submenuItems = [
    { name: 'Rt-Assets-Data', link: '/all-service/rt-assets-data' },
    { name: 'Own-Assets-Data', link: '/all-service/own-assets-data' }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path);
      setDropdownOpen(false);
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
      
      <div className="sidebar">
        <div className={`logo-details ${isSidebarOpen ? '' : 'hide-logo'}`}>
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>
        <ul>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li onClick={() => item.submenu ? handleMenuItemClick() : handleMenuItemClick(item.link)}>
                <Link to={item.link}>
                  <i className={`${item.icon} icon`}></i>
                  <span>{item.name}</span>
                </Link>
                {item.submenu && (
                  <ul className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
                    {submenuItems.map((subItem, subIndex) => (
                      <li key={subIndex} onClick={() => handleMenuItemClick(subItem.link)}>
                        <Link to={subItem.link}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <label className={`label-hamburger-menu ${isSidebarOpen ? 'open' : ''}`} htmlFor="checkbox-hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
      </div>
      
  <div className="full-view">
        <Routes>
          <Route path="/all-service" element={<AllService />} />
          <Route path="/all-service/new-asset-entry" element={<NewAssetEntry />} />
          <Route path="/all-service/update-asset-entry" element={<UpdateAssetEntry />} />
          <Route path="/all-service/delete-asset-entry" element={<DeleteAssetEntry />} />
          <Route path="/view-asset-data" element={<ViewAssetData />} />
          <Route path="/all-service/own-assets-data" element={<OwnAssetsData />} />
          <Route path="/all-service/rt-assets-data" element={<RtAssetsData />} />
        </Routes>
      </div>
 
     
    

      
    </div>
  );
};

export default Dashboard;
