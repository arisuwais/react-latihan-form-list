// Destructcturing
import React, { Component } from 'react';
import ListStudents from './ListStudents';

export default class FormStudents extends Component {
    //STATE
    constructor() {
        super()
        this.state = {
            students: ['John Doe'],
            currentStudentName: ''
        }
    }

    addStudent() {
        let currentStudents = this.state.students
        currentStudents.push(this.state.currentStudentName)
        this.setState({
            students: currentStudents
        })
    }

    render() {
        return (
            <div className='App'>
                <span> {this.state.currentStudentName} </span>
                <br />
                < input
                    type='text'
                    name='student_name'
                    onChange={(e) => this.setState({ currentStudentName: e.target.value })} />
                <br /><br />
                < input
                    type='submit'
                    value='Add student'
                    onClick={() => this.addStudent()} />
                <h2>students:</h2>
                <ListStudents list_students={this.state.students} />
            </div>
        )
    }
}