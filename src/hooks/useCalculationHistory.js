import { useState, useEffect } from 'react';

const UseCalculationHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
        setHistory(savedHistory);
    }, []);

    const updateHistory = (newHistory) => {
        setHistory(newHistory);
        localStorage.setItem("calculationHistory", JSON.stringify(newHistory));
    };

    return { history, updateHistory };
};

export default UseCalculationHistory;
