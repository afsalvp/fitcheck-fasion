// const PromoSectionMain = (props) => {
//   const styles = {
//     pageHeader: {
//       backgroundImage: 'url(' + props.pageHeaderBgImg + ')',
//       minHeight: props.pageHeaderMinVh,
//     },
//   }
//   return(
//     <section className="mb-8">
//     <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
//       <span  className="mask bg-black opacity-6"></span>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 col-sm-9 text-center mx-auto">
//             <h1 className="text-white mb-4">{props.title}</h1>
//             <p className="lead text-white mb-sm-6 mb-4">{props.full_description}</p>
//             <button className="btn btn-white btn-lg">Explore New Collection</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

//   export default PromoSectionMain;import React from 'react';
import React from 'react';
import Pic3 from '../../Images/Pic3.jpg';
import Pic2 from '../../Images/Pic2.jpg';
import Pic1 from '../../Images/Pic1.jpg';
import HomeButton from './HomeButton';
import './PromoSectionMainStyle.css'; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_BACKEND_URL ,MediaURL} from "../../settings";

const PromoSectionMain = (props) => {
  let LandingPageImage =MediaURL+ props.LandingPageImage
  const navigate = useNavigate();
  return (
    <>
    <div className="image-container">
      <img className="d-block w-100" src={LandingPageImage} alt="Second slide" />
      <div className="overlay-container">
        <h1 className='heading1'>Discover the Latest Trends</h1>
        <HomeButton />
      </div>
    </div>
    
    </>
  );
};

export default PromoSectionMain;

