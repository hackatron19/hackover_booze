import React, { Component } from 'react';
class Smile extends Component {
    state = {  }
    render() { 
        let classes="fa fa-smile-o";
        if(!this.props.smilee) classes='fa fa-frown-o';
        return ( 
            <i onClick={this.props.onClick} 
               style={{cursor:"pointer"}}
               className={classes}
               aria-hidden="true">
            </i>
               );
    }
}
export default Smile;