import './App.css';
import IntroPage from "./components/Titulo/Titulo";
import Introducao from "./components/Introducao/Introducao"
import LinhaTempo from './components/LinhaTempo/LinhaTempo';

function App() {
  return (
    <div className='main'>
      <IntroPage/>
      <Introducao/>
      <LinhaTempo/>
    </div>
  );
}

export default App;
