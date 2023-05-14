import { getProductListByCategoryId } from "../asyncMock";
import {ItemList} from "../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const CategoryItemListContainer = () => {
    const [estado, setEstado] = useState([])
    const params = useParams()

    useEffect(() => {
        getProductListByCategoryId()
            .then((resultado) => {
                setEstado(resultado)
            })
    }, [params.id])

    return (
        <div>
            <ItemList products={estado} />
        </div>
    )
}

export default CategoryItemListContainer;

