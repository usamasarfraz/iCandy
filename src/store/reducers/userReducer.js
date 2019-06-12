import userService from '../../services/userServices/userService';
const initialState = {
    
}
const userReducer = (state = initialState,action)=>{
        switch(action.type){
            case 'REGISTER_USER':
            userService.registerUser(action.data,action.navigation);
            return {
                
            };
            case 'LOGIN_USER':
            userService.loginUser(action.data,action.navigation);
            return {
                
            }
            default:
            return state;
        }
}
export default userReducer;