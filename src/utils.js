import { db } from "./firebase";
import { addDoc, collection, getDocs, query, where  } from "firebase/firestore";



export const getProducts = () => {
    const productsCollection = collection(db, "products");
    return getDocs(productsCollection)
        .then((respuesta)=> {
          //preguntar si se puede achicar estas 2 lineas en 1 sola encadenando el map directamente al respuesta.docs
            const array_de_documentos = respuesta.docs
            const resultado = array_de_documentos.map((documento) => {
                const id = documento.id
                const data = documento.data()
                data.id = id
                return data
            })  
            return resultado
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductsByCategory = (category) => {
    const productsCollection = collection(db, "products");
    const filtro = query(productsCollection, where)("category", "==", category)
    getDocs(filtro)
        .then((respuesta)=> {
            const array_de_documentos = respuesta.docs
            const resultado = array_de_documentos.map((documento) => {
                const id = documento.id
                const data = documento.data()
                data.id = id
                return data
            })
            return resultado
        })
        .catch((error) =>{
            console.log(error)
        })    
}

/*
export const getProductById = (id) => {
    const productsCollection = collection(db, "products");
    const filtroId = query(productsCollection, where("id", "==", id))
    return getDocs(filtroId)
        .then((respuesta) => {
            const array_de_documentos_id = respuesta.docs
            const resultado = array_de_documentos_id.map((documento) => {
                const id = documento.id
                const data = documento.data()
                data.id = id
                return data
            })
            return resultado
        })
        .catch((error) => {
            console.log(error)
        })

}

console.log(getProductById())
*/


//esto es lo que el profe dejo como maqueta del guardado de las ventas en la db hay que meterle mano para que quede
export const crearVenta = (venta) => {
    console.log("creando una venta...")
    const ventasCollection = collection(db, "ventas")
        .then((respuesta) => {
          return respuesta.id  
        })
        .catch((error) => {
            console.log(error)
        })
}

