import Head from "next/head"
import Layout from '../../components/layout';
export default function Film({movie}) {
    console.log(movie)
    return(
        <div>
            <Head><title>{movie.title}</title></Head>
            <Layout></Layout>
            <div className="containers">
            <div className="movie-container">
                <div className="image"><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} /></div>
                <div className="detail">
                    <h3>Film Detayları</h3>
                    <ul>
                        <li><b>Yayın Tarihi :</b> {movie.release_date}</li>
                        <li><b>Adı :</b> {movie.title}</li>
                        <li><b>Açıklama :</b> {movie.overview}</li>
                        <li><b>Film Süresi :</b> {movie.runtime} dk</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=9eeb0b846ac072f13656e30b7b61de7e&language=tr-TR`)
    const movie   = await request.json()

    return{
        props: {
            movie
        }
    }
}