import React from 'react'
import {connect} from 'react-redux';

const Badge = ({Data}) => {
    return (
        <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" class="btn btn-primary position-relative">
            Total Data
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {Data.length}
            </span>
            </button>
            </center>
        </div>
    )
}
const mapStateToProps = state => ({
    Data : state
})
export default connect(mapStateToProps)(Badge);
