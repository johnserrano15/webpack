import React, { Component } from 'react'
import { render } from 'react-dom'
import Teacher from './teacher'

/* mas info -> https://reactjs.org/docs/lists-and-keys.html */
class Teachers extends Component {
  render() {
    return (
      <ul className="teachers">
      {this.props.data.teachers.map((teacherData, index) => {
        return <Teacher key={ index } {...teacherData}/>
      })
      }
      </ul>
    )
  }
}

export default Teachers;