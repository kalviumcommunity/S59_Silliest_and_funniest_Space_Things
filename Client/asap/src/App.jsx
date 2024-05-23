import React ,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import LOGIN from './Components/Login';
import SpaceThings from './Components/spacethings';
import Main from './Components/Login'
import AddEntityForm from './Components/form';


function App() {

  const [entities, setEntities] = useState([]);
  const handleEntityAdded = (newEntity) => {
    setEntities([...entities, newEntity]);
  };
  return (
      <div className="App">
         <Main/>
        <Routes>
          <Route path="/home" element={<SpaceThings />} />
          <Route path="/add" element={<AddEntityForm onEntityAdded={handleEntityAdded}  />} />
        </Routes>
      </div>
  );
}

export default App;
