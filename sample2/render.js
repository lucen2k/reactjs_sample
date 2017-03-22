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
                    <Home />
                </div>
            </div>
        )
    }
});

var Home = React.createClass({
   render: function() {
        return (
            <div>
              <h2>HELLO</h2>
              <p>Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.</p>
      
              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>            
        );
   }
});

var Destination = document.querySelector("#contant");

ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={Layout}>
    </ReactRouter.Route>
  </ReactRouter.Router>,
  Destination
);