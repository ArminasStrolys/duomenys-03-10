import firebase from "../utilities/firebase";

export const addExpense = (data) => {

    firebase
    .firebase()
    .collection('expenses')
    .add(data)

}