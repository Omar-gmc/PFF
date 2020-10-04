import React from 'react'
import TshirtCard from "./TshirtCard/TshirtCard"


 function TshirtList({tshirtList,searchteamName}) {
   
    return (
       <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
          
          
     {tshirtList.filter(el=> el.teamName.toLowerCase().includes(searchteamName.toLowerCase().trim()))
          .map((tshirt,i)=>
          
<TshirtCard tshirt={tshirt} key={i} />
      
        
    )}
    </div>
    )
     }
export default TshirtList;