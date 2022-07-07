"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const consts_1 = require("./consts");
const numOfUsers = consts_1.users.length + 0.0;
/**
 *List all friendships based on indexes
 */
const friendships = {};
consts_1.users.forEach((user) => {
    friendships[user.id] = [];
});
consts_1.friendship_pairs.forEach((couple) => {
    const [first, second] = couple;
    friendships[first].push(second);
    friendships[second].push(first);
});
/**
 * get total number of friends of user
 */
function num_of_friends(user) {
    let friend_ids = friendships[user.id];
    return friend_ids.length;
}
/**
 * total relationships overall
 */
let total_connections = 0;
consts_1.users.map((user) => {
    total_connections += num_of_friends(user);
});
/**
 *Find average connection per user
 */
const avg_connections = total_connections / numOfUsers;
// Print("Average Relationship", avg_connections);
Object.keys(friendships).forEach((id) => consts_1.friendshipLenById.push([Number(id), friendships[Number(id)].length]));
/*
Sort FriendshipLenById by num of friends
*/
consts_1.friendshipLenById.sort((a, b) => (a[1] > b[1] ? -1 : 1));
// Print(
//   "Sorted FriendshipLen from max to min \n[UserId, num of friends]",
//   friendshipLenById
// );
/*
One way to think of what we’ve done is as a way of
identifying people who are somehow central to the network.
In fact, what we’ve just computed is the network metric
degree centrality
*/
/**
 * Find Friends of friends by the User
 */
function friendsOfFriends(user) {
    let foaf = [];
    let friends = friendships[user.id];
    friends.forEach((friend) => foaf.push(...friendships[friend]));
    return {
        friends: friends,
        getAll: foaf,
        getUnique: new Set(foaf),
        byCount: lodash_1.default.countBy(foaf),
    };
}
// Print("foaf: ", friendsOfFriends(users[6]));
/**
 * Finds the ids of all users who like the target interest.
 */
function usersWhoLike(intrest) {
    return consts_1.Intrests.filter((pair) => pair[1] === intrest).map((pair) => pair[0]);
}
// Print("Users who like machine learning", usersWhoLike("Java"));
