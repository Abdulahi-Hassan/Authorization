import {About} from '../Pages/About'
import {Services} from '../Pages/Services'
import imagehome from '../Images/e.png'
import { Contuct } from './Contuct'
export const Home=()=>{
    return(
        <div className='bg-dark Hooyo text-white lii'>
        <div className="home  ">
           <div className='home-content qoral'>
             <h1>My Name is Ali</h1>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <button className="btn btn-danger home-btn">Read More</button>
           </div>
           <div className='home-content img'>
            <img src={imagehome} alt=''  />
           </div>
        </div>
        <About/>
        <Services />
        <Contuct/>

       
        </div>
        
    )
}