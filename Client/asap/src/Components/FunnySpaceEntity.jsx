import React, { useState } from "react";
import axios from "axios";

const FunnySpaceEntity = ({ entity, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...entity });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/route/${entity._id}`, formData, {
        withCredentials: true,
      });
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating entity:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/route/${entity._id}`, {
        withCredentials: true,
      });
      onDelete(entity._id);
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  return (
    <div className="container">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Size"
            value={formData.Size}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Color"
            value={formData.Color}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Shape"
            value={formData.Shape}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 className="title">{entity.Name}</h2>
          <p><strong>Description:</strong> {entity.Description}</p>
          {entity.Size && <p><strong>Size:</strong> {entity.Size}</p>}
          {entity.Color && <p><strong>Color:</strong> {entity.Color}</p>}
          {entity.Shape && <p><strong>Shape:</strong> {entity.Shape}</p>}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default FunnySpaceEntity;
