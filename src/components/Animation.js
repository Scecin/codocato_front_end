import React, { useEffect } from "react"
import lottie from "lottie-web"
import lesson1_intro from "../assets/lesson1_intro.json"
import styled from "styled-components"

const AnimationBlock = styled.div `
height: 100vh;

`

const Animation = () => {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#lesson1_intro"),
            animationData: lesson1_intro,
            renderer: "svg", // "canvas", "html"
            loop: false, // boolean
            autoplay: true, // boolean
        });
    }, [])

    return (
        <>
            <AnimationBlock id = "lesson1_intro"/>
        </>
    )
}

export default Animation