import axios from '../../axios';
import {React,useRef,useEffect,useState} from 'react'
import './NavPage.css'
import { imageUrl } from '../../constants/constants';


function PageRowPost(props) {
  
  const postersRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault()
    /* postersRef.current.scrollLeft += e.deltaY; */
  };

/*   const handleWindowWheel = (e) => {
    if (e.deltaY === 0) return; // do nothing if no scroll happened
    e.preventDefault();
  };

  const handleWheel = (e) => {
    postersRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWindowWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, []); */


  const [program,setProgram] = useState([])

    useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log('movie: ', response.data.results);
        setProgram(response.data.results)
      })
    },[props.url])

  return (
    <div>
        <div className='shows'>
          <div className="page-contents">
      <h3 className='show-category'>{props.title}</h3>
      
      <div className="poster-container" ref={postersRef} onWheel={handleWheel} >
        
        {
          program.map((obj)=>{
            console.log(obj);
            return(
              <div>
                <img src={`${imageUrl+obj.poster_path}`} alt={props.title+" Poster"} className='show-poster' />
              </div>
            )
          })
        }
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default PageRowPost