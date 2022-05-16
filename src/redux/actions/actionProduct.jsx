import { addDoc, collection } from "firebase/firestore"
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