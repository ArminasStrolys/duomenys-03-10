import firebase from "../firebase";

export const addExpense = (data) => {
    firebase
    .firebase()
    .collection('expenses')
    .add(data)

}

export const getAllExpenses = (onExpensesReturn) => {
    firebase
    .firestore()
    .collection('expenses')
    .onSnapshot((snapshot) => {
        const newExpenses = snapshot.docs.map((doc)=> ({
            id:doc.id,
            ...doc.data()
        }))
        onExpensesReturn(newExpenses)
    })
}

export const getExpenseById = (item, id) => {
    firebase
    .firestore
    .collection('expenses')
    .doc(id)
    .get()
    .then((docRef) => {item(docRef.data())})
}

export const updateExpense = (id, data) => {
    firebase
    .firestore()
    .collection('expenses')
    .doc(id)
    .set(data)
}

export const deleteExpense = (id) => {
    firebase
    .firestore()
    .collection('expenses')
    .doc(id)
    .delete()
}