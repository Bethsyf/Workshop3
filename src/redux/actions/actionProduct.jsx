import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { DB } from "../../firebase/FirebaseConfig"
import { typesProduct } from "../types/typesProduct"

export const addProductAsync = (product) => {
  return (dispath) => {

    addDoc(collection(DB, "ProductsDB"), product)
      .then(resp => {
        dispath(addProductSync(product))

      })
      .catch(error => {
        console.warn(error)
      })

  }
}


export const addProductSync = (product) => {
  return {
    type: typesProduct.add,
    payload: product
  }
}



//---- listar peliculas---//
export const listProductAsync = () => {
  return async (dispath) => {
    const collectionListar = await getDocs(collection(DB, "ProductsDB"))
    console.log(collectionListar)
    const querySearch = query(collection(DB, "ProductsDB"))
    const queryListar = await getDocs(querySearch)
    console.log(queryListar)
    const products = []
    collectionListar.forEach(lista => {
      products.push({
        ...lista.data()
      })
    })
    dispath(listProductSync(products))
  }
}

export const listProductSync = (product) => {
  return {
    type: typesProduct.list,
    payload: product
  }
}

//--- Buscar-----//
export const searchProductAsync = (nombreBuscar) => {
	return async (dispatch) => {
		const collectionListar = collection(DB, "ProductsDB")
		const q2 = query(collectionListar, where('nombre', '>=', nombreBuscar), where('nombre', '<=', nombreBuscar + '~'))
		const datosQ = await getDocs(q2)
		console.log(datosQ)
		const Product = []
		datosQ.forEach((docu => {
			Product.push(docu.data())
		}))
		dispatch(searchProductSync(Product))
	}
}
export const searchProductSync = (prod) => {
	return {
		type: typesProduct.search,
		payload: prod
	}
}

export const deletProductAsync = (nombre) => {
  return async (dispatch) => {
      const collectionListar = collection(DB, "ProductsDB")
      const q = query(collectionListar, where('nombre', '==', nombre))
      const datosQ = await getDocs(q)
      console.log(datosQ)
      datosQ.forEach(docu => {
          deleteDoc(doc(DB, 'ProductsDB', docu.id))
      })
      dispatch(deletProductSync(nombre))           
  }

}

export const deletProductSync = (nombre) => {
  return {
      type: typesProduct.delete,
      payload: nombre
  }

}