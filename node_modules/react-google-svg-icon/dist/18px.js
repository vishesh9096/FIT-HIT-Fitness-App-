'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react'),
    assign = require('object-assign'),
    GoogleSvgIcon = require('./icons/18px.js');

var SvgIcon = React.createClass({
    displayName: 'SvgIcon',

    getDefaultStyle: function getDefaultStyle(fill) {
        return {
            display: 'inline-block',
            height: '18px',
            width: '18px',
            fill: undefined == fill ? 'initial' : fill
        };
    },

    render: function render() {
        var _props = this.props;
        var name = _props.name;
        var fill = _props.fill;
        var style = _props.style;

        var other = _objectWithoutProperties(_props, ['name', 'fill', 'style']);

        var icon = GoogleSvgIcon[name];
        var svgStyle;

        if (undefined == icon) {
            throw new Error(name + ' does not exists !');
        }

        svgStyle = assign({}, this.getDefaultStyle(fill), style);

        var key = 0;
        var pathList = icon.map(function (item) {
            item['key'] = ++key;
            return React.createElement('path', item, null);
        });

        return React.createElement(
            'svg',
            _extends({ width: '18', height: '18', viewBox: '0 0 18 18', style: svgStyle }, other),
            pathList
        );
    }
});

module.exports = SvgIcon;