import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import JSON from '../assets/MOCK_DATA.json';

export default class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      data : JSON,
      searchTerm : ''
    };
  }
  handleSearch(searchTerm) {
    const search = searchTerm.target.value.trim();
    this.setState(()=> ({ searchTerm : search }));

  }
  render() {
    const filteredData = this.state.data.filter(person => {
      // todo temporary solution
      return person["first_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        person["last_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        person["university"].toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div className="container">
        <Header />
        <Search handleSearch={this.handleSearch} />
        <Results filteredData={filteredData} />
        <Footer />
      </div>
    );
  }
}