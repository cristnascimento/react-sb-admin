import React, { useState, useEffect } from "react"
import { database } from "../firebase"

const createContact = (userId, content) => {
    database.ref('users/' + userId + '/contact').set(content);
}

export const databaseService = {
    createContact
}