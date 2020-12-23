import React from 'react';

class BusinessName extends React.Component {
  // props: 상위에서 하위로 데이터 넘겨줌
  constructor(props) {
    super(props);
    // state: 컴포넌트 내에서 글로벌로 넘겨줄 수 있는 오브젝트
    this.state = { brand: 'zeze' };
  }
  changeBrand = () => {
    this.setState({ brand: 'chageWord' });
  };
  render() {
    return (
      <div>
        <h1>{this.state.brand}</h1>
        {/* button을 누르면  state의 brand가 setState의 브랜드로 바뀜 */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.changeBrand}
        >
          change brand
        </button>
      </div>
    );
  }
}
// class component
class Contact extends React.Component {
  render() {
    // html을 렌더링하는 렌더링 함수
    return (
      <div>
        <BusinessName />
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
