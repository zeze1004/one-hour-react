import React from 'react';
class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
      </tr>
    );
  }
}
// class component
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = evt => {
    this.setState({ username: evt.target.value });
  };
  alertName = () => {
    alert(this.state.username);
  };
  render() {
    let data = [
      { name: 'A', email: 'Athwjd@.com' },
      { name: 'B', email: 'Bthwjd@.com' },
      { name: 'C', email: 'Cthwjd@.com' },
    ];
    let rows = data.map(row => <Row name={row.name} email={row.email} />);
    // html을 렌더링하는 렌더링 함수
    return (
      <div>
        <p>Enter Your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.alertName}
        >
          저장
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
export default About;
