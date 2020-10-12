export const UpdateObj = (oldObj,NewObj) =>{
    return{
        ...oldObj,
        ...NewObj
    }
}
