import { FaBookmark } from 'react-icons/fa';
import Bookmarks from '../Bookmarks/Bookmarks';

const Blog = ({blog, handleBookmarksBlogs}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div className="my-10 m-4">
            <img src={cover} alt="" className="w-full mb-5 rounded-lg"/>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={author_img} alt="" className="w-12 h-12"/>
                    <div>
                        <h3> {author}</h3>
                        <p> {posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-between gap-2 items-center'>
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={() =>handleBookmarksBlogs(blog)}><FaBookmark/></button>
                </div>
            </div>
            <h3 className="text-4xl font-bold my-7">{title}</h3>
            <p>{hashtags}</p>
            <button className="text-lg font-semibold text-purple-600 underline">Mark as read</button>
        </div>
    );
};

export default Blog;