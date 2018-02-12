import './Table.css';
import React, { Component } from 'react';

export default class Table extends Component{

  onColumnClick(index, e) {
    e.preventDefault();
    this.props.sortData(index);
  }

  render() {
    return <table className='table'>
      <thead>
        <tr>
          <td><a href='#/sort' onClick={this.onColumnClick.bind(this, 0)}>Description</a></td>
          <td><a href='#/sort' onClick={this.onColumnClick.bind(this, 1)}>Id</a></td>
          <td><a href='#/sort' onClick={this.onColumnClick.bind(this, 2)}>Name</a></td>
          <td><a href='#/sort' onClick={this.onColumnClick.bind(this, 3)}>Time</a></td>
          <td><a href='#/sort' onClick={this.onColumnClick.bind(this, 4)}>Type</a></td>
        </tr>
      </thead>
      <tbody>
        {
          this.props.data.filter(event => {
            return event.event_description.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1;
          }).map((event, index) => {
            return (<tr key={index}>
              <td>{event.event_description}</td>
              <td>{event.event_id}</td>
              <td>{event.event_name}</td>
              <td>{event.event_time}</td>
              <td>{event.event_type}</td>
            </tr>)
          })
        }
      </tbody>
    </table>;
  }
}
