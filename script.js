class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});   //set state to current input value
    console.log("change", event.target.value);  
  }

  buttonHandler(){
    let todoList = this.state.list;
    todoList.unshift(this.state.word);
    this.setState({ list : todoList});
    this.setState({word:""});

    console.log("todoList", todoList);
  }

  render() {
      // render the list with a map() here
      // console.log(this.state.list)
      let tasks = this.state.list;
      console.log("taskssss", tasks);
      
      let thingstodo = tasks.map(task => {
        return <li>{task}</li>
      })

      return (
        <div className="list">
          <p>{this.state.word}</p>
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.buttonHandler}>add item</button>
          <ul>
            {thingstodo}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

