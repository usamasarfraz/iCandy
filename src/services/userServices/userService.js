import {store} from '../../store/store';
import endPoint from '../../endPoint';
export default {
    registerUser: (data,navigation) => {
        navigation.navigate('SplashScreen');
        fetch(endPoint+'/user/register/register_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.dataFound){
                navigation.navigate('RegisterScreen');
                alert('Email Already Registered.');
            }
            else if(!resp.dataFound && data){
                navigation.navigate('DashboardScreen');
            }
            else{
                navigation.navigate('RegisterScreen');
                alert('Please Signup Again Later.');
            }
        }).catch((err)=>{
            console.log(err);
        })
    },
    loginUser: (data,navigation) => {
        navigation.navigate('SplashScreen');
        fetch(endPoint+'/user/login/login_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.dataFound){
                navigation.navigate('DashboardScreen');
            }
            else{
                navigation.navigate('LoginScreen');
                alert('Invalid Username and Password Combination.');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
}