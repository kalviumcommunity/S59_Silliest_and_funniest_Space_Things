import React from 'react';
import './space.css'

const FunnySpaceEntity = ({ entity }) => {
  return (
    <div className="container">
    <h2 className="title">{entity.name}</h2>
    <p><strong>Description:</strong> {entity.description}</p>
    {entity.size && <p><strong>Size:</strong> {entity.size}</p>}
    {entity.color && <p><strong>Color:</strong> {entity.color}</p>}
    {entity.shape && <p><strong>Shape:</strong> {entity.shape}</p>}
    {entity.funnyAttribute && <p><strong>Funny Attribute:</strong> {entity.funnyAttribute}</p>}
    {entity.appearance && <p><strong>Appearance:</strong> {entity.appearance}</p>}
    {entity.behavior && <p><strong>Behavior:</strong> {entity.behavior}</p>}
    {entity.sillyQuirk && <p><strong>Silly Quirk:</strong> {entity.sillyQuirk}</p>}
    {entity.homePlanet && <p><strong>Home Planet:</strong> {entity.homePlanet}</p>}
    {entity.physicalTraits && <p><strong>Physical Traits:</strong> {entity.physicalTraits}</p>}
    {entity.uniqueFeature && <p><strong>Unique Feature:</strong> {entity.uniqueFeature}</p>}
    {entity.location && <p><strong>Location:</strong> {entity.location}</p>}
    {entity.type && <p><strong>Type:</strong> {entity.type}</p>}
    {entity.capacity && <p><strong>Capacity:</strong> {entity.capacity}</p>}
    {entity.humorLevel && <p><strong>Humor Level:</strong> {entity.humorLevel}</p>}
    {entity.date && <p><strong>Date:</strong> {entity.date}</p>}
    {entity.funnyOutcome && <p><strong>Funny Outcome:</strong> {entity.funnyOutcome}</p>}
    {entity.purpose && <p><strong>Purpose:</strong> {entity.purpose}</p>}
    {entity.inventor && <p><strong>Inventor:</strong> {entity.inventor}</p>}
    {entity.quirkyFeature && <p><strong>Quirky Feature:</strong> {entity.quirkyFeature}</p>}
  </div>
  );
};


const dummyData = [
    {
      name: "Comet Calamity",
      description: "A giant comet with a long, trailing tail.",
      size: "Huge",
      color: "Yellow and white",
      shape: "Long and narrow",
      funnyAttribute: "Makes funny squeaking noises when it flies"
    },
    {
      name: "Space Sloth",
      description: "A slow-moving sloth that lives in space.",
      appearance: "Furry with a long, expressive nose",
      behavior: "Hangs upside down from trees and eats space leaves.",
      sillyQuirk: "Talks in a slow, monotone voice"
    },
    {
      name: "Zargonians",
      description: "A race of tall, purple aliens with three eyes.",
      homePlanet: "Zargon",
      physicalTraits: "Tall and slender with purple skin",
      uniqueFeature: "Have antennae that glow in the dark"
    },
    {
      name: "Mount Funnyface",
      description: "A mountain on a distant planet that looks like a face.",
      location: "On the planet Zargon",
      size: "Very tall",
      composition: "Rock",
      sillyName: "Mount McSchnozzle"
    },
    {
      name: "The Sputtercraft",
      description: "A spaceship that is constantly sputtering and coughing.",
      type: "Spaceship",
      capacity: 50,
      uniqueFeature: "Shoots bubbles out of the back",
      humorLevel: "High"
    },
    {
      name: "The Great Intergalactic Hiccup",
      description: "A cosmic event that caused everyone in the galaxy to hiccup.",
      date: "Friday, 13th of May",
      location: "Throughout the galaxy",
      funnyOutcome: "Caused widespread chaos and confusion"
    },
    {
      name: "The Teleporter",
      description: "A device that can teleport people from one place to another.",
      purpose: "Transportation",
      inventor: "Professor Scatterbrain",
      quirkyFeature: "Sometimes teleports people to the wrong place"
    },
    {
        "name": "Big Bang Boogie",
        "description": "solar and lunar eclipses sunspots 'guest stars' (novae or supernovae as we understand today), comets and meteors"
    },
    {
        "name": "Space is silent",
        "description": "Uranus spins sideways"
    },
    {
        "name": "Dark Matter",
        "description": "Dark matter is a mysterious form of matter that makes up approximately 27% of the total mass and energy content of the universe. It is so named because it does not emit, absorb, or reflect electromagnetic radiation, making it invisible and detectable only through its gravitational effects on visible matter and light."
    }
  ];
  
  
  const App = () => (
    <div>
      <h1>Silliest and Funniest Space Things</h1>
      {dummyData.map((entity, index) => (
        <FunnySpaceEntity key={index} entity={entity} />
      ))}
    </div>
  );
  
  export default App;