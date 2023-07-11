import { useState } from 'react'
import './App.css'

function App() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navto = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    
      <div className='font-body'>

      <div className='grid md:grid-cols-3'>
    <div className='md:col-span-1 md:flex md:justify-end'>
    <nav className={`text-right ${isNavOpen ? 'nav-open' : ''}`}>
        <div className='flex justify-between items-center'>
          
          <h1>
                  {/* responsive making */}
            <a href="/" className='hover:text-green-600'>Food Ninja</a>
          </h1>
          <div className='px-4 cursor-pointer md:hidden' onClick={navto}>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </div>
        </div>
        <ul className='text-sm mt-6 hidden md:block' id="show">
          <li>
            <a href="#" className='px-4 flex justify-end border-r-4 border-primary'>
              <span>Home</span>
              <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            </a>
          </li>
          <li>
            <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
              <span>About</span>
              <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

            </a>
          </li>
          <li>
            <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
              <span>Contact</span>
              <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

            </a>
          </li>
        </ul>
      </nav>
    </div> 
        
        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
        {/* responsive making */}
          <div className='px-16 py-6 flex justify-center md:justify-end'>    
            <a  href='#'  className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign In</a>
            <a  href='#'  className="btn text-primary border-primary md:border-2 ml-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log In</a>
          </div>

         
          <header>
            <h2 className="text-gray-600 text-5xl ">recipes</h2>
            <h3 className="text-green-500 text-2xl">for ninjas</h3>
          </header>
          <div>
            <h4 className='font-bold uppercase mt-12 border-b border-gray-500'>latest recipe</h4>

          <div className='mt-8 grid lg:grid-cols-3 gap-7'>
          {/* cardss */}
          <div className='cards  hover:shadow-2xl' >
            <img src="img/coldbrew.jpg" alt="cold" className="w-full h-32 sm:h-48 object-cover" />
            <div className='p-4'>
              <span className='font-bold'>cold cofee</span>
              <span className='block text-gray-500 text-sm'>recipe by starcafe</span>
            </div>
            <div className='incards'>
            <span>5 mins</span>
            <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>
          </div>

          <div className='cards hover:shadow-2xl' >
            <img src="img/icecream.jpg" alt="ice" className="w-full h-32 sm:h-48 object-cover" />
            <div className='p-4'>
              <span className='font-bold'>special icecreame</span>
              <span className='block text-gray-500 text-sm'>recipe by manss</span>
            </div>
            <div className='incards'>
            <span>10 mins</span>
            <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>
          </div>
        
          <div className='cards  hover:shadow-2xl' >
            <img src="img/tea.jpg" alt="tea" className="w-full h-32 sm:h-48 object-cover" />
            <div className='p-4'>
              <span className='font-bold'>5 bean chillis</span>
              <span className='block text-gray-500 text-sm'>recipe by msss</span>
            </div>
            <div className='incards'>
            <span>25 mins</span>
            <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>
          </div>

          </div>
          <h4 className='mt-12 border-b border-gray-500'>most popular</h4>
          <div>

          </div>
          <div className='flex justify-center'>
          <div className='btn border-b border-y-gray-500 hover:shadow-inner transform hover:scale-150 hover:bg-opacity-60 transition ease-out duration-700'>load more</div>
          </div>
          
          </div>
        </main>
      </div>
      </div>
 
  )
}

export default App
