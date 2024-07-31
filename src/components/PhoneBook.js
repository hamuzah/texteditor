//creating a phonebook
import React, { useState } from "react";

const PhoneBook = () => {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [showData, setShowData] = useState([]);

  return (
    <div>
       
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          onClick={() =>
            setShowData([...showData, { name: userName, number: number }])
          }
        >
          Add
        </button>
      </form>
      <br />
      <h2>My Contacts</h2>
      {showData.map((data, index) => (
        <div key={index}>
          <p>
            {data.name} - {data.number}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PhoneBook;
