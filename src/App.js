import React, { Component } from 'react';
import Menus from './Menus';
import AddMenu from './AddMenu';

class App extends Component {
  state = { 
    menus: [
      {id: 1, content: 'going to the playa'},
      {id: 2, content: 'going to the gym'}
    ]
   }
   deleteMenu = (id) => {
    const menus =this.state.menus.filter(menu => {
      return menu.id !== id
    });
    this.setState({
      menus
    })
   }
  addMenu = (menu) => {
    menu.id = Math.random();
    let menus = [...this.state.menus, menu];
    this.setState({
      menus
    })
   }
  render() { 
    return ( 
      <div className="menu-app container">
      <h1 className="center blue-text">Daily Activity</h1>
      <Menus menus={this.state.menus} deleteMenu={this.deleteMenu}/>
      <AddMenu addMenu={this.addMenu}/>
      </div>
     );
  }
}
 
export default App;
