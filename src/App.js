import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <div className="contenedor">
        <h1>Ingreso</h1>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text fa fa-envelope"></span>
            <input className="form-control" type="text" placeholder="Correo Electrónico"></input>
          </div>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text fa fa-key icon"></span>
            <input className="form-control" type="password" placeholder="Conreaseña"></input>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
