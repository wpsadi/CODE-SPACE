function useDebounce(cb,delay=200){
    let timerID

    return (...args)=>{
        timerID = setTimeout(()=>{
            clearTimeout(timerID)
            timerID=setTimeout(()=>{cb(...args)},delay)
        },delay)
    }
}

export default useDebounce;