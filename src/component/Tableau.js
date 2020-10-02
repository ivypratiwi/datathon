import React, { useEffect, useRef } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
import jumbo1 from '../img/wallpaper.jpg';


const { tableau } = window;

export default function Tableau() {
    const ref = useRef(null);
    const url = 'https://public.tableau.com/views/IndustryScanner-Datathon/Dashboard1'
    let options
    window.innerWidth <= 769 ? options = { width: "100%", height: "1700px", mobile: "yes" } : options = { width: "100%", height: "800px" }

    function initViz() {
        new tableau.Viz(ref.current, url, options)
    }

    useEffect(() => {
        initViz();
    }, []);

    return (
        <Styles>
            <Jumbotron fluid className="jumbotron">
                <div className="tableau-div" ref={ref}></div>
            </Jumbotron>
        </Styles>
    )
}

const Styles = styled.div`
@media (max-width: 1920px) {
    .jumbotron{
        background: url(${jumbo1})fixed bottom;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom:0px;
    }
    .tableau-div{
        padding-top:2%;
    }
}
@media (max-width: 1500px) {
.tableau-div{
    padding-top:1%;
}
}
@media (max-width: 1024px) {
    .jumbotron{
        height: 100vh;
    }
    .tableau-div{
        padding-top:7%;
    }
}
`

