/** creates a bank account given a PIN number and an initial deposit amount
 * return value is an object with 4 methods on it:
 *      checkBalance -- given the correct pin, return the current balance
 *                      else return "invalid PIN"
 *      deposit -- given the correct pin and a deposit amount, increments the account balance by the amount
 *                  if pin is invalid returns "Invalid PIN"
 *      withdraw -- decrement the account balance by the amount
 *      changePin -- given old PIN and new PIN, changes the PIN number to new PIN etc
 */

function createAccount(pin, amount = 0) {
    return {
        checkBalance: function (pinEntered) {
            if (pinEntered === pin) {
                return `$${amount}`;
            } else {
                return `Invalid PIN.`;
            }
        },
        deposit: function (pinEntered, depositAmt) {
            if (pinEntered === pin) {
                amount += depositAmt;
                return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
            } else {
                return `Invalid PIN.`;
            }
        },
        withdraw: function (pinEntered, withdrawAmt) {
            if (pinEntered === pin) {
                if (withdrawAmt <= amount) {
                    amount -= withdrawAmt;
                    return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
            } else {
                return `Invalid PIN.`;
            }
        },
        changePin: function (oldPIN, newPIN) {
            if (oldPIN === pin) {
                pin = newPIN;
                return 'PIN successfully changed!';
            } else {
                return `Invalid PIN.`;
            }
        }
    }
}

module.exports = { createAccount };
