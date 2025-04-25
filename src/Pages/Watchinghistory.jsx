import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

function Watchinghistory() {

  const[history,setHistory]=useState([])

  const getHistory=async()=>{
    const result=await getHistoryAPI()
    // console.log(result);
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API FAILED");
      
    }
    
  }

  const deleteHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()

  }

  // console.log(history);
  
useEffect(()=>{
 getHistory()
},[])

  return (
    <div>
      <div className='container d-flex justify-content-between mt-5'>
        <h1 className='text-info'>Watch-History</h1>
        <Link to={'/home'} style={{textDecoration:"none", color:"blueviolet", fontSize:"30px"}}>Back to Home <i class="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse"></i></Link>

      </div>

      <table className='container shadow'>
        <thead>
            <tr>
                <th>#</th>
                <th>Video Title</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    {history?.length>0?history.map((video,index)=>(
       <tr>
       <td>{index+1}</td>
       <td className='text-warning'>{video.title}</td>
       <td><a href="{video.link}">{video.link}</a></td>
       <td>{video.timeStamp}</td>
       <td><button className='btn btn-link' onClick={e=>deleteHistory(video.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
   </tr>
    )):<p className='text-danger fw-bolder'>Nothing to Display</p>
    }
            
        </tbody>
      </table>
    </div>
  )
}

export default Watchinghistory
