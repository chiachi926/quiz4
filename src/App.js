import logo from './logo.svg';
import './App.css';
import multiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'




function App(){
  return(
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
      {multiButton(10)}
      </div>
    </div>
  );
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <script>import Button from ‘@material-ui/core/Button’;const MultiButton=(num)=>{  var output=[];  for(let i=1;i<num+1;++i) {output.push(<Button variant="contained" color="primary"   onClick={changeText}>第{i}個按鍵</Button>)}  return output;</script>
      </header>
    </div>
  );
}*/

export default App;
