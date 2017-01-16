var GroceryListDispatcher = require("../dispatcher/GroceryListDispatcher");
var GroceryListConstants = require("../constants/GroceryListConstants");

var GroceryListActions = {
    addItem: function(itemName) {
        GroceryListDispatcher.dispatch({
            actionType: GroceryListConstants.ADD_ITEM,
            itemName: itemName
        });
    },
    removeItem: function(id) {
        GroceryListDispatcher.dispatch({
            actionType: GroceryListConstants.REMOVE_ITEM,
            id: id
        });
    }
};

module.exports = GroceryListActions;