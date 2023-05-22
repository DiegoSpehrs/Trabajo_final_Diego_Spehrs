import Item from "../Item/Item";


export const   ItemList = ({products}) => {
  
    return (
       <div className="products-list">
         {products.map(prod => <Item key={prod.id} {...prod}/>)}
       </div>  
       
    )
}

export default ItemList;