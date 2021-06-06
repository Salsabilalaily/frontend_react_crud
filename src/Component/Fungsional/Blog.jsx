import React from 'react'
import './CSS/Blog.css';

const Blog=(props)=>{
    return <div className="blog-wrap">
        <img src="http://placeimg.com/640/480/tech" alt=""/>
        <p>{props.tanggal}</p>
        <h1>{props.judul}</h1>
        <p>{props.summary}</p>
    </div>
}
export default Blog;