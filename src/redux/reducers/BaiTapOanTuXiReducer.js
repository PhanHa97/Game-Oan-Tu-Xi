const stateDefault = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: "./img/imgGameOanTuXi/keo.png", datCuoc: false },
        { ma: "bua", hinhAnh: "./img/imgGameOanTuXi/bua.png", datCuoc: false },
        { ma: "bao", hinhAnh: "./img/imgGameOanTuXi/bao.png", datCuoc: true },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!💖",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {
        ma: "bao",
        hinhAnh: "./img/imgGameOanTuXi/bao.png",
        datCuoc: false,
    },
};

const BaiTapOanTuXiReducer = (state = stateDefault) => {
    return { ...state };
};

export default BaiTapOanTuXiReducer;
