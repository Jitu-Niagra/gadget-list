import React, { Component } from 'react'
import './Gadget.scss'

export class Gadget extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showInfo:false
        }
    }
    handleInfo=()=>{
        this.setState(
            {
                showInfo:!this.state.showInfo
            }
        )
    }
    
    render() {
        const {img,name,info,id}=this.props.gadget
        const {removeGadget}=this.props
        return (
            <div className="card">
                <img src={img} alt="Gadget"/>
                <div className="card-body">
                    <h1>{name}</h1>
                    <span>Info </span><button className="info" onClick={this.handleInfo}>here</button>
                    {this.state.showInfo && <p>{info}</p>}
                    <span ><button className="close" onClick={()=>{removeGadget(id)}}>Clear</button></span>
                </div>
                
            </div>
        )
    }
}

export default Gadget
