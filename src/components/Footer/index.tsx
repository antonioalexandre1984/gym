import { footer } from '../../data';

export function Footer() {
  const { logo, copyrightText } = footer;


  return (
    <section className='bg-neutral-500 h-[125px] md:h-[195px] p-[20px]'>
      <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        {/* logo */}
        <a href="#">
          <img className='w-[80px]' src={logo} alt='' />
        </a>
        {/* copyright Text */}
        <p className='text-neutral-300'>{copyrightText}</p>
      </div>
    </section>
  );
}
