import employee from "../Services/Employee";

//getEmployee
const startGetEmployee = () => {return {
    type: 'START_GET_EMPLOYEE', ready: false
  }}
    
  const completeGetEmployee = (data) => {return {
    type: 'COMPLETE_GET_EMPLOYEE', data
  }}
  
  const errorGetEmployee = (err) => {
    return {
      type: 'ERROR_GET_EMPLOYEE', err
    }
  }
  
/**getEmployee */
export const getEmployee = () => {
    return (dispatch, getState) => {
        dispatch(startGetEmployee())
        employee.get('employees')
          .then((response)=>{
            console.log(response.data)
           if(response.data){
            dispatch(completeGetEmployee(response.data));
           }
          })
          .catch((err)=>{
            dispatch(errorGetEmployee(err))
          })
    }
}
