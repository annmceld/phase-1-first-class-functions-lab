// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fareMultiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}
