import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './SideBarData';
import './css/UserMenu.css';
import {IconContext} from 'react-icons';
import{Dropdown, DropdownItem,DropdownToggle, DropdownMenu} from 'reactstrap';
function UserMenu(){

    const logout =(event)=>{
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.reload();
    }
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return(
       <>
       <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
            Setings
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Profile settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={logout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                        </Link>    
                    </li>
                    
                    {SideBarData.map((item, index)=>{
                        return(
                            <li key ={index} className={item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }) }

                </ul>
            </nav>
            </IconContext.Provider>
       </>
    )
}


export default UserMenu;