import fetchHandler from "@/utils/fetchHandler"
import { useEffect, useState } from "react"

const useFetch = (url,options) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const handleFetch = async () => {
        setLoading(true)
        const data = await fetchHandler(url,options)
        setData(data)
        setLoading(false)
    }
    
    useEffect(() => {
        handleFetch()
    },[])


    return [data,loading]
}

export default useFetch