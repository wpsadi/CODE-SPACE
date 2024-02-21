import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import {Cards,SpecificData} from './card'

function App() {
  const [galleryView,setGalleryView] = useState(true)
  const [GalleryData,setgalleryData] = useState([])
  const [specifc,setSpecific] = useState({})
  const [loading,setLoading] = useState(true);
  const [viewSpecific,setViewSpecific] = useState(false)
  const [whatToView,setWhatToView] = useState(null)

  async function loadContent(){
    let res = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=100")
    res = res.data
    res = res.photos
    setLoading(false)
    setgalleryData(res)
  }

  async function loadSpecific(){

    let res = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${whatToView}`)
    res = res.data
    res = res.photo
    
    setLoading(false)
    setSpecific(res)
  }

  useEffect(()=>{
    if (galleryView){
      loadContent()
    }
  },[galleryView])

  useEffect(()=>{
    if (whatToView !=null){
      loadSpecific()
    }
  },[whatToView])
  return (
    <>
    {loading && "Loading content..."}

    {galleryView && 
      <div className="main">
        {GalleryData.map((item,index)=><div key={index+1} onClick={()=>{
          setLoading(true);
          setGalleryView(false);
          setViewSpecific(true);
          setWhatToView(()=>index+1);
          
          

        }}><Cards data={item}/></div>)}
      </div>
    }

    {viewSpecific && loading && <br/>}
    {viewSpecific && `You have selected to view card: ${whatToView}`}
    {viewSpecific && !loading && <br/>}
    {viewSpecific && <button onClick={()=>{
      setLoading(true);
      setViewSpecific(false)
      setGalleryView(true)
    }}>Go Back</button>}
    {viewSpecific && !loading && <br/>}
    {viewSpecific && !loading && <br/>}
    {viewSpecific && !loading && <SpecificData data={specifc}/>}
    </>
  )
}

export default App
