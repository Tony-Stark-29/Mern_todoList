import { useAuthenticationContext } from "./useAuthenticationContex";
import { useTodoContext } from "./useTodoContext";

export const useLogout=()=>{

    const {dispatch:authDispatch}=useAuthenticationContext();
    const{dispatch:todoDispatch}=useTodoContext();
    const logout=()=>{

        localStorage.removeItem('user');

        authDispatch({type:'LOGOUT'});
        todoDispatch({type:'REMOVE'});


    }

    return {logout};

}