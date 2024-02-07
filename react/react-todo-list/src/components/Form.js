const Form = ({setTextInput,textInput,dataTodos,setdataTodos,setStat}) => {
    const TextHnadler = (e) => {
        setTextInput(e.target.value)
    }
    const SelectHnadler = (e) => {
        setStat(e.target.value)
    }
    const SubmitButtonHandler = () => {
        if(textInput !== "") {
        setdataTodos([
            ...dataTodos,
            {id:Math.random(),content:textInput,complated:false}
        ])
        setTextInput("")
    } else {
        alert("Alanı boş bırakma birader")
    }
    }
    return(
        <form id="addTaskForm">
        <div className="input-group mt-3">    
        <input name="taskName" type="text" className="form-control" placeholder="Yeni Görevi Buraya Gir" aria-describedby="btnAddNewTask" value={textInput} onChange={TextHnadler} />
        <div className="input-group-append">
            <button className="btn btn-primary" type="submit" id="btnAddNewTask" onClick={SubmitButtonHandler}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    </div> 
    <select className="form-select" aria-label="Default select example" onChange={SelectHnadler}>
        <option value="3" >Hepsi</option>
        <option value="1">Tamamlanmış</option>
        <option value="2">Tamamlanmamış</option>
    </select>
    </form>
    )
}

export default Form