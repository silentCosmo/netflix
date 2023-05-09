import React from 'react'
import '../Components/NavPage/NavPage.css'
import PageRowPost from '../Components/NavPage/PageRowPost'
import { latest_tv, popular_tv, rated_movies, rated_tv, trending_movies, upcoming_movies, sci_tv, sci_fi } from '../urls'

function NavPage(props) {
  return (
    <div className="container">
      
      <h4 className='page-name'>{props.headline} &gt;</h4>
     {console.log(props.Movie)}
      <PageRowPost title = "Trending" url = {props.Movie ? trending_movies : latest_tv} />
      <PageRowPost title = {props.Movie ? "New Releases": "Most Popular"} url = {props.Movie ? upcoming_movies : popular_tv} />
      <PageRowPost title = "Top Rated" url = {props.Movie ? rated_movies: rated_tv}/>
      {/* <PageRowPost title = "Most Popular" url={props.Movie ? popular_movies : today_tv} /> */}
      <PageRowPost title = "Sci-Fi & Fantasy" url={props.Movie ? sci_fi : sci_tv}/>
      
    </div>
  )
}

export default NavPage