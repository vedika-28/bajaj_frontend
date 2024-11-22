import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FilterDropdown from "./components/FilterDropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (parsedData) => {
    setIsLoading(true);
    try {
      const res = await fetch("https://bfhl-5c1a.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Barter App</h1>
      <InputForm onSubmit={handleSubmit} />
      {response && (
        <>
          <FilterDropdown
            options={["Alphabets", "Numbers", "Highest lowercase alphabet"]}
            selectedOptions={selectedOptions}
            onChange={setSelectedOptions}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ResponseDisplay response={response} selectedOptions={selectedOptions} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
