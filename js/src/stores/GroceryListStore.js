var GroceryListConstants = require("../constants/GroceryListConstants");
var GroceryListDipatcher = require("../dispatcher/GroceryListDispatcher");
var EventEmitter = require("events");

var GroceryListStore = new EventEmitter();

GroceryListStore.items = [];

// Store methods
GroceryListStore.getItems = function() {
    return GroceryListStore.items;
};

GroceryListStore.addItem = function(itemName) {
    if (itemName) {
        GroceryListStore.items.push ({ name: itemName });
    }
};

GroceryListStore.removeItem = function(id) {
    if (id) {
        GroceryListStore.items.splice(id, 1);
    }
};

// Event listeners registrators
GroceryListStore.addAddItemListener = function(listener) {
    GroceryListStore.on('addItem', listener);
};

GroceryListStore.addRemoveItemListener = function (listener) {
    GroceryListStore.on('removeItem', listener);
};

// Dispatch function
GroceryListDipatcher.register(function(action) {
    switch (action.actionType) {
        case GroceryListConstants.ADD_ITEM : {
            GroceryListStore.addItem(action.itemName);
            GroceryListStore.emit('addItem');
            break;
        }
        case GroceryListConstants.REMOVE_ITEM : {
            GroceryListStore.removeItem(action.id)
            GroceryListStore.emit('removeItem');
        }
    }
});

module.exports = GroceryListStore;