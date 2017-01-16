var React = require("react");
var ReactDom = require("react-dom");
var GroceryList = require("./components/GroceryList.react");

ReactDom.render(React.createElement(GroceryList), document.getElementById('react-grocery-list'));