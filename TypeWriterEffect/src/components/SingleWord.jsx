import React, { useEffect, useState } from 'react'

const SingleWord = ({
    text="Premchand",
    typingSpeed=150
}) => {

    const [displayText, setDisplayText] = useState("")
    const [currIndex, setCurrIndex] = useState(0)

    useEffect(() => {
        if(!text) return;

        let timer;

        if(currIndex < text.length){
            timer = setTimeout(() => {
                setDisplayText(prevText => prevText + text.charAt(currIndex))
                setCurrIndex(currIndex => currIndex + 1);
            }, typingSpeed)
        }

        return () => clearTimeout(timer)
    }, [currIndex, text, displayText])
    return (
        <div>
            <span>{displayText}</span>
            <span>|</span>
        </div>
    )
}

export default SingleWord