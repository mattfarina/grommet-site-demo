// index.js contains the main entry point for the site.
var React = require('react')
var App = require('grommet/components/App')
var Router = require('react-router')
var Route = Router.Route
var RouteHandler = Router.RouteHandler
var Index = require('./pages/Index.jsx')
var About = require('./pages/About.jsx')
var IntlMixin = require('grommet/mixins/GrommetIntlMixin')

var coreStyles = require('./bower_components/grommet/css/grommet.min.css')
var themeStyles = require('./bower_components/grommet/css/grommet-hpinc.min.css')
var siteStyles = require('./assets/styles.scss')

var ATGRouter = React.createClass({
  mixins: [IntlMixin],
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href={coreStyles} rel="stylesheet" />
          <link href={themeStyles} rel="stylesheet" />
          <link href={siteStyles} rel="stylesheet" />
        </head>
        <body>
          <App>
          	<RouteHandler {...this.props} />
          </App>
        </body>
      </html>
    );
  }
});

var Routes = (
  <Route name="atg" path='/' handler={ATGRouter}>
    <Route name="home" path='/' handler={Index} />
    <Route name="about" path='/about' handler={About} />
  </Route>
);

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, initialProps), document)
  })
}

module.exports = function render (locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}

