import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setLoading(false)
      }catch(err){
        console.error(err)
      }
    }

    fetchPosts();
  }, [])

  const itemsPerPage = 10;
  const totalPages = Math.ceil(posts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      <div>
        <h1>Pagination</h1>
        <div className="w-[80%] m-auto">
          {currentPosts.map((post) => (
            <div key={post.id} className="my-4 bg-gray-400 p-4">
              {post.title}
              {post.body}
            </div>
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  )
}

function Pagination({currentPage, totalPages, onPageChange}){
  const pageNumbers = [];

  for(let i=1;i<=totalPages;i++){
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if(currentPage === 1){
      return;
    }else{
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if(currentPage === totalPages){
      return;
    }else{
      onPageChange(currentPage + 1)
    }
  }
  return (
    <div className="flex justify-center bg-gray-200 p-8 w-[40%] m-auto mb-10">
      <button
      onClick={handlePrevPage}
      className={`bg-gray-900 py-2 px-4 text-white mx-3 w-20 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Prev</button>
      <button
      onClick={handleNextPage}
      className={`bg-gray-900 py-2 px-4 text-white mx-3 w-20 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>Next</button>
    </div>
  )
}

export default App
