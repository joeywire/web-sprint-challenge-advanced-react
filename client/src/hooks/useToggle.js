import { useState } from 'react';

export const useToggle = (initialValue) => {
    const [toggle, setToggle] = useState(initialValue);

    const switchToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return [toggle, switchToggle];
}