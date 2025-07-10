
const Bar=(props) => {
    return (
        <div className="app-bar" style= {{height:props.datas.length*40}}>
          {props.children}
        </div>
    )
}

export default Bar