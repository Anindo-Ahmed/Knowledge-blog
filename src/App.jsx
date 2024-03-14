import { useState } from 'react'
import './App.css'

import Header from './Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bookmark from './components/Bookmark/Bookmark'
import Readtime from './components/Readtime/Readtime'

function App() {

  const [bookmarks, setBookmarks] = useState ([]);
  const [times, setTime] = useState(0);

  const handleBookmarksBlogs = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

const totalReadTime = (id,time) => {
  const readTime = times + time;
  setTime(readTime)

  // Remove duplicate blog
  const remainingBlog = bookmarks.filter(bookmark => bookmark.id!== id);
  setBookmarks(remainingBlog);
}

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex justify-between gap-6'>
        <Blogs
          handleBookmarksBlogs={handleBookmarksBlogs}
          totalReadTime={totalReadTime}>
        </Blogs>
        <div className='  mx-auto w-1/3'>
          <Readtime times={times}></Readtime>
          <div className='bg-slate-100 p-4 mt-4 rounded-xl'>
          <Bookmarks bookmarks={bookmarks} ></Bookmarks>
         
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
