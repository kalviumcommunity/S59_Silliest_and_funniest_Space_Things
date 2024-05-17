import React, { useState, useEffect } from 'react';
import './space.css';
import axios from 'axios';

const FunnySpaceEntity = ({ entity }) => {
  return (
    <div className="container">
      <h2 className="title">{entity.Name}</h2>
      <p><strong>Description:</strong> {entity.Description}</p>
      {entity.Size && <p><strong>Size:</strong> {entity.Size}</p>}
      {entity.Color && <p><strong>Color:</strong> {entity.Color}</p>}
      {entity.Shape && <p><strong>Shape:</strong> {entity.Shape}</p>}
      {entity.FunnyAttribute && <p><strong>Funny Attribute:</strong> {entity.FunnyAttribute}</p>}
      {entity.Appearance && <p><strong>Appearance:</strong> {entity.Appearance}</p>}
      {entity.Behavior && <p><strong>Behavior:</strong> {entity.Behavior}</p>}
      {entity.SillyQuirk && <p><strong>Silly Quirk:</strong> {entity.SillyQuirk}</p>}
      {entity.HomePlanet && <p><strong>Home Planet:</strong> {entity.HomePlanet}</p>}
      {entity.PhysicalTraits && <p><strong>Physical Traits:</strong> {entity.PhysicalTraits}</p>}
      {entity.UniqueFeature && <p><strong>Unique Feature:</strong> {entity.UniqueFeature}</p>}
      {entity.Location && <p><strong>Location:</strong> {entity.Location}</p>}
      {entity.Type && <p><strong>Type:</strong> {entity.Type}</p>}
      {entity.Capacity && <p><strong>Capacity:</strong> {entity.Capacity}</p>}
      {entity.HumorLevel && <p><strong>Humor Level:</strong> {entity.HumorLevel}</p>}
      {entity.Date && <p><strong>Date:</strong> {entity.Date}</p>}
      {entity.FunnyOutcome && <p><strong>Funny Outcome:</strong> {entity.FunnyOutcome}</p>}
      {entity.Purpose && <p><strong>Purpose:</strong> {entity.Purpose}</p>}
      {entity.Inventor && <p><strong>Inventor:</strong> {entity.Inventor}</p>}
      {entity.QuirkyFeature && <p><strong>Quirky Feature:</strong> {entity.QuirkyFeature}</p>}
      {entity.Facts && <p><strong>Facts:</strong> {entity.Facts}</p>}
    </div>
  );
};

const App = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/route/space');
      console.log(response.data.spaceData);
      setEntities(response.data.spaceData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Silliest and Funniest Space Things</h1>
      {entities.map((entity, index) => (
        <FunnySpaceEntity key={index} entity={entity} />
      ))}
    </div>
  );
};

export default App;
