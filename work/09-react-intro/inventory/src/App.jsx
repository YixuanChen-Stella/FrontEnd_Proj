import React, { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(prevCount => prevCount + 1);
    const decreaseCount = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    const handleReorder = () => setCount(5);

    return (
        <div className="app-container">
            <p className="inventory-count">Inventory Count: {count}</p>
            <button onClick={increaseCount} className="button">+</button>
            <button onClick={decreaseCount} className="button" disabled={!count}>-</button>
            {count === 0 && <Reorder onReorder={handleReorder} />}
        </div>
    );
}

export default App;
