/** @jsx React.DOM */

var HelloPage = React.createClass({
  render: function () {
    return <div>
             <h1>Hello Page</h1>
             <HelloMessage name="Trilha Javascript" />
             <HelloMessage name="Trilha Web" />
             <HelloMessage name="Trilha Mobile" />
           </div>;
  }
});

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});

React.renderComponent(
  <HelloPage />,
  document.getElementById('main')
);
