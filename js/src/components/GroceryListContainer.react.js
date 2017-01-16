var React = require("react");
var GroceryListContent = require("./GroceryListContent.react.js");
var GroceryListFooter = require("./GroceryListFooter.react.js");

var GroceryListContainer = React.createClass({

    render: function() {
        return (
            <section className="main-container">
                <GroceryListContent />
                <GroceryListFooter />
            </section>
        );
    }

});

module.exports = GroceryListContainer;