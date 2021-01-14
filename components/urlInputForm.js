import React, { useState } from 'react'
import { 
    Input,
    FormGroup,
    FormControl,
    Button,
    FormHelperText,
    InputLabel
} from '@material-ui/core';

const UrlInputForm = () => {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState(null)
    
    const onSubmit = async event => {
        event.preventDefault()
        setLoading(true)
        
        if (!url) {
            setLoading(false)
            return
        }
        // TODO Validate URL here

        // TODO submit to back-end and redirect from there to /results
        const reponse = await fetch("/submit-url", {
            method: "POST",
            body: JSON.stringify({ url })
        })
    }

    const onUrlInputChange = event => {
        setUrl(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <FormGroup>
                <FormControl>
                    <InputLabel color="secondary" htmlFor="url-input">URL</InputLabel>
                    <Input 
                        id="url-input"
                        autoComplete="url"
                        autoFocus={true}
                        disabled={loading}
                        name="url"
                        required
                        type="url"
                        onChange={onUrlInputChange}
                        aria-describedby="url-input-caption"
                    />
                    <FormHelperText color="secondary" id="url-input-caption">
                        Will preppend <code>https://</code> automatically
                    </FormHelperText>
                </FormControl>
                <Button 
                    type="submit"
                    color="primary"
                    variant="outlined"
                    disabled={loading || !url}
                >SUBMIT</Button>
            </FormGroup>
        </form>
    )
}

export default UrlInputForm
