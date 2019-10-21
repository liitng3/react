import React, { Component } from 'react';
import PropTypes from  'prop-types';

export default class Todoitem extends Component {
  delItem=(idx,e)=>{
    this.props.del(idx);
  }
  changeItem=(idx,e)=>{
    this.props.change(idx);
  }
  render() {
    var {todo}=this.props;
    return (
      // <div>
      //   <ul>
      //     {
      //       todo.map((item,idx)=>{    //map会返回一个数组
      //           return <li key={idx}>{item}<input checked="checked" onClick={(e)=>this.props.del(idx,e)}/>-----<button onClick={(e)=>this.props.del(idx,e)}>删除</button></li>
      //       })
      //     }     
      //   </ul>
      //   <ul>
          
      //   </ul>
      // </div>
      <div>
      <h2>正在进行:{this.props.count1()}</h2>
      <hr/>
      <ul>
          {
              todo.map((todo,idx) => {
                  if (!todo.checked) {
                      return (
                          <li key={idx}>
                              <input type="checkbox" checked={todo.checked}
                                     onChange={(e)=>this.props.change(idx,e)}/>
                              {todo.data}
                              -- <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                          </li>
                      )
                  }
              })
          }
      </ul>
      <h2>已经完成:{this.props.count2()}</h2>
      <hr/>
      <ul>
          {
            todo.map((todo,idx) => {
                if (todo.checked) {
                    return (
                        <li key={idx}>
                            <input type="checkbox" checked={todo.checked}
                                   onChange={(e)=>this.props.change(idx,e)}/>
                            {todo.data}
                            -- <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                        </li>
                    )
                }
            })
          }
      </ul>
  </div>
    )
  }
}



