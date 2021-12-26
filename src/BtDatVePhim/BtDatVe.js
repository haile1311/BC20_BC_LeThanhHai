import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinGhe from './ThongTinGhe'
import HangGhe from './HangGhe'
import danhSachGhe from './danhSachGhe.json'


export default class BtDatVe extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index)=>{
            return <div key ={index}>
                <HangGhe hangGhe={hangGhe}  soHangGhe = {index} />
            </div>
        })
    }



    render() {
        return (
            <div className="bookingMovie" style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ positon: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className='display-4 text-warning'>Đặt vé xem phim CyberLearn</div>
                                <div className='mt-3 text-light' style={{ fontSize: "25px" }}>Màn hình</div>
                                <div className='mt-2' style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <div className='screen ml-5'>
                                </div>
                                {this.renderHangGhe()}
                                </div>
                               
                            </div>
                            <div className='col-4'>
                            <div style={{fontSize: "35px"}} className='text-light mt-2'>Danh sách ghế chọn</div>
                            <ThongTinGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
