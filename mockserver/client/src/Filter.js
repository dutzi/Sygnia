import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return <div className="filter">
      <span>Filter: </span>
      <input onChange={this.onChange} type="text"/>
    </div>;
  }
}