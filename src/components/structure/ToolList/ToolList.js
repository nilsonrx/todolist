import React, { useEffect , useState } from 'react'
import ToolCard from '../Card/ToolCard';
import './ToolList.scss'



const ToolList = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(()=> {
        getTarefa();    
    }, [])

    const url = 'https://projetofinaltarefas.herokuapp.com/tarefas/';

    const getTarefa = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(response);
        console.log(data);
        setTarefas(data.data);
    }

    return (
        <div className="list">
            {tarefas.map((tarefa, index)  => ( 
                <ToolCard key={index} tarefa={tarefa} />
            ))}
        </div>
    )
}

export default ToolList


//https://projetofinaltarefas.herokuapp.com/