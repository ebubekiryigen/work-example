import Link from "next/link";


export default function Populer({movs}){
    return(
        <div className='movie'>
        {movs.results.map(item=>(
            
            <div className="movie-detail">
              <Link href={`/film/${item.id}`}>
              <h4>{item.title}</h4>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} />
              </Link>
            </div>
          
          ))}
        </div>
    )
}