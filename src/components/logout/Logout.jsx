import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import "./stylesLogout.css"

export default function Logout(props) {
    const auth = useAuth()
    const navigate = useNavigate()

    const onHandleButtonLogout = async () => {
        await auth.logout()
            .then((res) => navigate("/"))
            .catch((error) => console.error(error))
    }
    return (
        <>
            <div className="button-logout">
                <button onClick={onHandleButtonLogout} className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Logout </button>
            </div>

            {/* <NavLink to={props.next}>
                <div className="button-next-lvl">
                    <button className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Next </button>
                </div>
            </NavLink>

            <NavLink to={props.prev}>
                <div className="button-last-lvl">
                    <button className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Previous </button>
                </div>
            </NavLink> */}
        </>
    )
}