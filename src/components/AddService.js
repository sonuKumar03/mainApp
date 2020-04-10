import React from 'react'
import { useState } from 'react';
import {addService} from '../utils/store'
import { connect } from 'react-redux';
const  mapToDispatch = dispatch=>{
    return {
        createService :(service,uid,id)=>{
            dispatch(addService({service,id,uid}));
        }
    }
}

const mapToProps = state =>{
    return {
        uid:state.user.uid,
        id:'OTAI3cYH6Xz8urmcBCRm'
    }
}

let AddService = ({createService,uid,id}) => {
    let serviceName ;
    let serviceType;
    let capacity;
    let cost;
    const [service,setService]=useState({});
    
    const  onSubmit = (event)=>{
       event.preventDefault();
       let s_name  = serviceName.value;
       let s_type = serviceType.value;
       let s_capacity  = capacity.value;
       let s_cost = cost.value;
       let _service  =  Object.assign({},{
           name:s_name,
           type:s_type,
           capacity:s_capacity,
           cost:s_cost
       })
        createService(_service,uid,id); 
    }
    const onChange  =(event)=>{
        if(serviceType.value.localeCompare('two_wheeler')===0){
            document.getElementById('select_icon').className="fas fa-motorcycle"
        }
        if(serviceType.value.localeCompare('four_wheeler')===0){
            document.getElementById('select_icon').className="fas fa-truck"
        }
     
    }
    return (
            <div>
                <div className="title is-4 has-text-centered has-text-white has-background-info">
                    Add Service 
                </div>
            <form className="form">
                <div className="field">
                    <div className="control has-icons-left">
                        <input  className="input is-small" type="text" placeholder="Service Name" ref ={(node)=>serviceName=node}/>
                        <div className="icon is-left">
                            <i className="fas fa-file-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control  has-icons-left">

                    <div className="select is-small">
                       <select ref={(node)=>serviceType=node} onChange={(e)=>onChange(e)}>  
                           <option  value="two_wheeler">Two Wheeler</option>
                           <option  value="four_wheeler">Four Wheeler</option>
                       </select>
                    </div>
                    <div className="icon is-left">
                        <i id="select_icon" className="fas fa-motorcycle"></i>
                    </div>
                    </div>
                </div>
                <div className="field">
                    <div  className="control has-icons-left">
                        <input className="input is-small" type="number" placeholder="cost" ref={(node)=>(cost=node)}/>
                        <div className="icon is-left">
                        <i className="fas fa-rupee-sign"></i>
                    </div>
                    </div>
                   
                </div>
                <div className="field">
                    <div  className="control has-icons-left">
                        <input className="input is-small" type="number" placeholder="capacity" ref={(node)=>(capacity=node)} />
                    <div className="icon is-left">
                    <i className="fas fa-box"> </i>
                    </div>
                    </div>

                </div>
                <div className="field">
                    <div className="control has-text-centered">
                        <button className="button is-success  is-small" type="submit" onClick={(e)=>onSubmit(e)}>Add</button>
                    </div>
                </div>
            </form>
            </div>
    )
}

export default AddService  = connect(mapToDispatch,mapToDispatch)(AddService);
