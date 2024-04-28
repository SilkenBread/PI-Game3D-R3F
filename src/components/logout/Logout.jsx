import { NavLink } from "react-router-dom"
import "./stylesLogout.css"

export default function Logout(props) {
    return (
        <>
            <NavLink to='/'>
                <div className="button-logout">
                    <button className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Logout </button>
                </div>
            </NavLink>

            <NavLink to={props.next}>
                <div className="button-next-lvl">
                    <button className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Next </button>
                </div>
            </NavLink>

            <NavLink to={props.prev}>
                <div className="button-last-lvl">
                    <button className="bg-black hover:bg-slate-900 text-white font-semibold rounded-md p-2 m-2"> Previous </button>
                </div>
            </NavLink>
        </>
    )
}