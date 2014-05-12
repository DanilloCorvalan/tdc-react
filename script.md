##Hello world - Big bang

- Criar arquivo hello-component.js
- Adicionar no index.html, após div main
```xml
  <script src='hello-component.js' type='text/jsx'></script>
```
- editar o arquivo com o seguinte código

```javascript
/** @jsx React.DOM */

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello TDC!</div>;
  }
});

React.renderComponent(<HelloMessage />, document.getElementById('main'));
```

```bash
python -m SimpleHTTPServer
```

##Hello world, properties

```javascript
/** @jsx React.DOM */

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});

React.renderComponent(
  <HelloMessage name="Trilha Javascript!" />,
  document.getElementById('main')
);

```

##Nested components

```javascript
/** @jsx React.DOM */

var HelloPage = React.createClass({
  render: function () {
    return ( 
      <div>
        <h1>Hello Page</h1>
        <HelloMessage name="Trilha Javascript" />
        <HelloMessage name="Trilha Web" />
        <HelloMessage name="Trilha Mobile" />
      </div>
    );
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

```

##Stateful Components

**Passo 1**
```javascript
getInitialState: function () {
  return { name: '' };
}
```

**Passo 2**
```javascript
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
```

**Passo 3**
```javascript
handleChange: function () {
  this.setState({ name: this.refs.name.getDOMNode().value });
},
```

##Stateful Completo

```javascript
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

```