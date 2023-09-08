import React from 'react';
import { Link } from 'react-router-dom';
import './SCPLists.css'; 

const SCPCard = ({ scp }) => {

  const imageUrls = {
    'scp-001': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00184a5a-adaa-46e5-bab0-c5ee46ca5c62/df6sw1a-f636d729-74de-4589-a85b-f1219e2ab980.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwMTg0YTVhLWFkYWEtNDZlNS1iYWIwLWM1ZWU0NmNhNWM2MlwvZGY2c3cxYS1mNjM2ZDcyOS03NGRlLTQ1ODktYTg1Yi1mMTIxOWUyYWI5ODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y3JSaVrdTte4nrP37kbn8NVkiG-f4AnfkeHRiqFR5is', // Example online image URL for SCP-001
    'scp-002': 'https://example.com/image002.jpg', 
  
  };
 
 
  const imageUrl = scp.image; 


  return (
    <div className="col-md-4 mb-4 card-container">
      <div className="card">
        <img src={imageUrl} className="card-img-top card-img" alt={scp.name} />
        <div className="card-body">
          <h5 className="card-title">{scp.name}</h5>
          <p className="card-text card-description">{scp.shortDescription}</p>
          <Link to={`/scp/${scp.id}`} className="btn btn-primary subject-files-btn">
            Subject File
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SCPCard;





