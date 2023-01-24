import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {


  state = {
    todo: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
  }

  insertTask = (e) =>{
    if (e.key === 'Enter') {
      this.setState({
        todo : [...this.state.todo, e.target.value]
      });
    }
    e.target.value = '';
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
           <form onSubmit={e => { e.preventDefault(); }}>
             <input type="text" id="new-task" onKeyDown={this.insertTask} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
