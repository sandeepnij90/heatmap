import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMonth } from 'store/actions'
import styled from 'styled-components'
import { Cell } from './Cell';

type Props = {
    month: string
    monthTitle: string
    selector?: any
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 25px 25px 25px 25px 25px 25px 25px;
    width: 115px;
    grid-template-columns: 100%    
`

const Day = styled.div`
    margin-top: 2px;
    display: flex;
        justify-content: flex-end;
`

const Month = styled.p`
    margin:0;
    padding:0;
    display: grid;
    jutify-items: center; 
    text-align :center;
`

export const Column: FunctionComponent<Props> = ({ month, monthTitle, selector }) => {
    const dispatch = useDispatch()

    const renderDay = (day: number) => {
        const cells = []
        for (let i =1; i<= getTotalDays(); i++) {
            const date = new Date(`2019-${month}-${i}`)

            const selectorLoaded = selector && selector.totalSuccess && selector.totalFailed
            const totalSuccess = selectorLoaded && selector.totalSuccess.filter((val: any) => val.date === `2019-${month}-${i}`)[0]
            const totalFailed = selectorLoaded && selector.totalFailed.filter((val: any) => val.date === `2019-${month}-${i}`)[0]

            const type = (totalSuccess && totalFailed) && totalSuccess.totals > totalFailed.totals ? 'success' : 'failed'
            const amount = (totalSuccess && totalFailed) ? totalSuccess.totals > totalFailed.totals ? totalSuccess.totals : totalFailed.totals : 0
            if (day === date.getDay()) {
                cells.push(<Cell title={`2019-${month}-${i}`} key={i} type={type} amount={amount} />) 
            }
        }
        return cells
    }


    const getTotalDays = () => {
        return new Date(2019, parseInt(month), 0).getDate()
    }

    useEffect(() => {
        dispatch(fetchMonth(month))
    },[])

    return (
        <Wrapper>
            <Day>{renderDay(0)}</Day>
            <Day>{renderDay(1)}</Day>
            <Day>{renderDay(2)}</Day>
            <Day>{renderDay(3)}</Day>
            <Day>{renderDay(4)}</Day>
            <Day>{renderDay(5)}</Day>
            <Day>{renderDay(6)}</Day>
            <Month>{monthTitle}</Month>
        </Wrapper>
    )
}