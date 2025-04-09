import React, { useEffect, useState } from 'react'

const MultiPleWordsLoop = ({
    words=["Premchand.", "Weather.", "Remcel."],
    typingSpeed=150,
    deleteSpeed=100,
    delayBeforeDelete=1500,
    delayBeforeStart=500
}) => {

    const [displayText, setDisplayText] = useState("");
    const [currIndex, setCurrIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const currentWord = words[wordIndex];

    useEffect(() => {
        if(!words || words.length === 0 || !currentWord) return;

        let timer;

        if(isTyping){
            if(currIndex < currentWord.length){
                timer = setTimeout(() => {
                    setDisplayText(prevText => prevText + currentWord.charAt(currIndex));
                    setCurrIndex(currIndex => currIndex + 1)
                }, typingSpeed)
            }else{
                timer = setTimeout(() => {
                    setIsTyping(false)
                }, delayBeforeDelete)
            }
        }else{
            if(displayText.length > 0){
                timer = setTimeout(() => {
                    setDisplayText(prevText => prevText.slice(0, -1))
                }, deleteSpeed)
            }else{
                timer = setTimeout(() => {
                    const nextWordIndex = (wordIndex + 1) % words.length;
                    setWordIndex(nextWordIndex);
                    setIsTyping(true)
                    setCurrIndex(0)
                }, delayBeforeStart)
            }
        }
    
        return () => clearTimeout(timer);
    }, [currIndex, 
        displayText, 
        isTyping, 
        wordIndex, 
        words, 
        currentWord, 
        typingSpeed, 
        deleteSpeed, 
        delayBeforeDelete, 
        delayBeforeStart])
    return (
        <div>
            <span>{displayText}</span>
            <span>|</span>
        </div>
    )
}

export default MultiPleWordsLoop