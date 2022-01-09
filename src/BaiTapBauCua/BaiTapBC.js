import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './BaiTapBC.css'

export default function BaiTapBC(props) {
    return (
        <div id="BaiTapBC" className='container-fluid' style={{margin: 0}}>
            <DiemCuoc />

            <div className='row'>
                <div className='col-8'>
                    <DanhSachCuoc />
                </div>
                <div className='col-4'>
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}
