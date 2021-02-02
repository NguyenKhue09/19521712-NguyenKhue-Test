import { useState,useEffect } from 'react';

export default (Data,index) => {
    
    

    const [value, setValue] = useState(Data[index-1]);

    return {
        value: Data[index-1],
        onChangeName: event => {  
            setValue({...value,name: event.target.value});
            Data[index-1].name = event.target.value;  
        },
        onChangeDescription: event => {
            setValue({...value,description: event.target.value});
            Data[index-1].description = event.target.value;   
        }
    };
  
};