import { useState } from 'react'
import './App.css'

import Header from './Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bookmark from './components/Bookmark/Bookmark'

function App() {

  const [bookmarks, setBookmarks] = useState ([]);

  const handleBookmarksBlogs = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log(blog)
  }



  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex justify-between gap-6'>
        <Blogs handleBookmarksBlogs={handleBookmarksBlogs}></Blogs>
        <div className=' bg-slate-200 p-4 mt-5 rounded-xl  mx-auto w-1/3'>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
          {
            bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
