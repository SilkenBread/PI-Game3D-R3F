import React from "react";
import { LoginForm } from "./LoginForm";
// import Swal from "sweetalert2";
// import Cookies from 'js-cookie';
// import { useNavigate } from "react-router-dom";
// import { rutes } from "../Components/urls"

const Login = () => {
  // const navigate = useNavigate();
  // const handleSubmit = async ({ username, password }) => {
  //   try {
  //     const response = await fetch(rutes.login.url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       // Autenticación exitosa
  //       let data_usuario = await response.json();
  //       console.log(data_usuario);
  //       Cookies.set('102365', data_usuario.token, { expires: 1, path: '/' })
  //       Cookies.set('102360', data_usuario.user.id, { expires: 1, path: '/' })
  //       Cookies.set('102361', data_usuario.user.name, { expires: 1, path: '/' })
        
        
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-end",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });

  //       Toast.fire({
  //         icon: "success",
  //         title: "Has iniciado sesión correctamente.",
  //       });
  //       navigate("../", { replace: true });

        
  //     } else {
  //       // Error en la autenticación
  //       await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
  //     }
  //   } catch (error) {
  //     console.error('Error al iniciar sesión:', error);
  //     await Swal.fire('Error', 'Ocurrió un error al iniciar sesión', 'error');
  //   }
  // };

  return (
    <div>
      <LoginForm  />
    </div>
  );
};

export default Login;