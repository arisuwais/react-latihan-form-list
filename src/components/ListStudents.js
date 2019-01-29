import React from 'react';


export default class ListStudents extends React.Component {
    render() {
        return (
            <div>
                {this.props.list_students.map(student => {
                    return <li>{student}</li>
                })}
            </div>

        )

    }
}