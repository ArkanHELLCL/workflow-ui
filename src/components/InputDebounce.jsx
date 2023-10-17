/* eslint-disable react/prop-types */
import { useDebounce } from "../hooks/useDebounce";

export const InputDebounce = ({type, name, classname, placehold, onfocus, onblur, onclick, _id, setFilters, value, setValue}) => {    
    const debouncedRequest = useDebounce(() => {
      // send request to the backend
      // access to latest state here
        setFilters(prevState => ({
            ...prevState,
            stringSearch: value,
            loading: true
        }))        
    });
  
    const onChange = (e) => {
      const value = e.target.value;
      setValue(value);
  
      debouncedRequest();
    };
  
    return <input onChange={onChange} value={value} type={type} name={name} autoComplete='off' className={classname} placeholder={placehold} onFocus={onfocus} onBlur={onblur} onClick={onclick} id={_id}/>;
  }