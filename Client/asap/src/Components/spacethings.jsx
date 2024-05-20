import React, { useState, useEffect } from "react";
import axios from "axios";
import AddEntityForm from "./form";
import FunnySpaceEntity from "./FunnySpaceEntity";
import "./space.css";

const App = () => {
  const [entities, setEntities] = useState([]);
  console.log(entities);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/route/space");
      setEntities(response.data.spaceData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEntityAdded = (newEntity) => {
    setEntities([...entities, newEntity]);
  };

  const handleEntityUpdated = () => {
    fetchData();
  };

  const handleEntityDeleted = () => {
    fetchData();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/add">Add Entity</a></li>
        </ul>
      </nav>
      <h1>Silliest and Funniest Space Things</h1>
      {entities.map(entity => (
        <FunnySpaceEntity
          key={entity.id}
          entity={entity}
          onUpdate={handleEntityUpdated}
          onDelete={handleEntityDeleted}
        />
      ))}
    </div>
  );
};

export default App;
