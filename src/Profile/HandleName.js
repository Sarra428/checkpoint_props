import React from 'react'

const HandleName = ({Handlealert, FullName}) => {
    return (
        <div>
            
            <button  onClick={ ()=> Handlealert(FullName.name)  }  >click me !</button>


        </div>
    )
}

export default HandleName
