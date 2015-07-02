
var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Header = require('grommet/components/Header')
var Title = require('grommet/components/Title')

var ATGHeader = React.createClass({

  render: function () {
	return (
		<Header primary={true} fixed={false} float={false} large={true} flush={false}>
			<Title>
				<Link to="home">
					Advanced Technology Group
				</Link>
			</Title>
		</Header>
	)
  }
})

module.exports = ATGHeader