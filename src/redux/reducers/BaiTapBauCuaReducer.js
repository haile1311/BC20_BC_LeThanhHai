const initialState = {
    danhSachCuoc: [
        { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 }
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'ga', hinhAnh: './img/ga.png' },
        { ma: 'bau', hinhAnh: './img/bau.png' },
        { ma: 'ca', hinhAnh: './img/ca.png' }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_BAU_CUA': {
            // tìm trong ds cược => qc nào đc click sẽ tăng/ giảm điểm
            const danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
            if (index != -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate;
            return { ...state }
        }

        case 'PLAY_GAME_BAU_CUA': {
            const mangXucXacNgauNhien = [];

            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // cập nhật lại mảng xx
            state.mangXucXac = mangXucXacNgauNhien;

            // xử lý tăng điểm thưởng
            mangXucXacNgauNhien.forEach((xucXacNN, index) => {
                let indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                }
            })

            // xử lý hoàn tiền
            state.danhSachCuoc.forEach((qc,index)=>{
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma);
                if(indexXucXacNN !== -1){
                    state.tongDiem += qc.diemCuoc;
                }
            })

            // xử lý làm mới game 
           state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
               return  {...qc,diemCuoc : 0};
            })
            return { ...state }
        }

        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
                return  {...qc,diemCuoc : 0};
             })
             return { ...state }
         }

        default:
            return state

    }
}