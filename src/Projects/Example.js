import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ' Describa aqui',
      text: ' Pon aca el texto que desees ',
    };
  }
  handlerClick(e) {
    e.target.setAttribute('contentEditable', '');
  }
  render() {
    return (
      <div style={{ border: 'solid', padding: '1em' }}>
        <h1 id="card_num">Card No:</h1>
        <h2>
          Description:{' '}
          <span onClick={(e) => this.handlerClick(e)}>{this.state.description} </span>
        </h2>
        <p>
          Sometext:
          <span onClick={(e) => this.handlerClick(e)}>{this.state.text} </span>
        </p>
        <hr></hr>
     
      </div>
    );
  }
}

export default Card;
