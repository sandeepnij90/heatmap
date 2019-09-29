import React, { FunctionComponent } from 'react'
import Data from '../evezy-transactions.json'
import { Column } from 'components/Column'
import styled from 'styled-components'
import { getJanDays, getFebDays, getMarDays, getAprDays, getMayDays, getJunDays, getJulDays, getAugDays, getSepDays, getOctDays, getNovDays, getDecDays } from 'store/reducer'
import { useSelector } from 'react-redux';

const Frame = styled.div`
    display: grid;
    grid-template-columns: 100px 1500px;
`

const Days = styled.div`
    display: grid;
    grid-template-rows: 25px 25px 25px 25px 25px 25px 25px;
    align-items: center;

`

const Columns = styled.div`
    display:grid;
    grid-template-columns: 115px 115px 115px 115px 115px 115px 115px 115px 115px 115px 115px 115px;
    grid-column-gap: 15px;
`

const Day = styled.p`
    margin: 0 10px 0 0;
    padding: 0;
    text-align: right;
`

export const App: FunctionComponent = () => {

    const getDate = (chosenDate: any) => {
      return  Data.filter(({ date }: any) => {
         return date === chosenDate
       })
    }

    return (
        <Frame>
            <Days>
                <Day>Sunday</Day>
                <Day>Monday</Day>
                <Day>Tuesday</Day>
                <Day>Wednesday</Day>
                <Day>Thursday</Day>
                <Day>Friday</Day>
                <Day>Saturday</Day>
            </Days>
            <Columns>
                <Column month="01" monthTitle="January" selector={useSelector(getJanDays)} />
                <Column month="02" monthTitle="February" selector={useSelector(getFebDays)} />
                <Column month="03" monthTitle="March" selector={useSelector(getMarDays)}/>
                <Column month="04" monthTitle="April" selector={useSelector(getAprDays)} />
                <Column month="05" monthTitle="May" selector={useSelector(getMayDays)} />
                <Column month="06" monthTitle="June" selector={useSelector(getJunDays)} />
                <Column month="07" monthTitle="July" selector={useSelector(getJulDays)}/>
                <Column month="08" monthTitle="August" selector={useSelector(getAugDays)}/>
                <Column month="09" monthTitle="September" selector={useSelector(getSepDays)} />
                <Column month="10" monthTitle="October" selector={useSelector(getOctDays)} />
                <Column month="11" monthTitle="November" selector={useSelector(getNovDays)} />
                <Column month="12" monthTitle="December" selector={useSelector(getDecDays)} />
            </Columns>
        </Frame>
    )
}

