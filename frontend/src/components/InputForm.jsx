import React, { useState } from "react";

   const InputForm = ({ onSubmit }) => {
     const [inputData, setInputData] = useState("");
     const [error, setError] = useState("");

     const handleSubmit = (e) => {
       e.preventDefault();
       try {
         const parsedData = JSON.parse(inputData);
         onSubmit(parsedData);
         setError("");
       } catch (err) {
         setError("Invalid JSON input.");
       }
     };

     return (
       <div className="p-4 border border-gray-300 rounded-md">
         <form onSubmit={handleSubmit}>
           <label className="block mb-2">API Input:</label>
           <textarea
             className="w-full p-2 border border-gray-300 rounded-md"
             value={inputData}
             onChange={(e) => setInputData(e.target.value)}
             rows="4"
             placeholder='Enter JSON, e.g., {"data":["M", "1", "334", "4", "B"]}'
           />
           <button
             type="submit"
             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
           >
             Submit
           </button>
         </form>
         {error && <p className="mt-2 text-red-500">{error}</p>}
       </div>
     );
   };

   export default InputForm;