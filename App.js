import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import Contact from './src/components/Contact'
import About from './src/components/About'
import Error from './src/components/Error'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'



const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const appRoutes = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>

    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)