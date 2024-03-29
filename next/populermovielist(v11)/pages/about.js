import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/layout"

const About =  () => {
    return(
        <div>
            <Head>
                <title>Burası Hakkımızda</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="apps">
            <Layout></Layout>
            selam burası hakkımızda
            <Link href="/">Geri DÖn</Link>
            <style jsx>{`
             div {
                background-color:#000;
                color:white;
                text-decoration:none
             }
            `}</style>
            </div>
        </div>
    )
}

export default About