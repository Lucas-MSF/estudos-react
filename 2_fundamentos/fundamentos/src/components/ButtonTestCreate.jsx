import React, { useState } from 'react';

const ButtonTestCreate = () => {
    const [clicks, setClicks] = useState(0);
    const buttonName = 'Click to increment the click count';

    const handleCountClicks = () => {
        setClicks(clicks + 1);
   };

    return (
        <>
            <div>
                <button onClick={handleCountClicks}>{ buttonName }</button>
                <p>Click count: {clicks}</p>
            </div>
        </>
    );
};

export default ButtonTestCreate;