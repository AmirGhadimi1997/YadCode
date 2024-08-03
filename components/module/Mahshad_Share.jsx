

function Mahshad_Share() {
  return (
    <div className="w-[800px] h-[150px] rounded-xl bg-orange-200 grid grid-cols-12 ">

      <div className="h-[150px]  col-span-6 flex flex-col justify-center items-center">
         <div className="flex flex-col justify-center items-center">
            <p className="text-lg ">کپی لینک صفحه</p>
            <button className="w-[300px] mt-3 border-2  border-black p-3 bg-green-500 text-white rounded-lg ">https://yadcode.ir/qr/80205</button>
         </div>
      </div>
       

      <div className="h-[150px]  col-span-6 flex flex-col justify-center items-center ">

         <div className="flex flex-col justify-center items-center">
            <p className="text-lg  ">اشتراک گذاری در شبکه های اجتماعی</p>

         </div>

           <div className="flex justify-between mt-3 ">

             <img src="/images/whatsapp_icon.png" alt="whatsapp_icon" className="w-[50px] mx-2"/>
             <img src="/images/telegram_icon.png" alt="telegram_icon" className="w-[50px] mx-2"/>
             <img src="/images/twitter_icon.png" alt="twitter_icon" className="w-[50px] mx-2"/>
             <img src="/images/eitaa_icon.png" alt="eitaa_icon" className="w-[50px] mx-2"/>

          </div>

      </div>

    </div>







  )
}

export default Mahshad_Share
