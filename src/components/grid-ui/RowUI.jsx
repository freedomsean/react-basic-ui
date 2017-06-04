import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DetectDimensionMixin from '../../service/DimensionService'

const SM_SIZE = 600


class RowUI extends Component {
    eventKey = -1

    constructor(props) {
        super(props)
        this.state = {
            gridColumn: ``,
        }
    }

    changeRowStyleState(paramFrom, paramTo) {
        const gridColumn = (typeof paramTo === 'undefined')
            ? `${paramFrom}`
            : `${paramFrom} / ${paramTo}`
        this.setState({ gridColumn })
    }

    resizeHandler ({ width, height }) {
        if ( width < SM_SIZE && typeof this.props.xsFrom === 'number' ) {
            this.changeRowStyleState(this.props.xsFrom, this.props.xsTo)
        } else {
            this.changeRowStyleState(this.props.from, this.props.to)
        }
    }

    componentWillMount () {
        this.eventKey = DetectDimensionMixin.listenResizeEvent(this.resizeHandler.bind(this))
        this.resizeHandler(DetectDimensionMixin.getScreenDimension())
    }

    componentWillUnmount() {
        DetectDimensionMixin.removeListenResizeEvent(this.eventKey)
    }


    render () {
        const { gridColumn } = this.state
        return (
            <div style={ Object.assign({}, { gridColumn }) }>
                { this.props.children }
            </div>
        )
    }
}

RowUI.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number,
    xsFrom: PropTypes.number,
    xsTo: PropTypes.number,
}

export default RowUI