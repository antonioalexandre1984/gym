import { join } from '../../data';

export function Join() {
  const { image, title, subtitle, btnText } = join;
  return (
    <section className='bg-neutral-500 min-h-[537px]'>
      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0'>
          <div className='-mt-[80px] max-w-[442px] lg:max-w-full'>
            <img src={image} alt=''
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='100' />
          </div>
          {/* title */}
          <div className='max-w-[350px] lg:max-w-[492px] ml-[30px]'
            data-aos='fade-left'
            data-aos-offset='100'
            data-aos-delay='100'
          >
            <h2 className='h1 md:text-[62px] mb-4 lg:mb-6 text-white'>Wanna join <span className='text-primary-200'>&</span> have fun</h2>
            <p className='text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[492px]'>
              {subtitle}
            </p>
            <button className='btn btn-secondary btn-lg rounded-lg transition-all'>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
