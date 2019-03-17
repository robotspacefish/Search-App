import React from 'react';
import Result from '../Result/Result';
import './Results.css';

const Results = (props) => {
  return (
    <section id="results" className="container">
      {
        props.filteredData.length>0 ? 
          <table id="results-table" className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {
                props.filteredData.map(person => (
                  <Result
                    key={person.id}
                    firstName={person["first_name"]}
                    lastName={person["last_name"]}
                    university={person["university"]}
                  />
                ))
              }
            </tbody>
          </table>
          :
          <p id="no-matches">No matches</p>
      }
    </section>
  );
}

export default Results;