import Eth from "../Images/icon-ethereum.svg";
import Clock from "../Images/icon-clock.svg";
import Avatar from "../Images/image-avatar.png";

function DetailsContainer() {
     return (
          <>
               <div className="details-container">
                    <div className="upper-details">
                         <h1 className="main-title">Equilibrium #3429</h1>
                         <p className="main-details">
                              Our Equilibrium collection promotes balance and
                              calm.
                         </p>
                         <div className="inner-upper">
                              <span className="eth-cont">
                                   <img src={Eth} alt="Ethereum-icon" />
                                   0.041 ETH
                              </span>
                              <span className="clock-cont">
                                   <img src={Clock} alt="Clock-icon" />3 days
                                   left
                              </span>
                         </div>
                    </div>
                    <div className="under-details">
                         <div className="avatar-container">
                              <img src={Avatar} alt="Avatar" />
                         </div>
                         <p className="avatar-exp">Creation of <b>Jules Wyvern</b></p>
                    </div>
               </div>
          </>
     );
}

export default DetailsContainer;
