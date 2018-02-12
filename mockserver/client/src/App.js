import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Filter from './Filter'
import Table from './Table'
import {
  loadData,
  sortData,
} from './modules/data'

import {
  setFilter  
} from './modules/table'

class App extends Component {
  componentDidMount() {
    this.props.loadData();

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(value) {
    console.log(value);
    this.props.setFilter(value);
  }
  
  render() {
    return (
      <div>
        <Filter
          onChange={this.onFilterChange}/>
        <Table 
          sortData={this.props.sortData}
          filter={this.props.filter}
          data={this.props.data}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  data: state.data.data,
  filter: state.table.filter
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadData,
  sortData,
  setFilter,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

