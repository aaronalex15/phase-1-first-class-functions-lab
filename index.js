// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = (postTwoDrivers) => {
    return postTwoDrivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (farePrice) => {
    return function(fare) {
    return farePrice * fare
}
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2

}

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3
}

const selectDifferentDrivers = function(driversArray, driverChoice) {
    return driverChoice(driversArray)

}