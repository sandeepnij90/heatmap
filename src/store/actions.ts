import { FETCH_MONTH } from 'store/types'

export const fetchMonth = (month: string) => {
    return {
        type: FETCH_MONTH,
        month
    }
}