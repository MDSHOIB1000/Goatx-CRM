import React from 'react'
import CustomInputField from '../../../commonComponents/customInputField/CustomInputField'

function ViewProfile() {
    const handleChange = () => {
        
    }
    return (
        <>
            <CustomInputField id="profile"
                label="Profile"
                type="text"
                // value={""}
                onChange={handleChange}
            />
        </>
    )
}

export default ViewProfile
