import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Otsikko = ({otsikko}) => (<h1>{otsikko}</h1>)

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>
    {text}
    </button>
    
)


const Naytto = ({text, value}) => ( <div>{text} {value}</div> );


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }
  
    lisaaHyva = () => this.setState({ hyva: this.state.hyva + 1 });
    lisaaNeutraali = () => this.setState({ neutraali: this.state.neutraali + 1 });
    lisaaHuono = () => this.setState({ huono: this.state.huono + 1 });
  
    render() {
      return (
        <div>
          <Otsikko otsikko={'anna palautetta'} />
          <Button handleClick={this.lisaaHyva} text={'hyvä'} />
          <Button handleClick={this.lisaaNeutraali} text={'neutraali'} />
          <Button handleClick={this.lisaaHuono} text={'huono'} />
          <Otsikko otsikko={'statistiikka'} />
          <Naytto text={'hyvä'} value={this.state.hyva} />
          <Naytto text={'neutraali'} value={this.state.neutraali} />
          <Naytto text={'huono'} value={this.state.huono} />
        </div>
      );
    }
  };
  
  ReactDOM.render(<App />, document.getElementById('root'))
  