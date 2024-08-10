import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const addCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      let product = action.payload
      let findProduct = state.find((item) => item.id === product.id)
      if(findProduct){
        findProduct.quantity += 1
      }else{
        state.push(action.payload)
      }
    },
    removeFromCart: (state,action) => {
     let productId = action.payload
     return state.filter((item) => item.id != productId)
    },
    incrementQuantity: (state, action) => {
      let productId = action.payload
      let findProduct = state.find((item) => item.id === productId)
      if(findProduct){
        findProduct.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      let productId = action.payload
      let findProduct = state.find((item) => item.id === productId)
      if(findProduct && findProduct.quantity > 1){
        findProduct.quantity -= 1
      }
    }
  },
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity } = addCartSlice.actions

export default addCartSlice.reducer