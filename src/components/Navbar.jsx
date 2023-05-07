import ToggleTheme from './ToggleTheme'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>
      <ToggleTheme />
    </div>
  )
}

export default Navbar
