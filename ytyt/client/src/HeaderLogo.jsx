import myLOGO from '/firstLogo.jpg'
import './HeaderLogo.css'
function HeaderLogo(){

    return(
        <>
        <div className='headContainer'>
          
            <span className="top-name">Quality</span>
            <span className="top-name">Plateform</span>
            <span className="top-name">Images</span>
            <img className='headingLogo' src={myLOGO}  alt="MYLOGO" /> 
            <span className="top-name">Quality</span>
            <span className="top-name">Plateform</span>
            <span className="top-name">Images</span>
      </div>
        </>
    )
}

export default HeaderLogo