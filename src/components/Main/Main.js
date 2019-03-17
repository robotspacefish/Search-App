import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import JSON from '../../assets/MOCK_DATA.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON,
      searchTerm: ''
    };
  }
  handleSearch = (searchTerm) => {
    const search = searchTerm.target.value.trim();
    this.setState(() => ({ searchTerm: search }));
  }
  render() {
   const filteredData = this.state.data.filter(person => {
      return person["first_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        person["last_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        person["university"].toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
   return (
     <main>
       <Search handleSearch={this.handleSearch}/>
       <Results filteredData={filteredData}/>
     </main>
   )
 }
}

export default Main;