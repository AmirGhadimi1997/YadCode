// import { useState } from 'react';



// function Mahshad_List() {


//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = ['ارسال پیام تسلیت', 'فیلم و تصویر', 'اشتراک گذاری', 'دلنوشته و خاطرات', 'خلاصه زندگی نامه', 'زندگی نامه', 'زیارت', 'مراسم', 'بارکد'];



//   return (

//     <ul className="flex border-b-2 border-transparent justify-center mt-5">
//       {items.map((item, index) => (
//         <li
//           key={index}
//           className={`mx-4 py-2 cursor-pointer relative ${
//             activeIndex === index ? 'after:bg-green-500' : ''
//           } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:transition-colors`}
//           onClick={() => setActiveIndex(index)}
//         >
//           {item}
//         </li>
//       ))}
      
//     </ul>

//   );
  
// };

// export default Mahshad_List





import React, { useState } from 'react';
import Pic_Tablo from './Pic_Tablo';
import Mahshad_Pic from './Mahshad_Pic';
import Mahshad_Share from './Mahshad_Share';
import Mahshad_Memoirs from './Mahshad_Memoirs';
import Mahshad_Pilgrimage from './Mahshad_Pilgrimage';
import Specifications from './Specifications';
import Autobiography from './Autobiography';
import Ceremony from './ceremony';


const Mahshad_List = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { title: 'ارسال پیام تسلیت', content: <Pic_Tablo/>},
    { title: 'فیلم و تصویر', content: <Mahshad_Pic/> },
    { title: 'اشتراک گذاری', content: <Mahshad_Share/> },
    { title: 'دلنوشته و خاطرات', content: <Mahshad_Memoirs/> },
    { title: 'خلاصه زندگی نامه', content: <Specifications/> },
    { title: 'زندگی نامه', content: <Autobiography/> },
    { title: 'زیارت', content: <Mahshad_Pilgrimage/> },
    { title: 'مراسم', content: <Ceremony/> },
    { title: 'بارکد', content: <img src="path/to/barcode.jpg" alt="Barcode" /> },
  ];

  return (
    <div>
      <ul className="flex border-b-2 border-transparent justify-center mt-5">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mx-4 py-2 font-Estedad-Regular cursor-pointer relative ${
              activeIndex === index ? 'after:bg-green-500' : ''
            } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:transition-colors`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="content mt-5 flex justify-center">
        {items[activeIndex].content}
      </div>
    </div>
  );
};





export default Mahshad_List;
