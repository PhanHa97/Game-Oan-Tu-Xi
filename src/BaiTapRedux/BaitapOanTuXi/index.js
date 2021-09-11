import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import Player from "./Player";
import ThongTinTroChoi from "./ThongTinTroChoi";

export default class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi ">
                <div className="row text-center mt-4">
                    <div className="col-4">
                        <Player />
                    </div>

                    <div className="col-4">
                        <ThongTinTroChoi />
                        <button className="btn btn-success p-2 mt-2 display-4">Play Game</button>
                    </div>

                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}
