import logo from './logo.svg';
import './App.css';

function App({text,click}) {
  return (
    <>
    <button onClick={click}>{text}</button>
    </>
  );
}

export default App;
