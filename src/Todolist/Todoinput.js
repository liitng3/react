import React, { Component } from 'react';

export default class Todoinput extends Component {
/**大括号里是js环境 */
  constructor(){
      super();
      this.handleinput=this.handleinput.bind(this);
      

  }
  handleinput=(e)=>{        
    if(e.keyCode===13){
      this.props.add(e.target.value);
      e.target.value='';
    }  
  }   
            
  render(){
    return (
      <div>
        <input placeholder="添加ToDo"  onKeyDown={this.handleinput}  type='text'/>
      </div>
    )
  }
}
  

// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，
// 在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，
// 给input标签加上name属性,事件处理函数中写：
// setState({[e.target.name]:e.target.value})