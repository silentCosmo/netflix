import "./RowPost.css"
import React,{useRef, useEffect, useState} from 'react'
import axios from "../../axios"
import { imageUrl } from "../../constants/constants";

function RowPost(props) {

  const postersRef = useRef(null);

  const handleWheel = (e) => {
    postersRef.current.scrollLeft += e.deltaY;
  };
  
  const [tvs,setTvs] = useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log('Originals: ',response.data.results);
      setTvs(response.data.results)
    }).catch(err=>{
      alert("Axios Error!")
    })
  },[props.url])
  



  return (
    <div className={ props.isBig ? "big-show":"shows"}>
    <div className="row">
      <h2 className="category">{props.title}</h2>
      <div ref={postersRef} onWheel={handleWheel} className="posters">

      {
        tvs.map((obj)=>{
          console.log("obj.", obj)
        return(
          <div>
        <img className={props.isBig ? "poster":"smallPoster"} src={`${imageUrl+obj.poster_path}`} alt="Image_Poster" />
        
        {/* <h3 className={props.isSmall?"showNameSmall":"showName"}>{obj.name}{obj.title}</h3> */}
        
        </div>
        )})
      }
      
      </div>

    </div>
    </div>
  )
}

export default RowPost