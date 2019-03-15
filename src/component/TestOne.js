import React, {Component} from 'react';
import PropTypes from '../../node_modules/prop-types'

class TestOne extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,
            name:'Hello world!'};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick1 = this.handleClick1.bind(this);
    }
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    handleClick1() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    handleClick2 = () => {   //属性初始化器
        console.log('this is:', this);
    }

    handleClick3() {
        console.log('this is:', this);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.handleClick1}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br></br>
                <button onClick={this.handleClick2}>
                    Click2
                </button>
                <br></br>
                <button onClick={(e) => this.handleClick3(e)}>
                    Click3
                </button>
                <br></br>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
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
