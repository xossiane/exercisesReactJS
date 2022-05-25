import {useState} from 'react';

function LetsCount() {
    const [count, Counting] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes hein</p>
            <button onClick={() => Counting(count + 1)}> 
            Clica aqui ó
            </button>
        </div>
    );
};

export default LetsCount;
