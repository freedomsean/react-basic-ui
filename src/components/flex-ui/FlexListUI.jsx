import React, {Component} from 'react';
import PropTypes from 'prop-types';

const flexParentStyle = {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    display: 'flex',
    textDecoration: 'none',
    listStyleType: 'none',
    padding: 0,
}

const flexChildStyle = {
    display: 'inline-block',
    height: 83,
    width: '100%',
    lineHeight: '80px',
    margin: 'auto',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 600,
    textDecoration: 'none'
}

class FlexListUI extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <ul className="flex-list" style={flexParentStyle}>
                {this
                    .props
                    .elements
                    .map(ele => (
                        <li className="flex-list-element" key={Math.random()} style={flexChildStyle}>{ele}</li>
                    ))
}
            </ul>

        );
    }
}

FlexListUI.propTypes = {
    elements: PropTypes.array.isRequired
}

export default FlexListUI