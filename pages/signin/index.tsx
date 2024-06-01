import { useState } from "react";

import styles from '../../styles/Signin.module.css'
import Swal from "sweetalert2";
import { userLogin } from "../api/login";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/userSlice";
import { useRouter } from "next/router";



export default function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = async(event: any) => {
        event.preventDefault()
        try {
            let body = {
              username: username,
              password: password,
            };
          
            userLogin(body).then((response) => {
                if(response?.status){
                    dispatch(setToken(response?.data?.jwt))
                    router.push('/dashboard')
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: 'Please check your username and password.',
                      });

                      setUsername('')
                      setPassword('')

                }
            });
          } 
          catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your username and password.',
              });
        }

    }

    return (
            <form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.container}>
                    <div  className={styles.input}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                    
                    <div className={styles.input}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div  className={styles.input}>
                    <button type="submit">login</button>

                    </div>
                   

                </div>

            </form>
    )

}