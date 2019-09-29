import React, { FunctionComponent } from 'react';
import styled from 'styled-components'

type WrapperProps = {
    type: string
    amount: number
}

const Wrapper = styled.div<WrapperProps>`
    width: 15px;
    height: 15px;
    background: #CCCCCC;
    margin: 4px;
    background: ${props => props.amount === 0 ? '#CCCCCC' : props.type === 'success' ? 'green' : 'red'};
    ${props => props.amount && `
        opacity: ${props.amount/ 10000}
    `}
`

type Props = {
    title: string
    amount?: number
    type?: string
}

export const Cell: FunctionComponent<Props>= ({ title, type, amount }) => {
    return (
        <Wrapper title={`${title} amount: ${amount}`} type={type} amount={amount}>

        </Wrapper>
    )
}