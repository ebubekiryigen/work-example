

export default function User({data,key}){
    return(
        <div className="user">
                <div className="user-img">
                    <div><img src={data.picture.large} /></div>
                </div>
                <div className="user-text" key={key}>
                    <h3>{data.name.first} {data.name.last}</h3>
                    < p>Email : {data.email}</p>
                    <p>{data.location.city} / {data.location.country}</p>  
                </div>
        </div>
    )
}