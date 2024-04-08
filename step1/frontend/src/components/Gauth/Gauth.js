import { GoogleLogin } from '@react-oauth/google';
export default function Gauth(){
    const responseMessage = (response) => {
        console.log(response);
        window.alert("success")
    };
    const errorMessage = (error) => {
        console.log(error);
        window.alert("err")
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
        still in testing phase
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}