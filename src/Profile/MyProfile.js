import React from 'react'

const MyProfile = (props) => {
    return (
        <div>

<h1> {props.FullName.name} </h1>
<h3>{props.Bio}  </h3>
<h5> {props.Profession} </h5>

        </div>
    )
}

export default MyProfile
