import React, { useState } from "react";
import Select from "react-select";

export default function Locationtoggle(props) {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    
    { value: "Jabalpur", label: "Jabalpur" },
   
  ];

  

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
    
    localStorage.setItem('city',data.value);
    
  }
  return (
    <div className=" z-100">
      
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select city"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          
        />
      </div>
      <button type="button" onClick={props.handleclose}  class="absolute top-[10rem] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8">Save</button>

    </div>
  );
}