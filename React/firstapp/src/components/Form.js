import { useState } from "react";
const Form = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDiscription] = useState();
  const [data, setData] = useState([]);
  let newData = [];
  const handleSubmit = () => {
    const dataObj = {
      id: id,
      title: title,
      description: description,
    };
    newData.push(dataObj);
    const prevs = data;
    prevs.push(dataObj);
    setData([...prevs]);
  };

  return (
    <div>
      <div>
        <h1> Data Filling Form </h1>
        <h2>
          <button onClick={() => setVisible(true)}>Click for Add</button>
        </h2>
      </div>
      {visible && (
        <div>
          <h1> Fill the Data:- </h1>
          <label> Id: </label>
          <input type="text" onChange={(e) => setId(e.target.value)}></input>
          <br></br>
          <br></br>
          <br></br>
          <label>Title: </label>
          <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
          <br></br>
          <br></br>
          <br></br>
          <label> Description: </label>
          <input
            type="text"
            onChange={(e) => setDiscription(e.target.value)}
          ></input>
          <h2>
            {" "}
            <button onClick={handleSubmit}> Click For Add </button>{" "}
          </h2>
          <h1> List of Data </h1>
          {data.map((value) => {
            return (
              <ul>
                <li> {value.id} </li>
                <li> {value.title} </li>
                <li> {value.description}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Form;
