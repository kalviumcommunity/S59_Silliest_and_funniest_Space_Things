import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

  const handleEntityUpdated = (updatedEntity) => {
    fetchData();
  };

  const handleEntityDeleted = (id) => {
    fetchData();
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Entity</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Silliest and Funniest Space Things</h1>
                {entities.map(entity => (
                  <FunnySpaceEntity
                    key={entity.id}
                    entity={entity}
                    onUpdate={handleEntityUpdated}
                    onDelete={handleEntityDeleted}
                  />
                ))}
              </>
            }
          />
          <Route
            path="/add"
            element={<AddEntityForm onEntityAdded={handleEntityAdded} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
