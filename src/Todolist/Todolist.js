import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoitem';
import './todo.css';

export default class Todolist extends Component {
  constructor(){
      super();
      this.ls = localStorage; 
      let todo= JSON.parse(this.ls.getItem('todo'))||[];
      this.state = {
          todo: todo
      }
    }
  addItem=(data)=>{ 
    let todoList = this.state.todo;
    todoList.push({
        data: data,
        checked: false
    })
    //改变后的值赋值给list
    this.setState({
      todo: todoList
    },()=>{
      this.ls.setItem('todo', JSON.stringify(this.state.todo)); //将所有的记录再次保存如localStorage中
    });
  }
  delItem=(idx,e)=>{
    let todo=[...this.state.todo];//下面操作TODO，而不要直接操作状态
    todo.splice(idx,1);
    //2.setstate是异步执行
    this.setState({    
        todo:todo
    },()=>{
      this.ls.setItem('todo', JSON.stringify(this.state.todo));
    });
  }
  checkboxChage = (idx) => {
    let todolist = this.state.todo;
    todolist[idx].checked = !todolist[idx].checked;
    this.setState({
        todo:todolist
    },()=>{
      this.ls.setItem('todo', JSON.stringify(this.state.todo)); //将所有的记录再次保存如localStorage中
    });
  }
  gettodoingCount= (e) => {
    let todoingCount=0;
    var len=this.state.todo.length;
    for(var i=0;i<len;i++){
      if(this.state.todo[i].checked==false){
        todoingCount++;
      }
    }
    return todoingCount;
  }
  gettodoneCount= (e) => {
    let todoneCount=0;
    var len=this.state.todo.length;
    for(var i=0;i<len;i++){
      if(this.state.todo[i].checked==true){
        todoneCount++;
      }
    }
    return todoneCount;
  }

  render() {
    return (
      <div>
        <Todoinput add={this.addItem}/>     
        <Todoing del={this.delItem} todo={this.state.todo} change={this.checkboxChage} count1={this.gettodoingCount} count2={this.gettodoneCount}/>
      </div>
    );
  }
}
