var React = require("react");
var GroceryListHeader = require("./GroceryListHeader.react");
var GroceryListContainer = require("./GroceryListContainer.react");

var GroceryList = React.createClass({

    render: function() {
        return (
            <div>
                <GroceryListHeader />
                <GroceryListContainer />
            </div>
        );
    }

});

module.exports = GroceryList;