var Component = React.createClass({
	render: function(){
		return(
			<ul>
				{this.props.data.map(function(result){
					return <li>{result.str}</li>
				})}
			</ul>
		)
	}
});

var list = [
	{'id':0, 'str':'list-01'},
	{'id':1, 'str':'list-02'},
	{'id':2, 'str':'list-03'},
];

ReactDOM.render(
	<Component data={list} />,
	document.getElementById('content')
);