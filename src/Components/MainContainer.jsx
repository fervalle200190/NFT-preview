import DetailsContainer from "./DetailsContainer";
import ImageContainer from "./ImageContainer";

function MainContainer() {
     return (
          <>
               <div className="main-container">
                    <ImageContainer />
                    <DetailsContainer />
               </div>
          </>
     );
}

export default MainContainer;
