import HeaderLogo from "./HeaderLogo"
import './Header.css'
import ConverterBox from "./ConverterBox"
function Header(){

    return(
        <>
        <div className="firstContainer">
            
            <HeaderLogo/>   
           
        </div>
         <ConverterBox/>
        </>
    )

}

export default Header