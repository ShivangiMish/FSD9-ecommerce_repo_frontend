
import {useState } from 'react'; 
import BaseLogin from '../BaseLogin/BaseLogin';
 

function Login() {
  const [isSeller, setIsSeller] = useState(false);
   
  return (
    <>
    <BaseLogin isSeller={isSeller}></BaseLogin>
     </>
  );
}
 

export default Login;
