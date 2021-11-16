import React, { useState , useEffect} from "react"
import { UilSearch } from '@iconscout/react-unicons'
import './Search.css'

const Search = () => {
    const[isClick, setIsClick] = useState(false);
    const[keywords, setKeywords] = useState(
        JSON.parse(localStorage.getItem('keywords') || '[]'),
    );

    useEffect(() => {
        localStorage.setItem('keywords', JSON.stringify(keywords))
    }, [keywords]);

    const handleAddKeyword = (text) => {
        console.log('text', text)
        const newKeyword ={
            id: Date.now(),
            text: text,
        }
        setKeywords([newKeyword, ...keywords]);
    }

    const handleClearKeyword = () => {
        setKeywords([])
    }

    const openSearchHandler = () =>{
        setIsClick(!isClick);
    }


    return (
        <>
        <div className="search_container">
            <button
                    size={32}
                    className="search_button"
                    onClick={openSearchHandler}>
                        {isClick === false ? <UilSearch/> : <UilSearch/>}
            </button>
            {isClick === true ? <div className="search_backdrop"onClick={openSearchHandler}>
                <div className="search_modal_view" 
                     onClick={(e) => e.stopPropagation()}
                     role='dialog'>
                         <div className="search_input_container">
                         <input type='text' 
                                className="search_input_thing"
                                placeholder="찾고자하는 상품을 검색하세요"
                                keywords={keywords}
                                />
                         <button className="search_inner_modal_btn">
                             <UilSearch size={32}/>
                         </button>
                         </div>
                         
                         <div className="search_history_container"> 
                            <div className="search_histroy_title">
                                최근 검색 기록
                            </div>
                            <div className="search_history"
                                 keywords={keywords}
                                 onClearKeywords={handleClearKeyword}>
                                     기록 삭제
                            </div>
                         </div>
                    </div>
            </div> : null}
        </div>
        </>
    )
}

export default Search