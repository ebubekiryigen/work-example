
export default function Button({item,key,onClick}){

   

    return(
        <button onClick={onClick} key={key} >{item.title}</button>
    )
}