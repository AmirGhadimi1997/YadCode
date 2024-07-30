



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

      {/* <footer>
        <h1 className="text-5xl">سایت یاد کد</h1>
      </footer> */}

</>


  )
}

export default Layout
