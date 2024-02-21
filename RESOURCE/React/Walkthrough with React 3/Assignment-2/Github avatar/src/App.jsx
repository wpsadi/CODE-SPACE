import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [search, setSearch] = useState(null)
  const [viewData, setviewData] = useState([])
  const [loading, setLoading] = useState(true)
  const [avatarData,setavatarData] = useState(null)

  async function largeData() {
    let res = await axios.get("https://api.github.com/users")
    res = res.data
    setLoading(false);
    setviewData(res)

  }

  async function getAvatar(){
    try{
      let res = await axios.get(`https://api.github.com/users/${search}`)
      res = res.data
      setavatarData(res.avatar_url)
    }
    catch(e){
      setavatarData("NA")
    }

    
    setLoading(false);
  }

  useEffect(() => {
    if (search == null){
      largeData()
    }
    else{
      getAvatar()
    }
    
  }, [search])



  return (
    <>
      <h3>Get GitHub Avatar here</h3>
      <input type="search" name="" onChange={(e) => {
        if (e.target.value.length > 0) {
          setSearch(e.target.value)
          setLoading(true)
        }
        else {
          setSearch(null)
        }
      }} id="" className=''

        placeholder='Github username here' />

      {loading && <><br /><br /></>}
      {loading && "Loading Content..."}

      {search == null && <><br /><br /></>}

      {<div className='main'>
      {search != null && !loading && avatarData!="NA" && <img src={avatarData}></img>}
      {search != null && !loading && avatarData=="NA" && <><br/><br/>No GitHub Account Found</>}

        {search==null &&  viewData.map((item, index) => <div key={index + 1} className='box'>
          <img src={item["avatar_url"]} alt="NA" className='large' />
          <br />
          <div>{item["login"]}</div>
        </div>)}
        
      </div>}


      

    </>


  )
}

export default App
