import { FETCH_MONTH, IStore, MonthActionTypes } from 'store/types'
import Data from '../evezy-transactions.json'
import { createSelector } from 'reselect'

const initialState: IStore = {
    '01': [],
    '02': [],
    '03': [],
    '04': [],
    '05': [],
    '06': [],
    '07': [],
    '08': [],
    '09': [],
    '10': [],
    '11': [],
    '12': [],
}

export const Reducer = (state = initialState, action: MonthActionTypes) => {
    switch(action.type) {
        case FETCH_MONTH: {
            return { ...state, [action.month]: Data.filter(({ date } : { date: string} ) => {
                return date.split('-')[1] === action.month
            })}
        }
        default: return state
    }
}

const getJan = (state: IStore) => state['01']
const getFeb = (state: IStore) => state['02']
const getMar = (state: IStore) => state['03']
const getApr = (state: IStore) => state['04']
const getMay = (state: IStore) => state['05']
const getJun = (state: IStore) => state['06']
const getJul = (state: IStore) => state['07']
const getAug = (state: IStore) => state['08']
const getSep = (state: IStore) => state['09']
const getOct = (state: IStore) => state['10']
const getNov = (state: IStore) => state['11']
const getDec = (state: IStore) => state['12']

export const getJanDays = createSelector(
    getJan,
    jan => {
        const totalDays = new Date(2019, 1, 0).getDate()
       return  getTotals(totalDays,jan,'01')
    }
)

export const getFebDays = createSelector(
    getFeb,
    feb => {
        const totalDays = new Date(2019, 2, 0).getDate()
        return getTotals(totalDays, feb, '02')
    }
)

export const getMarDays = createSelector(
    getMar,
    mar => {
        const totalDays = new Date(2019, 3, 0).getDate()
        return getTotals(totalDays, mar, '03')
    }
)

export const getAprDays = createSelector(
    getApr,
    apr => {
        const totalDays = new Date(2019, 4, 0).getDate()
        return getTotals(totalDays, apr, '04')
    }
)

export const getMayDays = createSelector(
    getMay,
    may => {
        const totalDays = new Date(2019, 5, 0).getDate()
        return getTotals(totalDays, may, '05')
    }
)

export const getJunDays = createSelector(
    getJun,
    jun => {
        const totalDays = new Date(2019, 6, 0).getDate()
        return getTotals(totalDays, jun, '06')
    }
)

export const getJulDays = createSelector(
    getJul,
    jul => {
        const totalDays = new Date(2019, 7, 0).getDate()
        return getTotals(totalDays, jul, '07')
    }
)

export const getAugDays = createSelector(
    getAug,
    aug => {
        const totalDays = new Date(2019, 8, 0).getDate()
        return getTotals(totalDays, aug, '08')
    }
)

export const getSepDays = createSelector(
    getSep,
    sep => {
        const totalDays = new Date(2019, 9, 0).getDate()
        return getTotals(totalDays, sep, '09')
    }
)

export const getOctDays = createSelector(
    getOct,
    oct => {
        const totalDays = new Date(2019, 10, 0).getDate()
        return getTotals(totalDays, oct, '10')
    }
)

export const getNovDays = createSelector(
    getNov,
    nov => {
        const totalDays = new Date(2019, 12, 0).getDate()
        return getTotals(totalDays, nov, '12')
    }
)

export const getDecDays = createSelector(
    getDec,
    dec => {
        const totalDays = new Date(2019, 11, 0).getDate()
        return getTotals(totalDays, dec, '11')
    }
)



// helper function

const getTotals = (totalDays: number, selector: any, month: string) => {
    const days: any = []

    for (let i = 1; i <= totalDays; i++) {
        const currentDay = selector.filter(({ date }: { date: string }) => {
            return date === `2019-${month}-${i}`
        })
        days.push(currentDay)
    }

    const filteredDays = days.filter((val: any) => val.length)
    if (filteredDays.length) {
        const totalSuccess = filteredDays.map((arr: any) => {
            const totals = arr.reduce((total: any, record: any) => {
                const { transactionType, amount } = record
                if (transactionType === 'success') {
                    return total += amount
                } else {
                    return total
                }
            }, 0)
            return { date: arr[0].date, totals }
        })

        const totalFailed = filteredDays.map((arr: any) => {
            const totals = arr.reduce((total: any, record: any) => {
                const { transactionType, amount } = record
                if (transactionType === 'failed') {
                    return total += amount
                } else {
                    return total
                }
            }, 0)
            return { date: arr[0].date, totals }
        })

        return {
            totalSuccess,
            totalFailed
        }
    }

}