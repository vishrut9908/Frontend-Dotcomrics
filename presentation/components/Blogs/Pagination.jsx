import React, { useContext } from 'react'
import { BlogContext } from '../../../application/contexts/BlogAction';
import styles from '../../../styles/blogs/Pagination.module.css'


function Pagination() {
    const context = useContext(BlogContext);
    const contextArray = context?.BlogState?.meta;
    console.log(contextArray);
    const arrr = [];
    const getButtons = () => {
        for (let index = 1; index <= contextArray?.pageCount; index++) {
            arrr.push(<button onClick={()=>context?.BlogsPageAction(index,contextArray?.pageCount)}>{index}</button>);
        }
        return arrr;
    }
    return (
    <div className={styles['pagination-container']}>
        <div className={styles['pagination-wrapper']}>
            <button onClick={()=>context?.BlogsPageAction(contextArray?.page-1,contextArray?.pageCount)}>prev</button>
            {
                getButtons()
            }
            {/* <button>1</button>
            <button>3</button>
            <button>4</button>
            <button>5</button> */}
            {/* <p>..</p> */}
            <button onClick={()=>context?.BlogsPageAction(contextArray?.page+1,contextArray?.pageCount)}>next</button>
        </div>
    </div>
  )
}

export default Pagination