import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Coffee Roasters`
    },[title])
}

export default useTitle;