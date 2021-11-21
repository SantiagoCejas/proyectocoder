import React, {useState, useEffect} from 'react'

const Loader = () => {

    const [loading, setLoading] = useState (true);

    useEffect(() => {
       const cargando = async () =>{
         const promise = new Promise((resolve, reject)=>{
           resolve(false);
         });
         const value = await promise.then((res)=>res);
         setTimeOut(()=>{
           setLoading(value)
         }, 3000)
       }
       cargando ()
      },[])
  
    return (

            <div>
      {
        loading ? (
<>
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
</>
        ):(
          <>
          <h1> asfafsf</h1>
          </>
        )
      }
</div>
    )
}

export default Loader
