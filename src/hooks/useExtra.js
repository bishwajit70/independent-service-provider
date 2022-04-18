import React, { useEffect, useState } from 'react';

const useExtra = () => {
    const [extras, setExtra] = useState([])
    useEffect(() => {
        fetch('extras.json')
            .then(res => res.json())
            .then(data => setExtra(data))
    }, [])

    return [extras, setExtra];
};

export default useExtra;
