import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data").then((res) => {
      setData(res.data);
    });
  }, []);

  const addData = () => {
    axios.post("/data").then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={addData}>Add Data</button>
      {data.map((obj) => {
        return (
          <div>
            Name : {obj.name}{" "}
            Roll No : {obj.roll}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
