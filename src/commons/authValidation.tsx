import Snackbar from "react-native-snackbar";
import { User } from "../screens/navigator/StackNavigator";
import { LoginForm } from "../screens/HomeScreen";
import { RegisterForm } from "../screens/RegistroScreen";

export const hasErrorFormLogin = (form: LoginForm) => {
    return form.username == '' || form.password == ''
}

export const hasErrorFormRegister = (form: RegisterForm) => {
    return form.name == '' || form.lastName == '' || form.ci == '' || form.cellphone == '' || form.address == '' || form.email=='' || form.username == '' || form.password == '' || form.confirmPass == ''
}

export const verifyExistUser = (user: User[], form: LoginForm) => {
    return user.filter(user => user.username == form.username)[0];
}

//Función para el snackBar reutilizable
export const showSnackBar=(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: background,
        textColor: 'white'
    });
}

//Función para generar los nuevos id de los usuarios
export const getIdNewUser=(users:User[])=>{
    const getIdUser=users.map(user=>user.id);
    return Math.max(...getIdUser)+1;
}