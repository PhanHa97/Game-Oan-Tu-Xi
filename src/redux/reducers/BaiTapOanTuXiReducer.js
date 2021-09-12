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

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO":
            {
                // *** CÁCH 1:
                // // 1. reset mảng cược
                // let mangCuocUpDate = [...state.mangDatCuoc];
                // mangCuocUpDate = mangCuocUpDate.map((item, index) => {
                //     return { ...item, datCuoc: false };
                // });
                // console.log(`mangCuocUpDate`, mangCuocUpDate);
                // // 2. tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó
                // let index = mangCuocUpDate.findIndex((qc) => qc.ma === action.payload);
                // if (index !== -1) {
                //     mangCuocUpDate[index].datCuoc = true;
                // }
                // // 3. cập nhật lại mảng trong state
                // state.mangDatCuoc = mangCuocUpDate;
                // return { ...state };
                // // console.log(action);

                // *** CÁCH 2: 
                // 1. reset mang cuoc
                let mangCuocUpDate = [...state.mangDatCuoc];
                // 2.Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
                mangCuocUpDate = mangCuocUpDate.map((item, index) => {
                    if (item.ma === action.payload) {
                        return { ...item, datCuoc: true }
                    }
                    return { ...item, datCuoc: false }
                })
                // 3. cập nhật lại mảng trong state
                state.mangDatCuoc = mangCuocUpDate;
                return { ...state }
            }
        default:
            break;

        case "RAN_DOM": {
            // console.log(`random`, action);
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]

            state.computer = quanCuocNgauNhien;

            return { ...state }
        }
    }

    return { ...state };
};



export default BaiTapOanTuXiReducer;
