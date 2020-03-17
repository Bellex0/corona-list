import React, { Component } from 'react';
import bar from '../pics/bar.jpg';
import train from '../pics/train.jpg'

class Main extends Component {   


    state = {
        index: 0, 
        picList: [bar, train]
      }
      
      onClickForward= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickBack= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
  
            }
      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} />
            <button  onClick={this.onClick}> Previous </button>
            <button  onClick={this.onClick}> Next </button>
          </div>
        );
      }

}


export default Main;