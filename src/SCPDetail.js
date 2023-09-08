import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css'

const SCPDetail = ({ scpData }) => {
  const { id } = useParams();

  const scp = scpData.find((scp) => scp.id === id);

  if (!scp) {
    return <div>SCP not found</div>;
  }

  return (
    <div>
      <img src={scp.image} alt={scp.name} /> 
      <h2>{scp.name}</h2>
      <p>{scp.shortDescription}</p>
    </div>
  );
};

export default SCPDetail;