import Head from "next/head";
import Mahshad from "../components/module/Mahshad";
import Mahshad_Box from "../components/module/Mahshad_Box";
import Mahshad_List from "../components/module/Mahshad_List";









export default function Home() {
  return (
   
      <div>

        <Head>
          <title>YadCode</title>
        </Head>
        

        <Mahshad />
         <Mahshad_Box/>
          <Mahshad_List/>
          
       


       <br /> <br /> <br /> <br /> <br />

      </div>
     
    
  )
}
