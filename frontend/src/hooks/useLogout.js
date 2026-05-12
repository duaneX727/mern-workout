import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const {dispatch} = useAuthContext();
  const logout = () => {
    // Remove token from local storage
    localStorage.removeItem('user');
    // Update the auth context
    dispatch({type: 'LOGOUT'});
  }
  return {logout}   
}