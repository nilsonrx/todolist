import React from 'react'
import { useState } from "react";
import './Add.scss';

const Add = (props) => {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [prioridade, setPrioridade] = useState();
    const [status, setStatus] = useState();
    const [prazo, setPrazo] = useState(); 
    
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const dados = { titulo, descricao, prioridade, status, prazo };
        const result = await fetch("https://projetofinaltarefas.herokuapp.com/tarefa/add", {
              method: 'POST',
              headers: new Headers({
                "Content-type": "application/json"
              }),
              body: JSON.stringify(dados)
            })
            console.log(dados)
          
        const response = await result.json();
        console.log(response);
        props.history.push('/');
        }
     
    return (
        <div className="text">
                       
            <h2>Crie a sua tarefa</h2>
                <img src="https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg" alt="Imagem" width="80" height="70"/>
            <form onSubmit={handleSubmit}>
                <div class="group">
                    <label for="nome">Titulo</label>
                    <input type="text" name="nome" id="nome" value={titulo} onChange={(id)=> setTitulo(id.target.value)}/>
                </div>
                <div class="group">
                    <label for="tipo">Descrição</label>
                    <input type="text" name="tipo" id="tipo" value={descricao} onChange={(id)=> setDescricao(id.target.value)}/>
                </div>
                <div class="group">
                    <label for="valor">Prioridade</label>
                    <input type="text" name="valor" id="valor" value={prioridade} onChange={(id)=> setPrioridade(id.target.value)}/>
                </div>
                <div class="group">
                    <label for="status">Status</label>
                    <p>Fazer:</p>
                    <input type="radio" name="status" value="Fazer" onChange={(id)=> setStatus(id.target.value)}/>
                    <p>Fazendo:</p>
                    <input type="radio" name="status" value="Fazendo" onChange={(id)=> setStatus(id.target.value)}/>
                    <p>Concluido:</p>
                    <input type="radio" name="status" value="concluido" onChange={(id)=> setStatus(id.target.value)}/>
                </div>
                <div class="group">
                    <label for="prazo">Prazo</label>
                    <input type="date" name="data" id="imagem" value={prazo} onChange={(id)=> setPrazo(id.target.value)}/>
                </div>
                <div class="btns">
                    <button>Salvar</button>
                    <button className="btns" href="/">Cancelar</button>                     
                </div>       
            </form>
            
        </div>
    )
}

export default Add
