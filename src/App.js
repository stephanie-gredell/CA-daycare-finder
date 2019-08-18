import React from 'react';
import Detail from './Detail'
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      centers: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://secure.dss.ca.gov/ccld/TransparencyAPI/api/FacilitySearch?facType=850&facility=&Street=&city=&zip=${this.state.zip}&county=&facnum=`)
    .then(res => res.json())
    .then(result => {
      this.setState({centers: result.FACILITYARRAY.sort(function(a, b) {
        return b.FACILITYNAME > a.FACILITYNAME  ? -1 : 1
      })});
    });
  }

  handleChange(event) {
    this.setState({zip: event.target.value});
  }

  render() {
    return (
      <div className="app">

      <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="search__form">
        <input type="text" placeholder="Enter zip code and press enter" name="query" className="app_search" required />
      </form>

      {this.state.centers &&
          <ul className="search__results-list">
            {this.state.centers.map(center => (
            <li key={center.FACILITYNUMBER}>
              <p><strong>{center.FACILITYNAME}</strong></p>
              <Detail number={center.FACILITYNUMBER} />
            </li>
            ))}
          </ul>
      }
      </div>
    );
  }

}

export default App;
