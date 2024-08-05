import { BsPlayFill } from "react-icons/bs";
import "./style.css";
import { FaPlus } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
// import CarouselComponent from "../Courser/CarouselComponent";
import { useState , useEffect} from "react"; 
import SlidingListComponent from "../SlidingList/SlidingListComponent";

const Homepage = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://repo-tech2edge.github.io/tasks/sample.json');
        const data = await response.json();
        setCarouselItems(data.characters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const carouselItems = [
  //   {
  //     image: 'https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/sartaj-singh.jpg',
  //     label: 'First slide label',
  //     description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  //   },
  //   {
  //     image: 'https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/ganesh-gaitonde.jpg',
  //     label: 'Second slide label',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   },
  //   {
  //     image: 'https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/anjali-mathur.jpg',
  //     label: 'Third slide label',
  //     description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  //   }
  // ];

  return (
    <>
      <div className="maincomponent">
        <Navbar />
        <div className="textContainer">
          <div>
            <h1 className="tagname">MIRZAPUR</h1>
            <h6 className="seasonname">SEASON 1</h6>
            <p>98% Match &#8226; Episode 3</p>
          </div>

          <div className="buttoncomponent">
            <button className="resumebtn">
              <BsPlayFill size={20} /> Resume
            </button>
            <button className="mylistbtn">
              <FaPlus size={20} /> My List
            </button>
          </div>
        </div>

        {/* <div className="App">
          <CarouselComponent items={carouselItems} />
        </div> */}
        <SlidingListComponent items={carouselItems} />
      </div>
      
    </>
  );
};

export default Homepage;
