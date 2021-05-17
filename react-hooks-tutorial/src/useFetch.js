import { useEffect, useState } from "react"

export const useFetch = (url) => {
    // custom hook to fetch from an api
    // do fetch whenever the url changes
    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        setState({data: null, loading: true})
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({data: y, loading: false})
            })
    }, [url, setState])

    return state
}