import React, { Component } from 'react';

class Nav extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }



  render(){
    return(
      <div className='nav'>
        <button onClick={this.props.minusCount} className='nav-buttons'> {`< Previous`}</button>
        <div className="alter-data-buttons">
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </div>
        <button onClick={this.props.addCount} className='nav-buttons'>Next ></button>
      </div>
    )
  }
}

export default Nav;