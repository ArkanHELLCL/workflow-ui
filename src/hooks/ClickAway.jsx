import { useEffect, useRef} from "react";
export function ClickAway(setOpen){    
    const ref = useRef(null);

    const handleHideDropdown = (event) => {        
        if (event.key === "Escape") {
            setOpen(false);
        }
    };
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {            
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });    
    return {ref};
}
