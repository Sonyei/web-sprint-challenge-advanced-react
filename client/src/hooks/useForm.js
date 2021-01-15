import { useState } from 'react'

export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChanges = e => {
        setValue({
            ...value, 
        [e.target.name]: e.target.value
        })
    }
    return (
        [value, handleChanges]
    )
}


// write your custom hook here to control your checkout form
// stop importing React for no reason T.T