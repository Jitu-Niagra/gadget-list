import React, { Component } from 'react'
import Gadget from './Gadget'
import gadgetData from './GadgetData'
import './GadgetList.scss'

export class GadgetList extends Component {
    constructor(props) {
        super(props)
    
        this.state={
             gadgets:gadgetData
        }
    }
    removeGadget=(id)=>{
        const sortedGadgets=this.state.gadgets.filter(gadget=>gadget.id!==id)
        this.setState({
            gadgets:sortedGadgets
        })
    }
    
    render() {
        const tools=this.state.gadgets.map(gadget=>
            <Gadget 
            key={gadget.id} 
            gadget={gadget}
            removeGadget={this.removeGadget}/>)
        return (
            <div className="gadget">
                {tools}
            </div>
        )
    }
}

export default GadgetList
