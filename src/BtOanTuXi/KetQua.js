import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div>
               <div className = "display-4 text-warning">{this.props.ketQua}</div>
               < div className = "display-6 text-success">Số bàn thắng: {this.props.soBanThang}<span className="text-warning"></span></div>
               < div className = "display-6 text-success">Tổng số bàn chơi: {this.props.soBanChoi}<span className="text-warning"></span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanTuXiReducer.ketQua,
        soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQua)