import { useEffect, useState } from "react";
import MenuLay from "../../layouts/MenuLay";


export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setMenuVisible((prevVisible) => !prevVisible);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return <div className="menu-display">{menuVisible && <MenuLay />}</div>;
}
