var React = require("react");
var GroceryListStore = require("../stores/GroceryListStore");
var GroceryListActions = require("../actions/GroceryListActions");

var GroceryListInputBox = React.createClass({

    propTypes: {
        onItemAdd: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            value: 'Write an item name here!',
            pristine: true
        };
    },

    componentDidMount: function() {
        GroceryListStore.addAddItemListener(this._onItemAdded);
    },

    render: function() {
        return (
            <section className="list-input-box">
                <h2>Add an item to the list</h2>
                <input type="text" className="list-input" 
                    value={ this.state.value } 
                    onClick={ this._onInputClick } 
                    onChange={ this._onChange } />

                <button className="list-add-button" onClick={ this._onButtonClick }>Add</button>

            </section>
        );
    },

    _onChange: function(event) {
        this.setState({ 
            value: event.target.value, 
            pristine: false 
        });
    },

    _onInputClick: function(event) {
        if ( this.state.pristine ) {
            this.setState({ 
                value: ''
            });
        }
    },

    _onButtonClick: function(event) {
        if (!this.state.pristine) {
            this.props.onItemAdd(this.state.value);
        }
    },

    _onItemAdded: function() {
        this.setState({
            value: 'Write an item name here!',
            pristine: true
        });
    }

})

module.exports = GroceryListInputBox;