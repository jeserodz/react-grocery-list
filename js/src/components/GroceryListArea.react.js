var React = require("react");
var GroceryListStore = require("../stores/GroceryListStore");
var GroceryListActions = require("../actions/GroceryListActions");

var GroceryListArea = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            noItemsMessage: 'There are no items added.'
        }
    },

    componentDidMount: function() {
        GroceryListStore.addAddItemListener(this._onItemAdded);
        GroceryListStore.addRemoveItemListener(this._onItemRemoved);
    },

    render: function (){
        var that = this;
        var listItems = [];

        if (this.state.items.length) {
            this.state.items.forEach(function(item, index) {
                listItems.push(
                    <li className="list-item" key={index}>
                        { item.name }
                        <button className="remove-item-button" data-item-id={index} onClick={ that._onRemoveButtonClick }>
                            Remove
                        </button>
                    </li>);
            });
        } else {
            listItems.push(
                <li className="list-item" key={0}>
                    { this.state.noItemsMessage }
                </li>);
        }

        return (
            <section className className="list">
                { listItems }
            </section>
        );
    },

    _onRemoveButtonClick: function(event) {
        GroceryListActions.removeItem(event.target.dataset.itemId);
    },

    _onItemAdded: function() {
        this.setState({
            items: GroceryListStore.getItems()
        });
    },

    _onItemRemoved: function() {
        this.setState({
            items: GroceryListStore.getItems()
        });
    }

});

module.exports = GroceryListArea;