import React, { useEffect, useState } from "react";

function Notices(){
    const [notices, setNotices] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8080/notices")
            .then(resp => resp.text())
            .then(data => setNotices(data))
            .catch(error => console.log("some issue with backend connectivity."))
    },[])

    return(
        <div>Notice Board<br />
            {notices}
        </div>
        
    )
}

export default Notices;