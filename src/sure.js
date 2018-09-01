import React from 'react';
//import AddCoder from './addCoder';

// being UI component, function is used rather than class. There is no state in this react component.
const Sure = ({coders}) => {
    
        // props are made available to this child component from root
        
        // coderList stores return value (list of coders) of the map function applied on the props.
        const coderList = coders.map(coder =>{
            if(coder.age<100){
                return (
                    <div className="Sure" key={coder.id}>
                    <div>Name: {coder.name} </div>
                    <div>Age: {coder.age} </div>
                    <div>Belt: {coder.belt} </div>
                    <button> Fire this coder! </button>
                    <hr/><br/>
                    </div>)
            }  
            else {
                return null
            }
        }
    )    
    // render returns the below 'coderlist' which was returned from above map function applied in the props, 'coders'.
    return (<div className="coderlist"> {coderList} </div>)
}
export default Sure