export const getModificator = (val: number) => {

    if (val == 1) return -5
    else if (val >= 2 && val <= 3) return -4
    else if (val >= 4 && val <= 5) return -3
    else if (val >= 6 && val <= 7) return -2
    else if (val >= 8 && val <= 9) return -1
    else if (val >= 10 && val <= 11) return 0
    else if (val >= 12 && val <= 13) return 1
    else if (val >= 14 && val <= 15) return 2
    else if (val >= 16 && val <= 17) return 3
    else if (val >= 18 && val <= 19) return 4
    else if (val >= 20 && val <= 21) return 5
    else if (val >= 22 && val <= 23) return 6
    else if (val >= 24 && val <= 25) return 7
    else if (val >= 26 && val <= 27) return 8
    else if (val >= 28 && val <= 29) return 9
    else if (val == 30 ) return 10

}
