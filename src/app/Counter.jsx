import {increment, decrement, incrementby} from "./action"
import {connect} from 'react-redux';

function Counter({count,inc,dec,incby}) {

   
    return(
        <div style={{textAlign:"center",color:"purple"}}>
            <h1>Name : {count.value}</h1>
            <button style={{color:"red",marginLeft:"40px",padding:"5px 20px" }} onClick={()=>inc()}>Increment</button>
            <button style={{color:"red",marginLeft:"40px",padding:"5px 20px" }} onClick={()=>dec()}>Decrement</button>
            <button style={{color:"red",marginLeft:"40px",padding:"5px 20px" }} onClick={()=>incby()}>Increment by(5)</button>
          
        </div>
    )
} 

const mapStateToProps = (state)=>({count:state})

const mapDispatchToProps = (dispatch)=>{
    return{
        inc:()=>dispatch(increment()),
        dec:()=>dispatch(decrement()),
        incby:()=>dispatch(incrementby(5)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)