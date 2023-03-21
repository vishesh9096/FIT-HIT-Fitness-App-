var React = require('react'),
    assign = require('object-assign'),
    GoogleSvgIcon = require('./icons/48px.js');

var SvgIcon = React.createClass({
    
    getDefaultStyle: function(fill) {
        return {
            display: 'inline-block',
            height: '48px',
            width: '48px',
            fill: (undefined == fill) ? 'initial' : fill
        };
    },
    
    render: function() {
        var {name, fill, style, ...other} = this.props;
        var icon = GoogleSvgIcon[name];        
        var svgStyle;
                
        if (undefined == icon)
        {
            throw new Error(name + ' does not exists !');     
        }
        
        svgStyle = assign({}, this.getDefaultStyle(fill), style);        
        
        var key = 0;
        var pathList = icon.map(function(item){        
            item['key'] = ++key;            
            return React.createElement('path', item, null);
        });        
        
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" style={svgStyle} {...other}>
                {pathList}
            </svg>
        );     
    }
});

module.exports = SvgIcon;