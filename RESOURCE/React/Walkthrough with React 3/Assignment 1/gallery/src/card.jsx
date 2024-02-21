import "./cards.css"

function Cards({data}){
    return (<><img className="setSize" src={data["url"]}></img></>)
}

function SpecificData({data}){
    return (
        <>
        <div><img src={data["url"]} alt="NA" className="full"/></div>
        <div><b>Title</b> : {data["title"]}</div>
        <div><u><i>Description</i></u> : {data["description"]}</div>
        </>
    )
}

export {Cards,SpecificData}