import { useEffect, useState } from "react";

import PageRead from "../PageRead/PageRead";
import { AiOutlineConsoleSql } from "react-icons/ai";





const PagesToRead = () => {
    
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, [])
  
    return (
       <div className="">
        {
            chartData.map( (read, idx) => <PageRead key={idx} read={read}></PageRead>)
        }
       </div>
    );
};

export default PagesToRead;