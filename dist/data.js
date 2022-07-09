"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const consts_1 = require("./consts");
const commonFunc_1 = require("./commonFunc");
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
function numldofldfriends(user) {
    const friendldids = friendships[user.id];
    return friendldids.length;
}
/**
 * total relationships overall
 */
let totalldconnections = 0;
consts_1.users.map((user) => {
    totalldconnections += numldofldfriends(user);
});
/**
 *Find average connection per user
 */
const avgldconnections = totalldconnections / numOfUsers;
// Print("Average Relationship", avgldconnections);
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
    const foaf = [];
    const friends = friendships[user.id];
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
/**
 * sort users by intrests
 */
function usersWhoLikeldDict() {
    const dict = new commonFunc_1.DefaultDict(Set);
    consts_1.Intrests.forEach((intrest) => {
        consts_1.Intrests.filter((pair) => pair[1] === intrest[1]).forEach((pair) => {
            dict[pair[1]].add(pair[0]);
            //TODO: resolve the type error
        });
    });
    return dict;
}
// Print("Sort of users by likes", usersWhoLikeldDict());
/**
 *  A dict containg Users by intrests
 */
function usersByIntrests() {
    const dic = {};
    consts_1.users.forEach((user) => {
        dic[user.id] = [];
    });
    consts_1.Intrests.forEach((intrest) => {
        dic[intrest[0]].push(intrest[1]);
    });
    return dic;
}
// Print("Users and thier intrests", ld.countBy(usersByIntrests()[3]));
// Keep count of how many times we see each other user.
/**
 * find the number 1 intrest of the set user
 * @param user User to find friends of
 *
 */
function mostLikedIntrest(user) {
    const intrestDict = usersByIntrests();
    const intrests = intrestDict[user.id];
    const intrestCount = lodash_1.default.countBy(intrests);
    const max = lodash_1.default.maxBy(Object.keys(intrestCount), (key) => intrestCount[key]);
    return max;
}
// Print("Most liked intrest", mostLikedIntrest(users[3]));
// console.log(salaries_and_tenures)
// Plot("Salaries by Tenure Graph", salaries_and_tenures, false);
const salaries_tenures_DICT = consts_1.salaries_and_tenures.map(([salary, tenure]) => {
    return { salary, tenure };
});
const _averageSalaryByBucket = {
    "tenure is less than 2": [],
    "between 2 and 5": [],
    "between 5 and 10": [],
    "tenure is greater than 10": [],
};
const averageSalaryByBucket_DICT = {
    "between 2 and 5": 0,
    "between 5 and 10": 0,
    "tenure is greater than 10": 0,
    "tenure is less than 2": 0,
};
consts_1.salaries_and_tenures.forEach(([salary, tenure]) => {
    _averageSalaryByBucket[(0, commonFunc_1.tenureBucket)(tenure)].push(salary);
});
Object.keys(_averageSalaryByBucket).forEach((label) => (averageSalaryByBucket_DICT[label] = lodash_1.default.mean(_averageSalaryByBucket[label])));
(0, commonFunc_1.Print)("Average Salary Bucket", averageSalaryByBucket_DICT);
