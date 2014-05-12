/** @jsx React.DOM */

var HelloPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello Page</h1>
        <HelloMessage />
        <HelloMessage />
        <HelloMessage />
      </div>
    );
  }
});

var HelloMessage = React.createClass({
  getInitialState: function () {
    return { name: '' };
  },
  handleChange: function () {
    this.setState({ name: this.refs.name.getDOMNode().value });
  },
  render: function () {
    return (
      <div>
        <h3>Hello {this.state.name}</h3>

        <div>
          <input type="text" ref="name" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
});

React.renderComponent(
  <HelloPage />,
  document.getElementById('main')
);
