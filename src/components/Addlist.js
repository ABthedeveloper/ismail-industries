

const Addlist = (props)=> {


    const deleteitem=(id)=>{
        

        props.removeList(id)
        
    }

    
    const renderProductionSummary = props.summary.map((x,index)=>{
       
        return(
            <div key={index}>
               
                <div>{x.load}</div>
                <div>{x.carton}</div>
                <div>{x.physical}</div>
              
                <button  onClick={()=>deleteitem(index)}>Delete</button>
            </div>
        );
    })

     
    return(
        <div>
            <div>{renderProductionSummary}</div>
        </div>
    );
}

export default Addlist;