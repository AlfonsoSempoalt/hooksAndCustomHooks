import React, { useState } from 'react';
import '../02-UseEffect/effects.css';
import MultipleCustomHooks from '../03-useFetch/MultipleCustomHooks';

export const RealExampleUseRef = () => {
    const [show, setShow] = useState(false);

    const handleOnClickShow = () => {
        setShow(!show);
    };

    return (
        <>
            <h1>useRef</h1>
            <hr />
            <button
                className='btn btn-primary mt-5'
                onClick={handleOnClickShow}
                >
                show/hide
            </button>
            {show && <MultipleCustomHooks />}
        </>
    );
};
