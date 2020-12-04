// write your custom hook here to control your checkout form
// stop importing React for no reason T.T

import { useState } from 'react'

export default useForm = (initialValue) => {

    const [value, setValue] = useState(initialValue)

    const handleChanges = e => {
        setValue({
            ...values, 
        [e.target.name]: e.target.value
        })
    }

    return (
        [value, handleChanges]
    )
}