import React, { useState, useEffect } from "react"
import { database } from "../firebase"

const createExpense = async (userId, content) => {
    if (content.id) {
        await database.ref('users/' + userId + '/expenses/' + content.year + '/' + content.month + '/' + content.id).set(content.data);
    } else {
        let ref = await database.ref('users/' + userId + '/expenses/' + content.year + '/' + content.month).push(content.data);
        return ref.key;
    }
    //throw "Erro ao salvar dados"
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

const readContactSync = async (userId) => {
    var contactRef = database.ref('users/' + userId + '/contact');
    const snapshot = await contactRef.once('value')
    return snapshot.val()
}

export const databaseService = {
    createExpense,
    createContact,
    readContact,
    readContactSync

}