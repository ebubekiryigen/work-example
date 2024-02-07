

const List = ({content,todos,set,todo}) => {
    const DeleteHandler = () => {
       set(
        todos.filter((el) => el.id !== todo.id)
       )
    }
    const ComplateHandler = () => {
           set(todos.map((item) => {
            if (item.id === todo.id) {
            return {
               ...item, complated: !item.complated
            }
           }
           return item
           }))
    }
    return (
        <li  className="list-group-item list-group-item-secondary">
            <p onClick={ComplateHandler} style = {{float: "left"}} className={`${todo.complated ? "done" : ""}`}>{content}</p>
            <a onClick={DeleteHandler} className="delete-item float-right" href="#" style={{float: "right"}}>
                <i className="fas fa-times"></i></a>
                </li>
    )
}

export default List