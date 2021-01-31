import React, { useState, useEffect } from "react"
import { database } from "../firebase"

const createExpense = async (userId, content) => {
        let ref = await database.ref('users/' + userId + '/expenses/' + content.year + '/' + content.month).push(content.data);
        return ref.key;
}

const updateExpense = async (userId, expenseId, content) => {
        await database.ref("users/" + userId + "/expenses/" + content.year + "/" + content.month + "/" + expenseId)
          .set(content.data);
}

const createContact = (userId, content) => {
    database.ref('users/' + userId + '/contact').set(content);
    //throw "Erro ao salvar dados"
}

const readContact = (userId, callBack) => {
    var contactRef = database.ref('users/' + userId + '/contact');
    contactRef.on('value', (snapshot) => {
        const data = snapshot.val();
        callBack(data);
    });
}

const getExpenses = async (userId, content) => {
    var url = 'users/' + userId + '/expenses/' + content.year + '/' + content.month
    console.log("====url: " + url)
    var contactRef = database.ref(url)
    const snapshot = await contactRef.once('value')
    console.log(snapshot.val())
    var temp = snapshot.val()
    var temp_keys = Object.keys(temp)
    var values_to_return = temp_keys.map(key => {
        return {
            id: key,
            ...temp[key]
        }
    })
    return values_to_return
    //return Object.values(snapshot.val())
}

const readContactSync = async (userId) => {
    var contactRef = database.ref('users/' + userId + '/contact');
    const snapshot = await contactRef.once('value')
    return snapshot.val()
}

export const databaseService = {
    createExpense,
    updateExpense,
    createContact,
    readContact,
    readContactSync,
    getExpenses

}