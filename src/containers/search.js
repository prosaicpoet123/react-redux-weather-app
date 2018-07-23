import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ term: e.target.value });

    }

  handleOnSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
      <div className="submit-container">
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input 
          type="text" 
          placeholder="Search city or postcode"
          value={this.state.term}
          onChange={this.handleChange.bind(this)} />
          <button type="submit" className="flat-butt">Check weather</button>
        </form>
      </div>  
      
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);