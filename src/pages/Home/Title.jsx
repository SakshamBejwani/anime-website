import React from 'react'

function Title(props) {
    const {index, row} = props;
     return (
        <>
            <div id={index+1} class="col col-md-2 col-sm-4 my-2 shadow p-2">
                <div class="image-cover">
                    <img src='' alt="title cover" />
                </div>
            </div>
        </>
  ) 
}

export default Title