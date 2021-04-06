import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Question = props => (
    <tr>
      <td>{props.question.question}</td>
      <td>{props.question.answers}</td>
      <td>
        <Link to={"/edit/"+props.question._id}>edit</Link>
      </td>
    </tr>
)

export default class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {questions: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/questions/')
          .then(response => {
            this.setState({ questions: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    questionList() {
        return this.state.questions.map(currentquestion => {
          return <Question question={currentquestion} key={currentquestion._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Questions</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Question</th>
                    <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    { this.questionList() }
                </tbody>
                </table>
            </div>
        )
    }
}