useEffect(() => {
    if(params === estado.category){
        getProductsByCategory(params)
          .then((resultado) => {
            setEstado(resultado)
        })
    }
    else{
        getProducts()
          .then((resultado) => {
            setEstado(resultado);
          })
    }
}, [params.id])

