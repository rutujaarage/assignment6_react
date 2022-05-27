import React, { useState, createContext } from "react";

export const Store = createContext();

  export const Details = (props) => {
  const [students, setStudents] = useState([

    {

      "Name":"Joe",
      "Age":"25",
      "Course":"HTML",
      "Batch":"August",
      "Id":"1"
      
      },
      
      {
      
          "Name":"Biden",
          "Age":"27",
          "Course":"Css",
          "Batch":"september",
          "Id":"2"
          
          },
          {
      
              "Name":"Martin",
              "Age":"27",
              "Course":"React",
              "Batch":"December",
              "Id":"3"
              
              },
              
              {
              
                  "Name":"Mary",
                  "Age":"23",
                  "Course":"Nodejs",
                  "Batch":"januauary",
                  "Id":"4"
                  
                  },
                  {
              
                      "Name":"Rosie",
                      "Age":"24",
                      "Course":"Database",
                      "Batch":"April",
                      "Id":"5"
                      
                      }
  ]);

  return (
    <Store.Provider value={[students, setStudents]}>
      {props.children}
    </Store.Provider>
  );
};