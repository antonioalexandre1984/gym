import { nav } from '../../data';

interface NavMobileProps {
  navMobile: boolean;
}

export function NavMobile({ navMobile }: NavMobileProps) {
  return (
    <nav
      className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, i) => {
          return (
            <li key={i}>
              <a href="#" className='text-white text-body-md '>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
      {/* buttons */}
      <div className='-mt-44 flex justify-center'>
        <button className='btn btn-sm btn-primary rounded-xl mr-4'>Login</button>
        <button className='btn btn-sm btn-secondary rounded-xl'>Sign Up</button>
      </div>
    </nav>
  );
}
