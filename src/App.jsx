import './styles.css'
import './App.css'
import Cabecalho from './componentes/cabecalho'
import ConteudoPrincipal from './componentes/conteudoPrincipal'
import Rodape from './componentes/rodape/rodape'

function App() {
  return (
   <div>
   <Cabecalho/>
    <ConteudoPrincipal/>
    <Rodape/>
   </div>
  )
}

export default App
