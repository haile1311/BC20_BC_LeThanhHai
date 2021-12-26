import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Player extends Component {
    
    render() {  
        return (
            <div className="text-center playerGame">
                <div className = "theThink">
                <img style={{width:80,height:80}} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh}></img>
                </div>
                <div className = "speech-bubble"></div>
               <img style={{width: 150, height: 150}} src="./img/player.png"></img>
               <div className ="row">
                   {this.props.mangDatCuoc.map((item,index)=>{   
                    let border = {};
                    if(item.datCuoc){
                        border = {border: '3px soid orange'}
                    }

                       return <div className="col-4">
                       <button onClick={()=>this.props.datCuoc(item.ma)} style={border} className="btnItem">
                       <img width={50} height = {50} src={item.hinhAnh}></img>
                       </button>
                       </div>
    })}

               </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) =>{
            dispatch({
                type: "CHON_KEO_BUA_BAO",
                maCuoc,
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Player)