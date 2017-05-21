import React, {Component} from 'react';
import PropTypes from 'prop-types';

const defaultContainerWidth = 600
const flexParentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}
const flexContainerStyle = {
    width: defaultContainerWidth
}

class FlexAlignUI extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            parentStyle: {},
            containerStyle: {}
        }
    }

    componentWillMount() {
        if (this.props.align === 'center') {
            this.state.parentStyle = Object.assign({}, flexParentStyle, {justifyContent: 'center'})
        }

        if (this.props.align === 'right') {
            this.state.parentStyle = Object.assign({}, flexParentStyle, {flexDirection: 'row-reverse'})
        }

        if (this.props.align === 'left') {
            this.state.parentStyle = Object.assign({}, flexParentStyle, {flexDirection: 'row'})
        }

        this.state.containerStyle = Object.assign({}, flexContainerStyle, {
            width: this.props.containerWidth || defaultContainerWidth
        }, this.props.containerStyle)
    }

    getClassName() {
        let className = ""
        if (this.props.stretchHorizontal) {
            className += " flex-stretch-horizontal"
        }
        if (this.props.stretchVertical) {
            className += " flex-stretch-vertical"
        }

        return className
    }

    render() {
        return (
            <div  className={this.getClassName()} style={this.state.parentStyle}>
                <div className={"flex-align-container" + this.getClassName()} style={this.state.containerStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

FlexAlignUI.propTypes = {
    containerWidth: PropTypes.number,
    align: PropTypes.string.isRequired,
    stretchHorizontal: PropTypes.bool,
    stretchVertical: PropTypes.bool,
    containerStyle: PropTypes.object,
}

export default FlexAlignUI