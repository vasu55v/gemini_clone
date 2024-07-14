import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className='main'>
       <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
       </div>   
       <div className='main-container'>

        {!showResult?
        <>
            <div className='greet'>
            <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            
            <div className='cards'>
                <div className='card'>
                    <p>suggest beautiful to see an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className='card'>
                    <p>briefly summarize this concept:urban planning </p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className='card'>
                    <p>Brainstrom team bonding  activities for our work retreat</p>
                    <img src={assets.message_icon} alt=''/>
                </div>
                <div className='card'>
                    <p>Improve the readability of following code..</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
            </div> 
            </>
      :
      <div className='result'>
            <div className='result-title'>
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
                <img src={assets.gemini_icon}/>
                {
                    loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p className='result-data-text'>{resultData}</p>
                }
                
            </div>
      </div>
        }

          
            <div className='main-bottom'>
                <div className='search-box'>
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter prompt here'/>
                    <div>
                        <img src={assets.gallery_icon}/>
                        <img src={assets.mic_icon}/>
                        <img src={assets.send_icon} onClick={()=>onSent()}/>
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main