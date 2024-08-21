import Footer from "../module/Footer"




function Layout( { children } ) {
  return (

    // Navbar
<>
    <div className=" w-{full} h-14  flex ">
     <div className="w-60 h-14 flex gap-3 px-10 py-2">

      <img src="/images/logo-site.png" className="w-{30px} h-{30px} " />
      <h2 className="text-2xl">یادکد</h2>

     </div>
    
     <div className="w-10/12 h-14 flex justify-end ">
     <ul className="flex gap-8 px-10 py-2 ">
            <li className="text-xl">کد های ثبت شده</li>
            <li className="text-lg">فروشگاه</li>
            <li className="text-lg">بلاگ</li>
            <li className="text-lg">رایگان یادکد بسازید</li>
            <li className="text-lg">جستوجوی متوفیان در کشور</li>
        </ul>
     </div>
       
    </div>

      <div>{children}</div>

      <footer>


       <Footer/>




        {/* <div className="w-[1000px] h-[500px] bg-red-100 mx-40 rounded-xl grid grid-cols-12 ">
           <ul className="flex gap-8 p-10 col-span-8 ">
            <li>یادکد چیست ؟</li>
            <li>یادکدهای ثبت شده</li>
            <li>بلاگ</li>
            <li>تماس</li>
            <li>درباره ما</li>
            <li>قوانین</li>
           </ul>

           
            <div className="gap-8 p-10 col-span-4 flex">
               <button className="w-[100px] h-[30px] rounded-lg bg-white mx-5 ">ورود</button>
               <button className="w-[100px] h-[30px] rounded-lg bg-white ">ثبت نام</button>
            </div>
            

        </div> */}

        
      </footer>

</>


  )
}

export default Layout
