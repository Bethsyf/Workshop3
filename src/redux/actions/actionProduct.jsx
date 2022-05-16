import {addDoc, collection, getDocs, query } from "firebase/firestore"
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