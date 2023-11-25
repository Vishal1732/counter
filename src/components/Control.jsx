import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { GrPowerReset } from "react-icons/gr";

const Control =()=>{

  const dispatch=useDispatch();
   const inputElement  =useRef();

  const handleIncrement=()=>{
    dispatch({type: 'INCREMENT'});

  }
  const handleDecrement=()=>{
   dispatch({type: 'DECREMENT'});
  }
  const handleReset=()=>{
    dispatch({type: 'RESET'});
   }
  
  const handleAdd=()=>{
 dispatch({type: 'ADD', payload:{
  num: inputElement.current.value
 }})
 inputElement.current.value="";
  }
  const handleSubtract=()=>{
    dispatch({type: 'SUBTRACT', payload:{
     num: inputElement.current.value
    }})
    inputElement.current.value="";
     }

  return ( <>
 <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <button type="button" className="btn btn-primary" onClick={handleIncrement}><FaPlus /></button>
  <button type="button" className="btn btn-success" onClick={handleDecrement}><FaMinus />
</button>
</div>
<div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
 <input className="number-input" type="text" placeholder="Enter number" ref={inputElement} />
  <button type="button" className="btn btn-info " onClick={handleAdd}>ADD<FaPlus />
</button>
<button type="button" className="btn btn-danger" onClick={handleSubtract}>subtract<FaMinus />
</button>
</div>
<button type="button" className="reset-btn" onClick={handleReset}><GrPowerReset /></button>
</>
  )

}
export default Control;