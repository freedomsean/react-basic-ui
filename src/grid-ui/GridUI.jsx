import React, {Component} from 'react';
import PropTypes from 'prop-types';

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(11, 1fr)',
    gridTemplateRows: 'auto',
    width: '100%',
    height: '100%'
}

class GridUI extends Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     containerStyle: Object.assign({}, gridContainerStyle)
        // }
    }

    componentWillMount() {
        // this.state.containerStyle = Object.assign({}, gridContainerStyle, {gridTemplateRows: `repeat(${this.props.children.length}, 1fr)`})
    }

    render() {
        return (
            <div style={gridContainerStyle}>
                {this.props.children}
            </div>

        )
    }
}

GridUI.propTypes = {}

export default GridUI