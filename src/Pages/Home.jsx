import React from 'react'
import Header from '../Components/Header'
import {useStore} from "../Store/StoreContext"
const Home = () => {

const {state} = useStore();
console.log(state)
const {Loading, universities} = state;
  return (
    
    <div><Header />
    {Loading ? "loading": <div className='max-w-screen-xl mx-auto'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className="border p-2 text-left ">Name</th>
           
            <th className=" border p-2 text-left">Web</th>
            <th className=" border p-2 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((item)=> {
            return (
              <tr className='odd:bg-gray-100'>
                <td className='px-3 py-3.5 border'>{item.name}</td>
                
                <td className='px-3 py-3.5 border'>{item.domains?.[0]}</td>
                <td className='px-3 py-3.5 border'>{item.country}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
        
        
      </div>}
    </div>
    
  )
}

export default Home