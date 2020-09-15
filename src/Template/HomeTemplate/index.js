import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../Component/Header'
import Footer from '../../Component/Foter'
import ScrollMemory from 'react-router-scroll-memory'
export const LayoutHeader = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export const HomeTemplate = ({ Component, ...rest }) => {
    return (
        <Route {...rest} onUpdate={() => window.scrollTo(0, 0)} render={(props) => {
            return (
                <>
                    <ScrollMemory />
                    <LayoutHeader >
                        <Component {...props} />
                    </LayoutHeader>
                </>
            )
        }} />
    )
}