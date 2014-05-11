/** @jsx React.DOM */

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello TDC!</div>;
  }
});

React.renderComponent(<HelloMessage />, document.getElementById('main'));
