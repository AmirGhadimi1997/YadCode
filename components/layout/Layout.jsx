import Footer from "../module/Footer"




function Layout( { children } ) {
  return (

    // Navbar
<>
    <div className="w-full h-14 flex px-60">
     <div className="w-60 h-14 flex gap-3 px-10 py-2">

      <img src="/images/logo-site.png" className=" " />
      <h2 className="text-2xl">یادکد</h2>

     </div>
    
     <div className="w-10/12 h-14 flex justify-end ">
     <ul className="flex gap-8 px-10 py-2 ">
            <li className="text-xl hover:text-accent hover:cursor-pointer ">کد های ثبت شده</li>
            <li className="text-lg hover:text-accent hover:cursor-pointer ">فروشگاه</li>
            <li className="text-lg hover:text-accent hover:cursor-pointer ">بلاگ</li>
            <li className="text-lg hover:text-accent hover:cursor-pointer ">رایگان یادکد بسازید</li>
            <li className="text-lg hover:text-accent hover:cursor-pointer ">جستوجوی متوفیان در کشور</li>
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
