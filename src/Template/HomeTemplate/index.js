import React from 'react'
import {Route} from 'react-router-dom'
import Header from '../../Component/Header'
import Footer from '../../Component/Foter'

const LayoutHeader = (props)=>{
    return (
        <>
            <Header />
            {props.children}
            <Footer/>
        </>
    )
}
export const HomeTemplate = ({Component,...rest})=>{
    return (
        <Route {...rest} render={(props)=>{
            return(
                <LayoutHeader >
                    <Component {...props}/>
                </LayoutHeader>
            )
        }} />
    )
}