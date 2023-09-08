import React from 'react';
import { Link } from 'react-router-dom';
import scpData from './scpData.json';
import './SCPLists.css'; 

const SCPCard = ({ scp }) => {

  const imageUrl = `/images${scp.image}`;

  return (
    <div className="col-md-4 mb-4 card-container position-relative">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top card-img" alt={scp.name} />
        <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <h5 className="card-title">{scp.name}</h5>
          <p className="card-text card-description">{scp.shortDescription}</p>
        </div>
        <div className="card-footer position-absolute bottom-0 w-100">
          <Link to={`/scp/${scp.id}`} className="btn btn-primary subject-files-btn w-100">
            Subject Files
          </Link>
        </div>
      </div>
    </div>
  );
};

const SCPList = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {scpData.map((scp) => (
          <SCPCard key={scp.id} scp={scp} />
        ))}
      </div>
    </div>
  );
};

export default SCPList;





