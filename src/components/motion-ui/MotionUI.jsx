import React, {Component} from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
    width: '100vw',
    height: '100vh'
}

const DEFAULT_DISTINCT_X = 100
const DEFAULT_DISTINCT_Y = 100

class MotionUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageX: -1,
            pageY: -1,
        };
    }

    getPageMotionInEvent(event) {
        let eventData = event
        if ( typeof event.changedTouches !== 'undefined'  ) {
            eventData = event.changedTouches[0]
        }
        const { pageX, pageY } = eventData
        return { pageX, pageY } 
    }

    handleMotionStart(event) {
        this.setState(this.getPageMotionInEvent(event))
    }

    handleMotionEnd(event) {
        const { pageX, pageY } = this.getPageMotionInEvent(event) 
        const [ currentDistinctX, currentDistinctY ] = [  pageX - this.state.pageX, pageY - this.state.pageY ]
        const { motionDistinctX, motionDistinctY, motionUp, motionDown, motionLeft, motionRight, motionChange } = this.props

        if ( currentDistinctX > motionDistinctX  ) {
            motionRight && motionRight()
        }

        if ( currentDistinctX < -motionDistinctX  ) {
            motionLeft && motionLeft()
        }

        if ( currentDistinctY > motionDistinctY  ) {
            motionDown && motionDown()
        }

        if ( currentDistinctY < -motionDistinctY  ) {
            motionUp && motionUp()
        }

        if ( typeof motionChange === 'function' ) {
            motionChange(currentDistinctX, currentDistinctY)
        }
    }

    render() {
        return (
            <div onMouseUp={this.handleMotionEnd.bind(this)} onMouseDown={this.handleMotionStart.bind(this)} onTouchEnd={this.handleMotionEnd.bind(this)} onTouchStart={this.handleMotionStart.bind(this)}   style={containerStyle}>
                {this.props.children}
            </div>

        )
    }
}

MotionUI.propTypes = {
    motionDistinctX: PropTypes.number.isRequired,
    motionDistinctY: PropTypes.number.isRequired,
    motionUp: PropTypes.func,
    motionDown: PropTypes.func,
    motionLeft: PropTypes.func,
    motionRight: PropTypes.func,
    motionChange: PropTypes.func,
}

export default MotionUI