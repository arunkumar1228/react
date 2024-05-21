import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUser, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../..//Services/AllService/AllService.css'; 

const gridData = [
  { link_name: 'New Asset Entry', link: 'new-asset-entry', icon: faBullhorn },
  { link_name: 'Rt-Assets-Data', link: 'rt-assets-data', icon: faUser },
  { link_name: 'Own-Assets-Data', link: 'own-assets-data', icon: faUser },
  { link_name: 'Update Asset Entry', link: 'update-asset-entry', icon: faCalendarAlt },
  { link_name: 'Delete Asset Entry', link: 'delete-asset-entry', icon: faSignOutAlt },
];

const AllService = () => {
  const newURL = '/all-service';

  const getCompleteURL = (link) => `${newURL}/${link}`;

  return (
    <div className="grid-container">
      {gridData.map((item, index) => (
        <div className="grid-item" key={index}>
          <Link to={getCompleteURL(item.link)}>
            <div className="icons">
              <FontAwesomeIcon icon={item.icon} />
            </div>
          </Link>
          <span className="link">{item.link_name}</span>
        </div>
      ))}
    </div>
  );
};

export default AllService;
