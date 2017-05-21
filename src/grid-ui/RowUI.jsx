import React, {Component} from 'react';
import PropTypes from 'prop-types';


class RowUI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowStyle: {}
        }
    }

    componentWillMount () {
        this.state.rowStyle = {
            gridColumn: ( typeof this.props.to === undefined )? `${this.props.from}` : `${this.props.from} / ${this.props.to}`
        }
    }

    render () {
        return (
            <div style={ this.state.rowStyle }>
                { this.props.children }
            </div>
        )
    }
}

RowUI.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number,
}

export default RowUI