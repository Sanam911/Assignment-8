import { useEffect, useState } from "react";
import Publication from "../Publication/Publication";


const Publications = () => {
    const [publications, setPublications] = useState([]);

    useEffect(()=>{
        fetch('publisher.json')
        .then(res => res.json())
        .then(data => setPublications(data));
    },[])
    return (
        <div>
            
            <div className="m-8  ">
                {
                    publications.map(publisher=> <Publication key={publisher.id} publisher={publisher}></Publication>)
                }
            </div>
        </div>
    );
};

export default Publications;