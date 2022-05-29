import { createSlice } from "@reduxjs/toolkit";
import { sessions } from "../data/sessionData";

export const sessionStore = createSlice({
    name: "sessionStore",
    initialState: { data: sessions },
    reducers: {
      addSession: (state, action) => {
        let temp = [...state.data];
        const payload = action.payload.inputs;
        temp.unshift(payload);
        state.data = temp;
      },
      deleteSession: (state, action) => {
        state.data = state.data.filter((x) => x.id !== action.payload.id);
      },
      addPurchasedSeats:(state,action)=>{
        state.data.forEach((session,index)=>{
          if(session.id===action.payload.session.id){
            console.log("girdi");
            let temp=[...state.data[index].purchasedSeats];
            const payload=action.payload.seats;
            temp.unshift(payload);
            state.data[index].purchasedSeats=temp;
          }
        })

        // let seats=action.payload;
        // state.data.forEach((session)=>{
        //   if(session.id===action.payload.session.id){}
        // })
        // let temp=[...state.data[0].purchasedSeats];
        // temp.push(seats);
        // state.data[0].purchasedSeats=temp;
      }
    },
  });
  
  export const { addSession, deleteSession,addPurchasedSeats } = sessionStore.actions;
  export default sessionStore.reducer;