import React, { Component } from 'react'



export default class Toggle extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
         on: !this.state.on   
        })
    }


  render() {
    return (
      <div>
         

        <button class="bud" onClick={this.toggle}>
        
            
            <div class="Dam">MENU</div>
            
           
        </button>
        {this.state.on && this.props.children}
      </div>
    )
  }
}
