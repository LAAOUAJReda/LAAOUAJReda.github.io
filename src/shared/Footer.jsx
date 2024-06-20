import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';
import whatsappIcon from '../assets/icons-white/whatsapp-white.png';

const Footer = () => {
  return (
    <div className="bg-black md:h-96 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            REDA LAAOUAJ
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        {/* social icons */}
        <div className='my-3'>
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className='mt-5 flex gap-3'>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/reda-laaouaj-24b0331b6/" className='ml-1'><img src={linkedinIcon} alt="" className='w-7 h-7'/></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Redalaaouaj" className='ml-1'><img src={githubIcon} alt="" className='w-7 h-7'/></a>
            <a target="_blank" rel="noreferrer" href="https://wa.link/8xo91c" className='ml-1'><img src={whatsappIcon} alt="" className='w-7 h-7'/></a> 


          </div>
        </div>
      </div>

      <hr className='text-slate-50 opacity-30 px-7'/>

      <div>
        <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>© Copyright 2024. Made by <a href="" className='underline'>REDA LAAOUAJ</a></p>
      </div>
    </div>
  );
};

export default Footer;
