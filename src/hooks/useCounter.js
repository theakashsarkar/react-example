import { useState } from 'react';
const useCounter = ({
    inital = 0, 
    lowerBound = 0,
    uperBound  = 10,
}) => {
    const [counter, setCounter] = useState(inital);
    const handleCounterInc = () => {
        if (counter < uperBound) {
            setCounter(counter + 1);
        }
    }
    const handleCounterDec = () => {
        if (counter > lowerBound) {
            setCounter(counter - 1);
        }
    }

    return {
        counter,
        lowerBound,
        uperBound,
        handleCounterInc,
        handleCounterDec,
    }
};
export default useCounter;