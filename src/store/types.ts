export const FETCH_MONTH = 'FETCH_MONTH'

export interface IDay{
    date: string
    day: string
    type: string
    amount: number
    transactionType: string
}

export interface IStore {
    "01": [IDay] | []
    "02": [IDay] | []
    "03": [IDay] | []
    "04": [IDay] | []
    "05": [IDay] | []
    "06": [IDay] | []
    "07": [IDay] | []
    "08": [IDay] | []
    "09": [IDay] | []
    "10": [IDay] | []
    "11": [IDay] | []
    "12": [IDay] | []
}

export interface IFetchMonthAction {
    type: typeof FETCH_MONTH
    month: string
}

export type MonthActionTypes = IFetchMonthAction