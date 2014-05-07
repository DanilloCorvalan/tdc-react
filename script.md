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

```