// import React,{Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import Showtime from './Showtime.js'
// import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
// var str='react';
// var ele=<h1 class="tit">hello <p>react</p></h1>;
// var obj={
//     type:'h1',
//     props:{            //props属性
//         id:"tit",
//         class:"tit",
//         children:["hello"]
//     }

// }
// var ele=React.createElement("h1",{id:"tit",class:"tit"},"hello",React.createElement("p",{id:"t",class:"t"},"react"))
// console.log(ele);
//ReactDOM.render(ele, document.getElementById('root'));



// var obj={
//     type:'h1',
//     props:{            //props属性
//         id:"tit",
//         class:"tit",
        
//     }

// }
// function render(obj,container){
//     var ele=document.createElement(obj.type);
//     for(var item in obj.props){
//         if(item==='class'){
//             ele.className=obj.props[item]
//         }
//         else{
//             ele[item]=obj.props[item];    //不可以.item  用中括号才表示item是一个变量
//         }
//     }
//     container.appendChild(ele);
// }
// render(obj,document.getElementById("root"));


// var obj={
//     type:'h1',
//     props:{            //props属性
//         id:"tit",
//         class:"tit",
//         children:["hello",'react']
//     }

// }
// function render(obj,container){
//     var {type,props}=obj
//     var ele=document.createElement(type);
//     for(var item in props){
//         if(item==='class'){
//             ele.className=props[item]
//         }
//         else if(item==='children'){
//             for(var i=0;i<props[item].length;i++){
//                 //ele.innerHTML+=props.children[i];
//                 var txt=document.createTextNode(props.children[i]);
//                 ele.appendChild(txt);
//             }
//         }
//         else{
//             ele[item]=props[item];    //不可以.item  用中括号才表示item是一个变量
//         }
//     }
//     container.appendChild(ele);
// }
// render(obj,document.getElementById("root"));









// //自己封装render
// var obj={
//     type:'div',
//     props:{            //props属性
//         id:"tit",
//         class:"tit",
//         children:["hello",'react',
//             {
//                 type:'h1',
//                 props:{            //props属性
//                     id:"tit",
//                     class:"tit",
//                     children:["hello",'react']
//             }
        
//         }]
//     }

// }
// function render(obj,container){
//     var {type,props}=obj
//     //文档碎片               相当于一个虚拟的节点，承载节点里面的东西
//     var fragment=document.createDocumentFragment();
//     var ele=document.createElement(type);
//     for(var item in props){
//         if(item==='class'){
//             ele.className=props[item]
//         }
//         else if(item==='children'){
//             for(var i=0;i<props[item].length;i++){
//                 //ele.innerHTML+=props.children[i];
//                 if(typeof props.children[i]==='object'){
//                     render(props.children[i],ele);
//                 }else{
//                     var txt=document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }
//         else{
//             ele[item]=props[item];    //不可以.item  用中括号才表示item是一个变量
//         }
//     }
//     fragment.appendChild(ele)
//     container.appendChild(fragment);
// }
// //render(obj,document.getElementById("root"));

// //页面渲染过程
// //请求HTML页面、浏览器HTML解析器解析成HTML文件，生成dom树
// //link引入CSS文件、CSS解析器解析CSS，生成CSS对象模型，CSSOM和DOM tree结合生成一个渲染书render tree


// //页面回流（重排reflow）：DOM结构(删除增加)发生变化、内容变化、大小位置的变化、显示的变化(display，none)就会把页面重新解析渲染一遍(渲染过程如上),消耗性能，回流的代价很大
// //页面重绘（repaint）：颜色的变化(背景色、字体颜色、边框颜色)只会把这一小部分再渲染一遍



// //1.dom结构发生变化-----------先用变量进行DOM处理，最后一次渲染

// //会引起很多次回流，造成性能消耗
// console.time('time');
// var div=document.getElementById("root");
// var str=''
// for(var i=0;i<1000;i++){
//     div.innerHTML+='<p>'+i+'</p>';
// }
// console.timeEnd('time');

// //下面只会引起一次回流
// console.time('time');
// var div=document.getElementById("root");
// var str=''
// for(var i=0;i<1000;i++){
//     str+='<p>'+i+'</p>';
// }
// div.innerHTML=str;
// console.timeEnd('time');


// //2.对于样式的处理

// //会引起很2次回流和1次重绘，造成性能消耗
// var div=document.getElementById("root");
// div.style.width='100px';
// div.style.height='100px';
// div.style.backgroundColor='red';

// //下面只会引起一次回流和重绘
// var div=document.getElementById("root");
// div.className='active';



// //3.offsetLeft/offsetWidth等都会引起回流   尽量少些使用
// console.log(div.offsetLeft);

// //会引起多次回流，消耗性能
// var wid=div.offsetWidth
// setInterval(()=>{
//     wid+=1;
//     div.style.width=wid+'px';
// },100)

// //减少回流
// var wid=div.offsetWidth
// setInterval(()=>{
//     wid+=1;
//     div.style.width=wid+'px';
// },100)


// //4.文档碎片(内存中的一个变量)



// //显示当前系统时间
// function showTime(){
//     var ele= <div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// }
// showTime();
// setInterval(showTime,1000);



// //函数声明组件
// function Showtime(props){
//     console.log(props);
//     //return 中只可以最终返回一个封闭标签   如下会出错
//     // return (                           
//     //     <div></div>
//     //     <div>
//     //         {props.name}{new Date().toLocaleString()}
//     //     </div>
//     // )

