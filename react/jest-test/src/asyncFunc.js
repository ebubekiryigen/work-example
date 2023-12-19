

const fetchData=(callback)=>{
    return new Promise((resolve=> {
          setTimeout(()=>{
            resolve('Merhaba')
          },2500)
    }))
}

module.exports={fetchData}