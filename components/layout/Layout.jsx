import Footer from "../module/Footer"




function Layout( { children } ) {
  return (

    // Navbar
<>
    <div className="w-full h-14 flex px-80 ">
     <div className="w-60 h-14 flex gap-3 px-10 py-3">

      <img src="/images/logo-site.png" className=" " />
      <h2 className="text-2xl font-Estedad-Bold">یادکد</h2>

     </div>
    
     <div className="w-10/12 h-14 flex justify-end ">
     <ul className="flex gap-8 px-10 py-5 ">
            <li className="text-md hover:text-accent hover:cursor-pointer font-Estedad-Bold">یادکد های ثبت شده</li>
            <li className="text-md hover:text-accent hover:cursor-pointer font-Estedad-Regular">فروشگاه</li>
            <li className="text-md hover:text-accent hover:cursor-pointer font-Estedad-Regular">بلاگ</li>
            <li className="text-md hover:text-accent hover:cursor-pointer font-Estedad-Regular">رایگان یادکد بسازید</li>
            <li className="text-md hover:text-accent hover:cursor-pointer font-Estedad-Regular">جستوجوی متوفیان در کشور</li>
        </ul>
     </div>
       
    </div>

      <div>{children}</div>

      <footer>


       <Footer/>

        
      </footer>

</>


  )
}

export default Layout
