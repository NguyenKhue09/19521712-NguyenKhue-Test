import { useState } from 'react';

export default () => {
    const [value, setValue] = useState({name:"",description:""});

    return {
        value,
        onChangeName: event => {
            setValue({...value,name: event.target.value});
        },
        onChangeDescription: event => {
            setValue({...value,description: event.target.value});
        },
        reset: () => setValue({name:"",description:""})
    };
};
