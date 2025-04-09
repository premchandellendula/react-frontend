import React, { useEffect, useState } from 'react'

const SingleWordLoop = ({
    text="Premchand",
    typingSpeed=150,
    deleteSpeed=100,
    delayBeforeDelete=1500,
    delayBeforeStart=500
}) => {

    const [displayText, setDisplayText] = useState("")
    const [currIndex, setCurrIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if(!text) return;

        let timer;

        if(isTyping){
            if(currIndex < text.length){
                timer = setTimeout(() => {
                    setDisplayText(prevText => prevText + text.charAt(currIndex))
                    setCurrIndex(currIndex => currIndex + 1);
                }, typingSpeed)
            }else{
                timer = setTimeout(() => {
                    setIsTyping(false)
                }, delayBeforeDelete)
            }
        }else{
            if(displayText.length > 0){
                timer = setTimeout(() => {
                    setDisplayText(prevText => prevText.slice(0, -1));
                }, deleteSpeed)
            }else{
                timer = setTimeout(() => {
                    setIsTyping(true);
                    setCurrIndex(0)
                }, delayBeforeStart)
            }
        }

        return () => clearTimeout(timer)
    }, [displayText, currIndex, isTyping, text, typingSpeed, deleteSpeed, delayBeforeDelete, delayBeforeStart])
    return (
        <div>
            <span>{displayText}</span>
            <span>|</span>
        </div>
    )
}

export default SingleWordLoop