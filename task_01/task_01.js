// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками

const userBalanceById = {
    id: 657,
    userFirstName: 'Roman',
    userLastName: 'Golembiovski',
    userCurrentCardBALANCE: 6000,
}
const {id, userCurrentCardBALANCE} = userBalanceById;

function performBankOperations(user_balance, amountOfOperation, callback) {
    user_balance.userCurrentCardBALANCE = callback(user_balance.userCurrentCardBALANCE, amountOfOperation);
    return user_balance.userCurrentCardBALANCE;
};
// коллбеки

const userDepositOperation = (currentBalance, depositAmount) => {
    currentBalance += depositAmount
    return currentBalance;
};
const userWithdrawOperation = (currentBalance, depositAmount) => {
    currentBalance -= depositAmount;
    return currentBalance;
};

console.log(performBankOperations(userBalanceById, 2345, userDepositOperation));
console.log(performBankOperations(userBalanceById, 935, userWithdrawOperation));

console.log(userBalanceById);