var React = require("react");

var GroceryListHeader = React.createClass({

    render: function() {
        return (
            <header className="main-header">
                <div className="main-header-container">
                    <h1 className="main-header-text">React Grocery List</h1>
                    <nav className="main-header-nav">
                        <ul>
                            <li>My Lists</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

});

module.exports = GroceryListHeader;