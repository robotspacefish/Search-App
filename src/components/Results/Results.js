import React from 'react';
import Result from '../Result/Result';

const Results = (props) => {
  return (
    <section id="results">
      {
        props.filteredData.length>0 ? 
          <table id="results-table" className="table-sm table-bordered">
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