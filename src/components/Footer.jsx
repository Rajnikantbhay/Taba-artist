import React from 'react'
import logo from '../assests/companylogocropped.png'
import { ContactButton } from './HandleContact';
import { EmailButton } from './HandleContact';
import { Typography } from "@material-tailwind/react";
import youtube from '../assests/youtube.svg'

const LINKS = [
  {
    title: "Our Work",
    items: [{item:'Wall Art', href:'/ourwork#muralart'}, {item:'Graphic Design', href:'/ourwork#graphicwork'}, {item:'Sculptures', href:''}],
  },
  {
    title: "Company",
    items: [{item:'About', href:'/about'}],
  },
  {
    title: "Contact",
    items:[{item:'+91-9911-499221', href:<ContactButton phoneNumber={9911499221}/>} ,{item:'+91-9560-615712', href:<ContactButton phoneNumber={9560615712}/>}, {item:'art@taba.co.in', href:<EmailButton email={`art@taba.co.in`}/>}],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-5 ">
      <div className="mt-auto mx-auto w-full max-w-7xl md:px-8 px-4">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 font-redhat text-yellow-100 flex items-center">
            <img src={logo} alt="logo of Taba" className='w-8 mr-2' />
            Taba
          </Typography>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-inter text-[#f1f1f1] text-base md:text-xl font-base"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.item}>
                    <Typography
                      as={link.href ? 'a' : 'div'}
                      href={typeof link.href === 'string' ? link.href : undefined}
                      className="py-1 font-inter text-sm text-[#aaaaaa] transition-colors hover:text-blue-gray-100"
                    >
                      {typeof link.href !== 'string' ? link.href : link.item} 
      
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-inter text-white md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">TABA</a>. All
            Rights Reserved.
          </Typography>
          <div className='md:mr-12'>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TABATheArtByArtist" className="opacity-100 transition-opacity hover:opacity-100">
                  <img src={youtube} alt="icon of youtube" className='w-5 h-5' />
            </Typography>
            <Typography as="a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taba.co.in?igsh=ODA1NTc5OTg5Nw%3D%3D" className="transition-opacity">
              <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}