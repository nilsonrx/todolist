import {useState , useEffect} from 'react'
import './Tarefas.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Tarefas = (props) => {
    const [tarefas, setTarefas] = useState([]);
    useEffect(()=> {
        getTarefa();    
    }, [])

    const url = 'https://projetofinaltarefas.herokuapp.com/tarefa/';

    const getTarefa = async () => {
        const response = await fetch(url+'/'+ props.match.params.id);
        const data = await response.json();
        console.log(data);
        setTarefas(data.data);
    } 
    
    const HandleDelete = async (evento) =>{
        evento.preventDefault();
        const result = await fetch(url+ props.match.params.id,{method:'DELETE'})
        props.history.push('/'); 
               
    }       
    
    return (
        <section className="card">
            <div className="card-img">
            <img src="https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg" alt="imagemtarefa" width="200" height="300"/>
            </div>
            <div className="view-info">
                <p className="view-info-text">Titulo: {tarefas.titulo}</p>
                <p className="view-info-text">Descrição: {tarefas.descricao}</p>
                <p className="view-info-text">Prioridade: {tarefas.prioridade}</p>
                <p className="view-info-text">Status: {tarefas.status}</p>
                <p className="view-info-text">Prazo: {tarefas.prazo}</p>
                <p className="view-info-text">Data de Criação:{moment(tarefas.datadecriacao).format('DD/MM/YYYY')}</p>
                <Link to={`/edit/${tarefas._id}`}>
                <button className="btn btn-sucsess" >Editar</button>
                </Link>
                <button className="btn btn-danger" onClick={HandleDelete}>Excluir</button>
            </div>
        </section>
    )
}

export default Tarefas

