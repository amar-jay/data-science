"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.friendshipLenById = void 0;
function stringLiterals(...args) {
    return args;
}
const values = stringLiterals("A", "B");
//CONSTANTS
/**
 * A list of number of friends by id [user_id, number_of_friends]
 * sorted by the number of friends
 */
exports.friendshipLenById = [];
/**
 * A list of users
 */
exports.users = [
    { id: 0, name: "Hero" },
    { id: 1, name: "Dunn" },
    { id: 2, name: "Sue" },
    { id: 3, name: "Chi" },
    { id: 4, name: "Thor" },
    { id: 5, name: "Clive" },
    { id: 6, name: "Hicks" },
    { id: 7, name: "Devin" },
    { id: 8, name: "Kate" },
    { id: 9, name: "Manan" },
    { id: 10, name: "Hicks" },
    { id: 11, name: "Klein" },
];
