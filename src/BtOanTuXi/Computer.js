import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        
        let keyframe = `@keyframes randomItem${Date.now()} {
            0 {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`

        return (
            <div>
                <div className="text-center playerGame">
                    <style>
                        {keyframe}
                    </style>
                <div className = "theThink" style={{position: "relative"}}>
                <img style={{position: "absolute",left:'30%',animation: `randomItem${Date.now()} 0.5s`}, {width:80,height:80}} src={this.props.computer.hinhAnh} />
                </div>
                <div className = "speech-bubble"></div>
                <img style={{width: 150, height: 150}} src="./img/playerComputer.png"></img>
              
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
