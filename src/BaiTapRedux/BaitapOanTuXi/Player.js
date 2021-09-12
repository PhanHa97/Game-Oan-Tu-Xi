import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
    render() {
        console.log("props", this.props.mangDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img
                        style={{ transform: "rotate(120deg)" }}
                        className="mt-4"
                        width={50}
                        height={50}
                        src={
                            this.props.mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh
                        }
                        alt={
                            this.props.mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh
                        }
                    />
                </div>
                <div className="speech-bubble"></div>
                <img
                    width={150}
                    height={150}
                    src="./img/imgGameOanTuXi/player.png"
                    alt="player.png"
                />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        // Xét giá trị cược thêm viền cho item được chọn
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: "3px solid orange" };
                        }

                        return (
                            <div className="col-4">
                                <button
                                    style={border}
                                    className="btnItem"
                                    onClick={() => {
                                        this.props.datCuoc(item.ma);
                                    }}
                                >
                                    <img
                                        width={35}
                                        height={35}
                                        src={item.hinhAnh}
                                        alt={item.hinhAnh}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        /**
         * key: value
         *  - key : đại diện cho tên props
         * - value: lấy giá trị từ rootReducer
         */
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * key: value
         *  - key : đại diện cho tên props
         *  - value:  là một phương thức
         */
        datCuoc: (maCuoc) => {
            // tạo action
            const action = {
                type: "CHON_KEO_BUA_BAO",
                payload: maCuoc,
            }
            // Gửi action vào store
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
