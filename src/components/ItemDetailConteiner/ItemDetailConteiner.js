import {useState, useEffect} from 'react'
import { getProductById } from '../../utils'  
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams  } from 'react-router-dom'




const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({})
   const { id } = useParams()

   useEffect(() => {
      getProductById(id)
        .then(Response => setProduct(Response))
        .catch(error => console.log(error))

        
   }, [id])
  
  
   
  return (
    <div className="ItemDetailConteiner">
       <ItemDetail {...product}/>
    </div>
  )
}


export default ItemDetailConteiner
