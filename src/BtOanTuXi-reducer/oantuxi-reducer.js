
const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: "./img/keo.png", datCuoc: true },
        { ma: 'bua', hinhAnh: "./img/bua.png", datCuoc: false },
        { ma: 'bao', hinhAnh: "./img/bao.png", datCuoc: false }
    ],
    ketQua: "I am Iron Man, I love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: ({ ma: 'bua', hinhAnh: "./img/bua.png", datCuoc: false }),
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {
        
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            // setState của mảng cược => render lại giao diện
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;

            return { ...state }
        }
        case 'END_GAME':
            state.soBanChoi +=1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua rồi !!!';
                    } else {
                        state.soBanThang +=1;
                        state.ketQua = "I am Iron Man, I love you 3000 !!!";
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'Thua rồi !!!';
                    } else {
                        state.soBanThang +=1;
                        state.ketQua = "I am Iron Man, I love you 3000 !!!";
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'Thua rồi !!!';
                    } else {
                        state.soBanThang +=1;
                        state.ketQua = "I am Iron Man, I love you 3000 !!!";
                    }

                default: 
                state.soBanThang +=1;
                state.ketQua = "I am Iron Man, I love you 3000 !!!"
                    return { ...state }
            }
          
            return { ...state }
        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;