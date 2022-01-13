import {useEffect , useState} from 'react'
import './TarefasEdit.scss';

const TarefasEdit = (props) => {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [prioridade, setPrioridade] = useState();
    const [status, setStatus] = useState();
    const [prazo, setPrazo] = useState(); 
    
    const handleSubmit = async (evento) => {
      evento.preventDefault();
      const dados = { titulo, descricao, prioridade, status, prazo };
      console.log(dados);
      const result = await fetch(url+ props.match.params.id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(dados)

      })
      props.history.push("/");
    }
    useEffect(()=> {
      getTarefa();    
    }, [])


    const url = 'https://projetofinaltarefas.herokuapp.com/tarefa/';

    const getTarefa = async () => {
        const response = await fetch(url+'/'+ props.match.params.id);
        const {data} = await response.json();
        console.log(data);
        setTitulo(data.titulo);
        setDescricao(data.descricao);
        setPrioridade(data.prioridade);
        setStatus(data.status);
        setPrazo(data.prazo);
    }  

    return (
        <div className="text">
                       
            <h2> Edição da tarefa</h2>
                <img src="https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg" alt="Imagem" width="200" height="300"/>
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <label for="nome">Titulo</label>
                    <input type="text" name="nome" id="nome" defaultValue={titulo} onChange={(id)=> setTitulo(id.target.value)}/>
                </div>
                <div className="group">
                    <label for="tipo">Descrição</label>
                    <input type="text" name="tipo" id="tipo" defaultValue={descricao} onChange={(id)=> setDescricao(id.target.value)}/>
                </div>
                <div className="group">
                    <label for="valor">Prioridade</label>
                    <input type="text" name="valor" id="valor" defaultValue={prioridade} onChange={(id)=> setPrioridade(id.target.value)}/>
                </div>
                <div className="group">
                    <label for="status">Status</label>
                    <p>Fazer:</p>
                    <input type="radio" name="status" checked={status=== 'Fazer'} value="Fazer" onChange={(id)=> setStatus(id.currentTarget.value)}/>
                    <p>Fazendo:</p>
                    <input type="radio" name="status" checked={status=== 'Fazendo'} value="Fazendo" onChange={(id)=> setStatus(id.currentTarget.value)}/>
                    <p>Concluido:</p>
                    <input type="radio" name="status" checked={status=== 'Concluido'} value="Concluido" onChange={(id)=> setStatus(id.currentTarget.value)}/>
                </div>
                <div className="group">
                    <label for="prazo">Prazo</label>
                    <input type="date" name="data" id="imagem" defaultValue={prazo} onChange={(id)=> setPrazo(id.target.value)}/>
                </div>
                <div class="btns">
                  <button>Salvar</button>
                  <button className="btn" href="/">Cancelar</button>                  
                </div>       
            </form>
            
        </div>
    )
}

export default TarefasEdit