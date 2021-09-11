import React, { Component } from 'react'
import { connect } from "react-redux"
class Computer extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-4"
                        style={{ transform: "rotate(120deg)" }}
                        width={50}
                        height={50}
                        src={this.props.computer.hinhAnh}
                        alt={this.props.computer.hinhAnh}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img
                    width={150}
                    height={150}
                    src="./img/imgGameOanTuXi/playerComputer.png"
                    alt="playerComputer.png"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer);
