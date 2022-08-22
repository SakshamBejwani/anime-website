import React from 'react'
import {Link} from 'react-router-dom'

function Title(props) {
    const {index, row} = props;
    console.log('Item Row', row)
     return (
        <>
        
            <div id={row._id} class="col col-md-2 col-sm-4 shadow m-3 py-2 rounded">
            <Link to={"/"+row._id}>
                <div class="w-100 d-flex align-items-center justify-content-center">
                    <img class="image-cover rounded" src={row.image} alt="title cover" />
                </div>
                <div class="h4 my-1 text-black">{row.title}</div>
            </Link> 
            </div>
            
        </>
  ) 
}

export default Title