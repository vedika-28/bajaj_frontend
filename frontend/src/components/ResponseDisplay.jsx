import React from "react";

   const ResponseDisplay = ({ response, selectedOptions }) => {
     return (
       <div className="mt-4">
         <h2 className="text-xl font-semibold">Filtered Response</h2>
         <div className="mt-2">
           {selectedOptions.includes("Numbers") && (
             <div>
               <strong>Numbers:</strong> {response.numbers.join(", ")}
             </div>
           )}
           {selectedOptions.includes("Alphabets") && (
             <div>
               <strong>Alphabets:</strong> {response.alphabets.join(", ")}
             </div>
           )}
           {selectedOptions.includes("Highest lowercase alphabet") && (
             <div>
               <strong>Highest lowercase alphabet:</strong>{" "}
               {response.highest_lowercase_alphabet.join(", ")}
             </div>
           )}
         </div>
       </div>
     );
   };

   export default ResponseDisplay;