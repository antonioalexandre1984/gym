import { header } from '../../data';
import { Nav } from '../Nav';
import { NavMobile } from '../NavMobile';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { useEffect, useState } from 'react';

export function Header() {
  // Header state
  const [isActive, setIsActive] = useState(false);
  // nav movbile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    }, { passive: true });
  }, []);

  // destructure header data
  const { logo, btnLoginText, btnSignUpText } = header

  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[40px]'} fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}>
      {/* logo */}
      <a href="#">
        <img src={logo} alt="logo" className='h-[30px]' />
      </a>
      {/* nav - initially hidden - show on desktop */}
      <Nav />
      {/* btns - initially hidden - show on desktop */}
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm btn-primary transition-all duration-300  rounded-xl mr-4'>{btnLoginText}</button>
        <button className='btn btn-sm btn-secondary rounded-xl '>{btnSignUpText}</button>
      </div>
      {/* nav menu btn - initially shown - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4 '>
        {navMobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />) : (<RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />)}
      </div>
      {/* nav mobile - initially hidden - show on mobile */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
}
