import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Header from "../components/header"



export default function Blog(){
    return(
        <>
        <Helmet>
            <title>Blog</title>
        </Helmet>
        <Header />

        <a href="/blog/1">blog 1</a><br></br>
        <a href="/blog/2">blog 2</a><br></br>
        Burası Blog sayfası sabit yeri
        <Outlet />
        </>
    )
}