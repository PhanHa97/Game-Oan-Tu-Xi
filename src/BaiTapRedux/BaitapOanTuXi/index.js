import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import Player from "./Player";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {

    render() {
        return (
            <div className="gameOanTuXi ">
                <div className="row text-center mt-4">
                    <div className="col-4">
                        <Player />
                    </div>

                    <div className="col-4">
                        <ThongTinTroChoi />
                        <button className="btn btn-success p-2 mt-2 display-4" onClick={() => {
                            this.props.playGame()
                        }}>
                            Play Game
                        </button>
                    </div>

                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {



        playGame: () => {
            let count = 0;
            //  Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if (count > 35) {
                    // Dừng hàm setInterval lại
                    clearInterval(randomComputerItem)
                }
            }, 100);
        },
    };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
