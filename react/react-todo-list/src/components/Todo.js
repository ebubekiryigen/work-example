import List from './List'
const Todo = ({dataTodos,setdataTodos,filter}) => {
    
    const allClear = () => {
        if (window.confirm('Cidden tüm görevlerini silecekmisin bundan eminmisin ?')) {
        setdataTodos([])
        }
        else {
            alert("ohhh bee Bi an herşey bitti zannettim")
        }
    }
     
    return(
        <div className="card mt-3">
            <div className="card-header">
                Görev Listesi

                            <a onClick={allClear} id="btnDeleteAll" href="#" className="btn btn-outline-danger btn-sm delete-all float-right" style={{float: "right"}}>
                            Hepsini Sil
                        </a>

               
            </div>
            <ul id="task-list" className="list-group">
                {filter.map((todo) => {
                    return (
                        <List content={todo.content} key={todo.id} todos={dataTodos} set={setdataTodos} todo={todo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo