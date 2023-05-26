import { db } from "./firebase";
import {collection, getDocs, query, where, doc, getDoc  } from "firebase/firestore";



export const getProducts = () => {
    const productsCollection = collection(db, "products");
    return getDocs(productsCollection)
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
        .catch((error) => {
            console.log(error)
        })
}

export const getProductsByCategory = (category) => {
    const productsCollection = collection(db, "products");
    const filtro = query(productsCollection, where("category", "==", category))
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

export const getProductById = (productId) => {
    const docRef = doc(db, "products", productId);

 return getDoc(docRef)

  .then((respuesta) => {

   const productData = respuesta.data();

   const producto = {

    id: respuesta.id,

    ...productData,

   };

   return producto;

  })

  .catch((error) => {

   console.error(error);

  });
}



export function enviarVentaAFirebase(venta) {
    return db.collection('ventas')
      .add(venta)
      .then((docRef) => {
        console.log('La venta se ha enviado correctamente a Firebase');
        return docRef.id;
      })
      .catch((error) => {
        console.error('Error al enviar la venta a Firebase:', error);
        return null;
      });
  }







