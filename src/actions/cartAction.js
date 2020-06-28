//add cart action
export const addToCart= (id)=>{
    return{
        type: 'ADD_TO_CART',
        id
    }
}
//remove item action
export const RemoveItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}
//subtract qt action
export const SubQty=(id)=>{
    return{
        type: 'SUB_QUANTITY',
        id
    }
}
//add qt action
export const AddQty=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id
    }
}
