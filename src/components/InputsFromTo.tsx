import React from 'react'
import styled from 'styled-components';


const Container = styled.div`

`;

export default function InputsFromTo() {
    return (
        <div id="fromTo">
            <label>De</label>
            <input type="number" />
            <label>até</label>
            <input type="number" />
        </div>

    )
}
