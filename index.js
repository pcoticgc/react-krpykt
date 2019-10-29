import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//tipos de componentes componente funcional ocomponente de clase de javascript los nombre de los componentes la primera letra tiene que ir en mayuscula




function MiComponente_A_Props(props){
  return <p> {props.textoConponenteProps}</p>;
}

function MiComponente_B_Props(props){
  return <p> {props.textoConponenteProps}</p>;
}


function MiComponenteFuncional(){
  return <p> Soy un {textoConponente}{textoCF}</p>;
}

class MiComponenteClaseJavaScript extends Component{
  render(){
  return <p> Soy un{textoConponente}de clase de{textoCF} javascript</p>;
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let textoConponenteProps=" variablePromp ";
    return (
      <div>
        < MiComponenteFuncional/>
        < MiComponenteClaseJavaScript/>
        < MiComponente_A_Props textoConponenteProps={textoConponenteProps}/>
        < MiComponente_B_Props textoConponenteProps={textoConponenteProps}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
