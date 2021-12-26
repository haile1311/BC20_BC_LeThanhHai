import React, { Component } from 'react'
import "./oantuxi.css"
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import {connect} from 'react-redux'

class Oantuxi extends Component {
    render() {



        return (
            <div className="gameOantuxi">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQua />
                        <button onClick={()=>{this.props.playGame()}} className="btn btn-success p-2 display-4 mt-2">Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            // hàm lặp
            let randomComputerItem = setInterval(()=>{
            dispatch ({
                type: 'RAN_DOM'
            })
            count ++;
            if(count > 10){
                clearInterval(randomComputerItem);
                dispatch({
                    type: 'END_GAME',
                })
            }
        },100)
        }
    }
}

export default connect(null,mapDispatchToProps)(Oantuxi)