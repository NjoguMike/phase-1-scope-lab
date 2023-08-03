// Write your solution in this file!
var customerName = "bob"
console.log(customerName)

function upperCaseCustomerName(){
    customerName 
    return customerName.toUpperCase()
}
console.log(upperCaseCustomerName())

function setBestCustomer(){
    bestCustomer = "not bob"
    return bestCustomer
}


function overwriteBestCustomer(newName){
    bestCustomer = newName
    return bestCustomer
}

const leastFavoriteCustomer = "James"

function changeLeastFavoriteCustomer(changeName){
    leastFavoriteCustomer = changeName
    return leastFavoriteCustomer

}
