import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './form.css';

const AddEntityForm = ({ onEntityAdded }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    Size: '',
    Color: '',
    Shape: '',
    Size: '',
    funnyAttribute: '',
    // appearance: '',
    // behavior: '',
    // sillyQuirk: '',
    // homePlanet: '',
    // physicalTraits: '',
    // uniqueFeature: '',
    // location: '',
    // type: '',
    // capacity: '',
    // humorLevel: '',
    // date: '',
    // funnyOutcome: '',
    // purpose: '',
    // inventor: '',
    // quirkyFeature: '',
    // facts: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (!formData.Name || !formData.Description || !formData.Color || !formData.Size || !formData.Shape) {
        const missingField = !formData.Name ? 'name' :
                            !formData.Description ? 'description' :
                            !formData.Color ? 'color' :
                            !formData.Size ? 'size' :
                            'shape';
    
        alert(`Please enter a ${missingField} for the entity`);
        return;
    }
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/route/add-space', formData);
      onEntityAdded(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding entity:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-entity-form">
        <h2>Add New Entity</h2>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="form-group">
          <button type="submit">Add Entity</button>
        </div>
      </form>
    </div>
  );
};

AddEntityForm.propTypes = {
  onEntityAdded: PropTypes.func.isRequired,
};

export default AddEntityForm;