import "./Banner.css"
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from "../../constants/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results[3])
            setMovie(response.data.results[Math.floor((Math.random() * 20) + 0)])

        }).catch(err => {
            alert("Axios banner error")
        })
    }, [])

    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <h1 className="title">{movie ? movie.name : ""}</h1>
                <div className="banner-buttons">
                    <button className="button">
                    <i class="fa-solid fa-play"></i>
                       &nbsp; Play</button>
                    
                    <button className="button">
                    <i class="fa-solid fa-plus"></i>
                       &nbsp; My List </button>
                </div>
                <h1 className="description">
                    {movie ? movie.overview : ""}
                </h1>
            </div>
            <div className="bottom-fade"></div>
        </div>
    )
}

export default Banner