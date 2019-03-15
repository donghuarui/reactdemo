import React, {Component} from 'react';
import PropTypes from '../../node_modules/prop-types'
class TestOne extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
TestOne.defaultProps = {
    name: 'Runoob'
};
TestOne.propTypes = {
    name: PropTypes.string
};
export default TestOne;
