var Layout = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li>Home</li>
                    <li>Stuff</li>
                    <li>Contect</li>
                </ul>
                <div className="content">
                </div>
            </div>
        )
    }
});

var Destination = document.querySelector("#contant");

ReactDOM.render(
  <div>
    <Layout />
  </div>,
  Destination
);