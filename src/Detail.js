import React from 'react';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      detail: null
    }
  }

  componentDidMount() {
    fetch(`https://secure.dss.ca.gov/ccld/TransparencyAPI/api/FacilityDetail/${this.props.number}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      this.setState({ detail: result.FacilityDetail })
    });
  }
  render() {
    return (
      <div>
      {this.state.detail &&
        <div className="violations">
          <p># of Type A Violations: {this.state.detail.TOTTYPEA}</p>
          <p># of Type B Violations: {this.state.detail.TOTTYPEB}</p>
        </div>
      }
      </div>
    );
  }

}

export default Detail;
