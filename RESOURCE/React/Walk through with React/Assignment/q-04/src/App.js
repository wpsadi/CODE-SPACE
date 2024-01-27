import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
    <ul>
      <li>{props.item[0]}</li>
      <li>{props.item[1]}</li>
      <li>{props.item[2]}</li>
      <li>{props.item[3]}</li>
    </ul>
    </>
  );
}

export default App;
