// Code your solution in this file!
const headquarter = 42
const block = 264
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - headquarter)
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(pickupLocation){
    return (Math.abs(pickupLocation-headquarter) * block)
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    return (Math.abs(destination-start) * block)
}
distanceTravelledInFeets()
function calculatesFarePrice(start, destination){
    const feet = (Math.abs(destination-start) * block)
    if(feet < 400){
        return 0
    }else if(feet < 2000){
        return 2.56
    }else if(feet < 2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}