var React = require("react");
var GroceryListActions = require("../actions/GroceryListActions")
var GroceryListInputBox = require("./GroceryListInputBox.react");
var GroceryListArea = require("./GroceryListArea.react");

var GroceryListContent = React.createClass({

    render: function() {
        return (
            <section className="content">
                <GroceryListInputBox onItemAdd={ this._onItemAdd } />
                <GroceryListArea />
            </section>
        );
    },

    _onItemAdd: function(itemName) {
        GroceryListActions.addItem(itemName);
    }

});

module.exports = GroceryListContent;