
import Sidebar from '../Sidebar/Sidebar'
import MessageContainer from '../MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-black rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
    <Sidebar />
    <MessageContainer />
    
  </div>
  )
}

export default Home