//     // return (<div>                            
//     //         <div></div>
//     //         <div>
//     //             {props.name}{new Date().toLocaleString()}
//     //         </div>
//     //         </div>
//     //     )


//     //这样节省了DOM节点的使用
//     return (<Fragment>             
//         <div>{props.name}</div>
//         <div>{new Date().toLocaleString()}</div>
//         </Fragment>  
//     )
    
// }


// var num=[1,2,3,4,5];
// ReactDOM.render(
//     <Showtime name="zhangsan" age={num}/>,     //引用变量要用大括号
//     document.getElementById("root")
// );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
// import ShowTime from './Showtime';    //引用js文件时可以省略.js    其他文件不可以
// import './index.css';
import Todolist from './Todolist/Todolist';
// import Request from './Request'
// import Parent from './Context/Parent';
// import {con,con2} from "./Context/Context";
// import Hoc from "./Hoc/Hoc";
// import ParentPortal from "./Portal/ParentPortal";
// import App from "./App";
// import './index.css';
ReactDOM.render(
    <Todolist/>,
    document.getElementById('root')
)
// ReactDOM.render(
//     <Request/>,
//     document.getElementById('root')
// )


// let id=1234;
// 向子组件里传数据（index向child里传id），也就是子组件调用父组件，跨层调用可用context
// Context:
// 1、生成Context，可写在一个js文件中，export导出
// 2、在根组件import Provider，并配置Provider，加上value属性
// 3、在需要获取数据的组件，import Consumer并配置Consumer
// Consumer组件里是个函数，函数的参数是传过来的value值
// ReactDOM.render(
//     <con.Provider value={id}>
//         <Parent/>
//     </con.Provider>,
//     document.getElementById('root')           
// )
// let id = 1234;
// ReactDOM.render(
//     <con.Provider value={id}>
//         <div>ddd</div>
        
//         <con2.Provider value='aaaa'>
//             <Parent />
//         </con2.Provider>
//     </con.Provider>,
//     document.getElementById('root')
// )
// ReactDOM.render(
//     <Hoc/>,
//     document.getElementById('root')           
// )
// ReactDOM.render(
//     <ParentPortal/>,
//     document.getElementById('root')           
// )
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')           
// )

//***************************组件的首字母一定要大写，创建文件名称时要注意***************************
//                           组件才有生命周期                               

// 函数声明组件
// function ShowTime(props){
//     console.log(props);
//     return (<Fragment>
//                 <div>{props.name}{props.age}</div>
//                 <div>
//                     {new Date().toLocaleString()}
//                 </div>
//             </Fragment>
//         )
// }

// 类定义组件


// var num = [1,2,3,4,5];
// ReactDOM.render(
//     <ShowTime age={num} name="zhangsan"/>,
//     document.getElementById('root')
// )





// 显示当前系统时间
// function showTime(){
//     var ele = <div>
//                 <p>当前时间是：</p>
//                 <div>{new Date().toLocaleString()}</div>;
//             </div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// } 
// showTime();
// setInterval(showTime,1000);





// react技术栈
// jsx语法
// var ele = <h1 class="tit">hello <p>react</p></h1>;
// babel编译，返回一个对象
// var ele = React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'p',
//         {id:'t',class:'tit'},
//         'react')
// );
// ReactDOM.render(ele, document.getElementById('root'));
// 自己封装render函数
// var obj = {
//     type: 'div',
//     props: {
//         id: 'box',
//         class: 'box',
//         children: [
//             'hello',
//             'react',
//             {
//                 type: 'h1',
//                 props: {
//                     id: 'tit',
//                     class: 'tit',
//                     children: [
//                         'title',
//                         'react'
//                     ]
//                 }
//             }
//         ]
//     }
// }
// function render(obj,container){
//     var {type,props} = obj;
//     // 文档碎片
//     var fragment = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in props){
//         if(item === 'class'){
//             ele.className = props[item]
//         }else if(item === 'children'){
//             for(var i=0;i<props.children.length;i++){
//                 // ele.innerHTML += props.children[i];
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele);
//                 }else{
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById('root'));
// 页面渲染过程
// 请求HTML页面、浏览器HTML解析器解析html文件、生成DOM树
// link引入css文件、css解析器解析CSS，生成CSS对象模型，CSSOM和DOM tree结合生成一个render tree，最后浏览器绘制页面

// 页面回流（重排reflow）：DOM结构变化、内容变化、大小、位置的变化、显示的变化
// 页面重绘（repaint）：颜色的变化（背景色、字体颜色、边框颜色）

// 1、先用变量进行dom处理，最后一次渲染
// console.time('time');
// var div = document.getElementById('root');
// var str = ''
// for(var i=0;i<1000;i++){
//     str += '<p>'+i+'</p>';
// }
// div.innerHTML = str;
// console.timeEnd('time');
// 2、对于样式处理,声明一个css类
// var div = document.getElementById('root');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.background = 'red';

// div.className = 'active';
// 3、offsetLeft、offsetWidth等都会引起回流，要慎用
// console.log(div.offsetLeft);
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid + 'px';
// },100)
// 4、文档碎片（内存中的一个变量）



//组件交互
//父组件---->子组件：调用子组件时添加属性，子组件通过props拿到传递的数据
//子组件---->父组件：
