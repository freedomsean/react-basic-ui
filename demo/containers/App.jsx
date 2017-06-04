import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FlexAlignUI, RowUI, GridUI, MotionUI } from 'react-basic-ui'

const demoDivStyle = {
    width: '100%',
    minWidth: 200,
    height: 200,
    color: 'red',
    fontSize: 24,
    backgroundColor: 'yellow'
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            changedWay: '',
            changedX: 0,
            changedY: 0,
            rightDivText: '',
            centerDivText: '',
            leftDivText: ''
        }
    }

    clearAllText() {
        this.setState({ rightDivText: '', centerDivText: '', leftDivText: '' })
    }

    changeWay(way) {
        this.clearAllText()
        switch (way) {
            case `up`:
                this.setState({centerDivText: 'You move to Up\n' })
                break;
            case `down`:
                this.setState({centerDivText: 'You move to Down\n' })
            break;
                case `left`:
                this.setState({leftDivText: 'You move to Left\n' })
            break;
                case `right`:
                this.setState({rightDivText: 'You move to Right\n' })
                break;
        
            default:
                break;
        }
    }
    
    render() {
        const that = this
        return (
            <MotionUI 
                motionDistinctX={100} motionDistinctY={100}  
                motionChange={ ( changedX, changedY ) => this.setState({ changedX, changedY }) } 
                motionUp={this.changeWay.bind(that, 'up')} 
                motionDown={this.changeWay.bind(that, 'down')} 
                motionLeft={this.changeWay.bind(that, 'left')} 
                motionRight={this.changeWay.bind(that, 'right')}>

                <FlexAlignUI containerWidth={200} align="right">
                        <div style={ demoDivStyle }>
                            {  `${this.state.rightDivText} x-axis changed: ${this.state.changedX} y-axis changed: ${this.state.changedY}` }
                        </div>
                </FlexAlignUI>
                <FlexAlignUI containerWidth={200} stretchHorizontal={true} align="center">
                        <div style={ demoDivStyle }>
                            { `I will fill the screen, if the screen size is too small. ${this.state.centerDivText} x-axis changed: ${this.state.changedX} y-axis changed: ${this.state.changedY}` }
                        </div>
                </FlexAlignUI>
                <FlexAlignUI containerWidth={200}  align="left">
                        <div style={ demoDivStyle }>
                            {  `${this.state.leftDivText} x-axis changed: ${this.state.changedX} y-axis changed: ${this.state.changedY}` }
                        </div>
                </FlexAlignUI>
                <div>
                    <GridUI>
                        <RowUI xsFrom={1} xsTo={12} from={3} to={9}>
                            <div  style={{ backgroundColor: 'green' }}>
                                {"I will full the row, when the screen is too small"}
                            </div>
                        </RowUI>
                        <RowUI from={3} to={9}>
                            <div  style={{ backgroundColor: 'yellow' }}>
                                {"I don't change the size, when the screen size is became smaller than 600"}
                            </div>
                        </RowUI>
                    </GridUI>
                </div>
            </MotionUI>
        )
    }
}

App.propTypes = {
   
};

export default App;
