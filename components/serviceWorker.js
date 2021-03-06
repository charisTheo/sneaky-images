import React, { useEffect } from 'react'

const ServiceWorker = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log('service worker registration successful')
            })
            .catch(err => {
                console.warn('service worker registration failed', err.message)
            })
        }
    }, [])

    return (
        <></>
    )
}

export default ServiceWorker
