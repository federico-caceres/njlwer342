import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {


  state = {
    todo: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
    valorActual: ''
  }

  insertTask = (e) =>{
    e.preventDefault();
    this.setState({
      todo : [...this.state.todo, this.state.valorActual],
      valorActual: ''
    });
  }

  cambioValor = (e) =>{
    this.setState({
      valorActual: e.target.value
    })
  }

  render() {

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.todo.map( (el, i) =>{
                return <li key={i}>{el}</li>
              })
            }
          </ul>
           <form onSubmit={ this.insertTask }>
             <input type="text" id="new-task" value={this.state.valorActual} onChange={this.cambioValor} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
