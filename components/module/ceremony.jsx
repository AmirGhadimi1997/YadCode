

function Ceremony() {
  return (
    <div className="w-8/12 h-[700px] bg-red-50 rounded-xl p-5 ">

      <p className="text-xl">
        جهت ثبت درخواست برگزاری مراسم آنلاین (شامل قاری، سخنران و مداح) روی دکمه
        زیر کلیک نمایید. برای اطلاع بیشتر از نحوه برگزاری مراسم یادبود آنلاین،
        ویدئوی زیر را ببینید.
      </p>
      
      <div className="flex justify-center mt-10 ">

        <button className="w-8/12 h-14 bg-green-500 rounded-2xl text-white text-xl">سفارش مراسم آنلاین</button>

      </div>

      <div className="flex justify-center ">

       <video className="w-10/12 h-[500px]" src="/Movie/marasem_intro.mp4" controls></video>
       
      </div>

    </div>



  );
}

export default Ceremony;
