import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export const Video = ({ id = null, className, src, controls = false, muted = false, autoPlay = false, poster}) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(autoPlay)

    const handleVideoClick = () => {
        const video = videoRef.current
        if (!video) return

        if (isPlaying) {
            video.pause()
            setIsPlaying(false)
        } else {
            video.play()
            setIsPlaying(true)
        }
    }

return (
    <video 
        id={id}
        ref={videoRef}
        className={className}
        controls = {controls}
        muted = {muted}
        autoPlay = {autoPlay}
        onClick= {handleVideoClick}
        src={src}
        poster={poster}
    />
)
}
