import React, { useState, useEffect } from "react"
import { database } from "../firebase"

const createContact = (userId, content) => {
    database.ref('users/' + userId + '/contact').set(content);
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
    console.log("read async ==========")
    console.log(snapshot.val())
    return snapshot.val()
}

export const databaseService = {
    createContact,
    readContact,
    readContactSync

}