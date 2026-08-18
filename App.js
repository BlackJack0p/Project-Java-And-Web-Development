import { useEffect, useState } from "react";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Property Listings</h1>

      {properties.map(property => (
        <div
          key={property.Property_ID}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h3>{property.Title}</h3>
          <p>Price: R{property.Price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
