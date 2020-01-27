const changeStateAfterDelay = (stateChangerFunc, newStateValue, delay) => {
    setTimeout(() => {
        stateChangerFunc(newStateValue);
    }, delay);
};

export default changeStateAfterDelay;
