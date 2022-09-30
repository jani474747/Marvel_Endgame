import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddData} from './actions';
import { RemoveData } from './actions';

const Card = ({Data,AddData,RemoveData}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await AddData({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Data" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit" class="btn btn-success">
                        Add 
                        </button> 
                    </form>
                    <br />
                    {Data.map(item => {
                        return(
                            <div className="item"  >{item.name} 
                            <span onClick={()=> RemoveData(item.name)} class="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) =>({
    Data: state
})

export default connect(mapStateToProps,{AddData,RemoveData})(Card);
