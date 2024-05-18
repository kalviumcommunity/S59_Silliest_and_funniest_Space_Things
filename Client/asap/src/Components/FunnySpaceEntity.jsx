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
      const response = await axios.put(`http://localhost:8080/route/${entity._id}`, formData);
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating entity:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/route/${entity._id}`);
      onDelete(entity.id);
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
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default FunnySpaceEntity;
