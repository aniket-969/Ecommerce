import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  shopCart:[] ,
};

export const cartSlice = createSlice({
  name: "cart", 
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            amount: 1,
            img: productId.thumbnail,
            totalPrice: productId.price,
            title: productId.title,
            description: productId.description,
            category: productId.category,
            rating: productId.rating,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },

    removeCart: (state, action) => {
      state.cart.filter((item) => item.id !== action.payload);
    },

    shopToCart: (state, action) => {
      const newItem = action.payload
      
      if (!state.shopCart.some(item => item === newItem)) {
        state.shopCart.push(newItem);
      }
        
    },


    removesingleItem:(state,action)=>{
      const productId = action.payload;
      
     try {
       const exist = state.cart.find((product) => product.id === productId.id);
       if(exist && exist.amount>0){
         exist.amount-=1
       }
     } catch (error) {
      console.log(error);
      
     }

    }
  },
});


export const { addToCart, removeCart,removesingleItem,shopToCart } = cartSlice.actions;

export default cartSlice.reducer;
