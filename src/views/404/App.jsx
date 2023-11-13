import React, { Component } from "react";
import { flushSync } from "react-dom";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello 加油你是最·棒·的",
      counter: 0,
    };
  }
  editMessage() {
    console.log("修改文本");
    // setState的操作是异步的
    // 修改文本
    // 1.setState更多用法
    // 1.基本使用
    // this.setState({message: '加油你是最·棒·的'})
    // this.setState的做法 用了object.assign(this.state,newState) 将两者合并了 然后再调用render()
    // 2.setState可以传入一个回调函数 (好处是：可以在回调函数中编写新的state的逻辑， 可以将之前的state和props传递进来)
    // this.setState((state, props)=> {
    //   console.log(this.state.message, this.props)
    //   // 1.编写一些对新的state处理逻辑
    //   return {
    //     message: '加油加油'
    //   }
    // })
    // 3.setState在react的事件处理中是一个异步调用
    // 没有立马合并 如果希望在数据更新之后（数据合并），获取到对应的结果执行一些逻辑代码 那么可以在setState传入第二个参数：callback
    this.setState(
      {
        message: "异步调用",
      },
      () => {
        console.log(this.state.message, "这里是最新·的结果");
      }
    );
    // 为什么要设计成异步调用？
    // 可以提高性能(多个update放在同一次更新中，执行一次render函数)
    // 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
  }
  editCounter() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    // Promise.then((result) => {
      
    // }).catch((err) => {
      
    // });
    setTimeout(() => {
      // 在react18之前是同步的，在之后都是异步，变成了批处理

      flushSync(() => {
        // 这个可以实现同步
        this.setState({ message: "异步操作" });
      });
    }, 0);
    // 修改计数
  }
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h4>message: {message}</h4>
        <button onClick={(e) => this.editMessage()}>修改文本</button>
        <h3>当前计数： {counter}</h3>
        <button onClick={(e) => this.editCounter()}>修改计数</button>
      </div>
    );
  }
}

export default App;
