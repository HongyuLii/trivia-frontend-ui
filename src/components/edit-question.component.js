import React, { Component } from 'react';
import axios from 'axios';

export default class EditQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: '',
      answers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/questions/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          question: response.data.question,
          answers: response.data.answers,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const question = {
      question: this.state.question,
      answers: this.state.answers,
    }

    console.log(question);

    axios.post('http://localhost:8000/questions/update/' + this.props.match.params.id, question)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Question Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Answer: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.answer}
              onChange={this.onChangeAnswer}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Question Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}