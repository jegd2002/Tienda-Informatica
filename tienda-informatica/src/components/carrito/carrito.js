const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')

const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content


const fragment = document.createDocumentFragment()
let carrito={}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
cards.addEventListener('click', e =>{
    addCarrito(e)
} )

items.addEventListener('click', e =>{
    btnAccion(e)
} )

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e =>{
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')){
        e.target.parentElement
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.i] = {...producto}    
    pintarCarrito()
}
const pintarCarrito = () => {
    items.innerHTML =''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.cantidad
        templateCarrito.querySelectorAll('td')[1].textContent = producto.title
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}
const pintarFooter = () =>{
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`

        return
    }

    const nCantidad =  Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0)
    const nPrecio =  Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () =>{
        carrito = {}
        pintarCarrito()
    })
    
}