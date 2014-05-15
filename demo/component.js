/** @jsx React.DOM */

var MainPage = React.createClass({
  getInitialState: function () {
    return { trilhas: [], trilha: '' };
  },
  handleAdd: function () {
    var trilhas = this.state.trilhas.concat([this.state.trilha]);
    this.setState({ trilhas: trilhas, trilha: ''});
  },
  handleChange: function (e) {
    this.setState({trilha: e.target.value});
  },
  render: function () {
    return (
      <div>
        <input type="text" value={this.state.trilha} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Adicionar</button>
        <TrilhaList trilhas={this.state.trilhas} />
      </div>
    );
  }
});

var TrilhaList = React.createClass({
  render: function () {
    var renderTrilha = function (trilha) {
      return <li>Hello Trilha <strong>{trilha}</strong></li>;
    };

    return (
      <ul>
        {this.props.trilhas.map(renderTrilha)}
      </ul>
    );
  }
});

React.renderComponent(
  <MainPage />,
  document.getElementById('main'));