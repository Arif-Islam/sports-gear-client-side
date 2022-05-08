import { useEffect, useState } from "react"

const useGetItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://sports-gear-server.herokuapp.com/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return [items, setItems];
}

export default useGetItems;