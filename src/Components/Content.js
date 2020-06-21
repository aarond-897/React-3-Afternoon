import React, {Component} from 'react';
import data from '../data/data';
import Profile from './Profile';
import Nav from './Nav';

class Content extends Component{
  constructor(props){
    super(props);
    this.state={
      count:1,
      profile: data[0]
    }
  }

  addCount=()=>{
    if(this.state.count!==25){
      this.setState({
        count: ++this.state.count,
        profile: data[--this.state.count]
      })
    }else{
      this.setState({
        count: 1,
        profile: data[0]
      })
    }
  }

  minusCount = () =>{
    if(this.state.count===1){
      this.setState({
        count: 25,
        profile: data[24]
      })
    }else{
      this.setState({
        count: --this.state.count,
        profile: data[--this.state.count]
      })
    }
  }

  render(){
    return(
      <div className='content'>
        <Profile count={this.state.count} data={this.state.profile} />
        <Nav addCount = {this.addCount} minusCount={this.minusCount}/>
      </div>
    )
  }
}

export default Content;