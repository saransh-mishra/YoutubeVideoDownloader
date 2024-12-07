import './ConvertereBox.css'
import myIcon1  from '/find.png';
import SearchIcon from './AVSwitch';
import DownloadButton from './DownloadButton';
import AVSwitch from './AVSwitch';
import SearchAndButton from './SearchAndButton'
import FetchVideoDetails from './FetchVideoDetails';

 function ConverterBox(){
    
    return(
        <>
        <div className="box-container">
            <div className="inner-container">
                {/* <SearchAndButton/>   */}
                <FetchVideoDetails/>
                <DownloadButton/>
            </div>
              
        </div>
        </>
    )
}
export default ConverterBox