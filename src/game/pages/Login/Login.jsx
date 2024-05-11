import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import logo from '../../../assets/logo1.png';
import vid from '../../../assets/bur4.mp4';
import "./LoginStyles.css";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const onHandleButtonLogin = async () => {
    await auth.loginWithGoogle()
      .then((res) => navigate('/Level1'))
      .catch((error) => console.error(error))
  }

  return (
    <div className="bg-slate-800 flex justify-center items-center h-screen overflow-hidden">
      <div className="w-1/2 h-screen hidden lg:block bg-gray-300 ">
        <video loop autoPlay muted>
          <source src={vid} className="scale-125" type="video/mp4" />
        </video>

      </div>
      <div className="lg:p-36 md:p-52 sm: p-8 w-full lg:w-1/2">
        <div>
          <img
            src={logo}
            alt="Placeholder Image"
            className="w-1/2 h-full"
          />
        </div>
        <div className="form mt-3">
          <p>
            Welcome,<span>sign in to playing</span>
          </p>
          <div onClick={onHandleButtonLogin} className="mt-4">
              <button type="button" className="oauthButton">
                <svg className = "icon mr-2 -ml-1 w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  <path d="M1 1h22v22H1z" fill="none"></path>
                </svg>
                Sign up with Google<div></div>
              </button>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="https://github.com/SilkenBread/PI-Game3D-R3F" className="hover:underline">Review the code 🚀</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;