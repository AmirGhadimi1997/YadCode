

function Footer() {
  return (
    <div className="w-[1000px] h-[500px] bg-secondary mx-auto rounded-xl flex flex-col ">

       <div className="w-[1000px] h-[100px] grid grid-cols-12">
          <ul className="flex gap-5 text-md col-span-8 p-8 font-Estedad-Regular">
            <li>یادکد چیست ؟</li>
            <li>یادکدهای ثبت شده</li>
            <li>بلاگ</li>
            <li>تماس</li>
            <li>درباره ما</li>
            <li>قوانین</li>
          </ul>

          <div className="col-span-4 p-8">
             <button className="w-[100px] h-[30px] rounded-lg bg-white mx-5 font-Estedad-Regular">ورود</button>
             <button className="w-[100px] h-[30px] rounded-lg bg-white font-Estedad-Regular">ثبت نام</button>
          </div>
       </div>

       <hr className="border-t-1 border-gray-500 my-4 w-12/12 mx-5" />

       <div className="w-[1000px] h-[400px] grid grid-cols-12">

          <div className="col-span-5  flex flex-col p-8 justify-center font-Estedad-Regular">
             <p className="mb-5 text-lg font-Estedad-Regular"> تماس: 91082114-021</p>
             <p className="mb-5 text-lg font-Estedad-Regular"> واتساپ: 09100827696</p>
             <p className="mb-5 text-lg font-Estedad-Regular"> نشانی: تهران - خیابان کارگر شمالی - خیابان هیئت - پارک علم و فناوری تربیت مدرس</p>
             <p className="mb-5 text-lg font-Estedad-Regular"> ایمیل: info@yadcode.ir</p>
          </div>




          <div className="col-span-7  flex justify-center items-center">
             <img src="/images/Sazman1.png" alt="Sazman1" className="w-[80px] h-[80px] mx-3"/>
             <img src="/images/Sazman2.png" alt="Sazman2" className="w-[80px] h-[80px] mx-3"/>
             <img src="/images/Sazman3.png" alt="Sazman3" className="w-[80px] h-[80px] mx-3"/>
             <img src="/images/Sazman4.png" alt="Sazman4" className="w-[80px] h-[80px] mx-3"/>
             <img src="/images/Sazman5.png" alt="Sazman5" className="w-[80px] h-[80px] mx-3"/>
          </div>
           


       </div>

       
    </div>
  )
}

export default Footer
