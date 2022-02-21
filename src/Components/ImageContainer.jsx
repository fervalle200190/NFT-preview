import Icon from '../Images/icon-view.svg'
import Nft from '../Images/image-equilibrium.jpg'

function ImageContainer() {
     return (
          <>
               <div className="image-container">
                    <img src={Nft} alt="nft" className="nft-image" />
                    <div className="inner-image-container">
                         <img src={Icon} alt="icon-view" />
                    </div>
               </div>
          </>
     );
}

export default ImageContainer;
