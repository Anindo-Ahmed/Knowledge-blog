import './App.css'

import Header from './Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'

function App() {

  return (
    <>
  
      
      <Header></Header>
      <div className='flex justify-between'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
      
    </>
  )
}

export default App
