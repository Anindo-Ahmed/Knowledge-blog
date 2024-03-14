import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarksBlogs, totalReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 max-w-6xl mx-auto">
        
            {
                blogs.map(blog => <Blog
                    key={blog.id} blog={blog}
                    handleBookmarksBlogs={handleBookmarksBlogs}
                    totalReadTime={totalReadTime}></Blog>)
            }

        </div>
    );
};

export default Blogs;