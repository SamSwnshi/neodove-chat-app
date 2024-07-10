
import { SlLogout } from "react-icons/sl";
import useLogout from "../../hooks/useLogout";
const Logout = () => {

  const {logout} = useLogout()
  return (
    <div className="mt-auto ">
      <SlLogout className="text-3xl mt-3 text-yellow-50 text-warning" onClick={logout}/>
    </div>
  )
}

export default Logout
