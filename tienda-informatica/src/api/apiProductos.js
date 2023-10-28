
export const getproductos = async () =>{
    return await 
    fetch('http://localhost:3100/api/product') 
    .then(res => res.json())
    .catch(error => console.error(error))
}

// export const createproductos = async (producto) =>{
//     const options = {
//         method: 'POST', 
//         Headers: {"Content-Type": "aplication/json"},
//         body:JSON.stringify(producto)
//     }
//     return await 
//     fetch('http://localhost:3500/producto', options) 
//     .then(res => res.json())
//     .catch(error => console.error(error))
// }

