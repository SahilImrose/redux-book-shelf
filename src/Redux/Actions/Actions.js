export const AddToReadingList = (payLoad) =>{
   return{
    type:'READING_LIST',
    payLoad,
   }
}

export const RemoveFromReadingList = (payLoad) =>{
    return{
        type:'REMOVE_READING_LIST',
        payLoad,
    }
}

export const AddToFinishList = (payLoad) =>{
    return{
     type:'FINISH_LIST',
     payLoad,
    }
 }