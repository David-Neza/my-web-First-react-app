import { useParams } from "react-router-dom";
import App from "./App";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogs } = fetch('http://localhost:8000/blogs')

     return(
         <div className="blog-details">
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author }</p>
                    <div> {blog.body }</div>
                </article>
            )}  
         </div>
     )   
}

export default BlogDetails