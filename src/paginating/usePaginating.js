import { useEffect, useState } from "react";


const usePaginating = ({count,limit}) => {

    const [page,setPage] = useState(1);
    const [firstArr,setFirstArr] = useState([]);
    const [lastArr,setLastArr] = useState([]);

    const numberOfPage = Math.ceil(count / limit);

    useEffect(() => {
        const newArr = [...Array(numberOfPage)].map((item,index) => index + 1);
        if(numberOfPage >= 4){
            if(page + 2 <= numberOfPage - 1){
                const arr = newArr.slice(page - 1, page + 2);
                setFirstArr(arr);
                const las = newArr.slice(numberOfPage - 1);
                setLastArr(las);
            }
            else{
                const arr = newArr.slice(numberOfPage - 4);
                setFirstArr(arr);
                setLastArr([]);
            }
        }
        else{
            setFirstArr(newArr);
            setLastArr([]);
        }
    },[page]);

    useEffect(() => {
        console.log({firstArr,lastArr})
    },[firstArr,lastArr]);

    const prev = () => {
        setPage(Math.max(page - 1,1));
    }

    const next = () => {
        setPage(Math.min(page + 1,numberOfPage));
    }

    const jump = (e) => {
        setPage(e);
    }

    const activePage = (e) => {
        return e === page ? 'active' : '';
    }

  return {page,prev,next,jump,firstArr,lastArr,activePage}
}

export default usePaginating