import React from 'react';
import {Route} from 'react-router-dom'

const layoutHeader = (props)=>{
   return (
       <>

       </>
   )
}
export const HomeTemplate = ({Component,...rest})=>{
    return (
        <Route {...rest} render={(props)=>{
            return(
                <layoutHeader>
                    <Component {...props} />
                </layoutHeader>
            )
        }}
        
        
        />
    )
}