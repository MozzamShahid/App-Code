import React, { Children } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default MainLayout
