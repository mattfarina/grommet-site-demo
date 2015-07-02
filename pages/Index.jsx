
var React = require('react')
var GrommetDocument = require('grommet/components/Document');
var ATGHeader = require('../ATGHeader.jsx')
var Section = require('grommet/components/Section')

var Index = React.createClass({
	render: function () {
		return (
			<GrommetDocument className="home" full={true}>
				<ATGHeader />

				<Section>
					The Homes Page

					<h1>foo</h1>

					<h2>bar</h2>

					<h3>baz</h3>
				</Section>
			</GrommetDocument>
		)
	}
})

module.exports = Index