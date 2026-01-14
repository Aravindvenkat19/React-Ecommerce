import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  
  const searchHandler = () =>{
    navigate('/search?keyword='+keyword)
  }

  return (
     <div className="input-group">
              <input
                type="text"
                id="search_field"
                onBlur={searchHandler}
                onChange={(e) => setKeyword(e.target.value)}
                className="form-control"
                placeholder="Enter Product Name ..."
              />
              <div className="input-group-append">
                <button onClick={searchHandler} id='search_btn' className="btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
  )
}

export default Search