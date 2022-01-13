import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import './ToolCard.scss';

const ToolCard = (props) => {
    const tarefa = props.tarefa;
    console.log(tarefa)
    return (
        <Link to={`/tarefas/${tarefa._id}`} className="card">
            <div>
                <div className="card-img">
                    <img className="card-img" src='https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg' alt="image"/>
                </div>  
                <p className="card-text">Titulo: {tarefa.titulo}</p>
                <p className="card-text">Descrição: {tarefa.descricao}</p>
                <p className="card-text">Prioridade: {tarefa.prioridade}</p>
                <p className="card-text">Status: {tarefa.status}</p>
                <p className="card-text">Prazo: {tarefa.prazo}</p>
                <p className="card-text">Data de Criação: {moment(tarefa.datadecriacao).format('DD/MM/YYYY')}</p>
                            
            </div>
        </Link> 
    )   
}

export default ToolCard