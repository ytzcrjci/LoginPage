import './illustration.scss';

// import '../images/illustration.png'

const Illustration = () => {
 return (
  <div className="illustration">
   <div className="illustration-image">
    <img src="images/illustration.png" alt="illustration"></img>
   </div>
   <img src="images/Vector.png" alt="illustration" className="absolute"></img>
  </div>
 );
};
export default Illustration;
