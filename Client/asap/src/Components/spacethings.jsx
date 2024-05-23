import React, { useState, useEffect } from "react";
import axios from "axios";
import FunnySpaceEntity from "./FunnySpaceEntity";
import "./space.css";

const SpaceThings = () => {
  const [entities, setEntities] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/route/space");
      setEntities(response.data.spaceData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/route/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUserChange = async (event) => {
    
    const userId = event.target.value;
    console.log(userId)
    setSelectedUser(userId);

    if (userId) {
      try {
        const response = await axios.get(`http://localhost:8080/route/user/${userId}`);
        const filteredEntities =entities.filter((e) => e.Name==userId)
        console.log(filteredEntities,);
        setEntities(filteredEntities,selectedUser)
      } catch (error) {
        console.error("Error fetching filtered entities:", error);
      }
    } else {
      fetchData();
    }
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

      <div>
        <label htmlFor="userSelect">Filter by User: </label>
        <select id="userSelect" value={selectedUser} onChange={handleUserChange}>
          <option value="">All Users</option>
          {users.map(user => (
            <option key={user._id} value={user.Name}>{user.username}</option>
          ))}
        </select>
      </div>

      {entities.map(entity => (
        <FunnySpaceEntity
          key={entity._id}
          entity={entity}
          onUpdate={handleEntityUpdated}
          onDelete={handleEntityDeleted}
        />
      ))}
    </div>
  );
};

export default SpaceThings;
