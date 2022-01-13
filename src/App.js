import './App.scss';
import  Header from './components/shared/Header/Header';
import  Footer from './components/shared/Footer/Footer';
import { Switch , Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add/Add';
import Tarefas from './pages/Tarefas/Tarefas';
import TarefasEdit from './pages/TarefasEdit/TarefasEdit';


function App() {
 return (
   
   <div className="App">
     <Header />
       <Switch>
         <Route path="/" exact={true} component={Home} />
         <Route path="/add" component={Add}/>
         <Route path="/tarefas/:id" component={Tarefas}/>
         <Route path="/edit/:id" component={TarefasEdit}/>
       </Switch>
     <Footer />
   </div>
 );
}

export default App;