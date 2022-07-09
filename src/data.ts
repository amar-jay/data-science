import ld from "lodash";
import {
  User,
  UserID,
  Friendships,
  friendshipLenById,
  FoaF,
  users,
  IntrestsTypes,
  Intrests,
  friendship_pairs,
  salaries_and_tenures,
} from "./consts";
import { DefaultDict, Print } from "./commonFunc";
import * as asciichart from "asciichart";
const numOfUsers = users.length + 0.0;

/**
 *List all friendships based on indexes
 */
const friendships: Friendships = {};

users.forEach((user) => {
  friendships[user.id] = [];
});
friendship_pairs.forEach((couple) => {
  const [first, second] = couple;
  friendships[first].push(second);
  friendships[second].push(first);
});

/**
 * get total number of friends of user
 */
function numldofldfriends(user: User) {
  const friendldids = friendships[user.id];
  return friendldids.length;
}

/**
 * total relationships overall
 */
let totalldconnections = 0;
users.map((user) => {
  totalldconnections += numldofldfriends(user);
});

/**
 *Find average connection per user
 */
const avgldconnections = totalldconnections / numOfUsers;

// Print("Average Relationship", avgldconnections);

Object.keys(friendships).forEach((id) =>
  friendshipLenById.push([Number(id), friendships[Number(id)].length])
);

/*
Sort FriendshipLenById by num of friends
*/
friendshipLenById.sort((a, b) => (a![1] > b![1] ? -1 : 1));

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
function friendsOfFriends(user: User): FoaF {
  const foaf: UserID[] = [];
  const friends = friendships[user.id] as UserID[];

  friends.forEach((friend) => foaf.push(...friendships[friend]));

  return {
    friends: friends,
    getAll: foaf,
    getUnique: new Set(foaf),
    byCount: ld.countBy(foaf),
  };
}
// Print("foaf: ", friendsOfFriends(users[6]));
/**
 * Finds the ids of all users who like the target interest.
 */
function usersWhoLike(intrest: IntrestsTypes) {
  return Intrests.filter((pair) => pair[1] === intrest).map((pair) => pair[0]);
}
// Print("Users who like machine learning", usersWhoLike("Java"));

/**
 * sort users by intrests
 */
function usersWhoLikeldDict() {
  const dict = new DefaultDict(Set);
  Intrests.forEach((intrest) => {
    Intrests.filter((pair) => pair[1] === intrest[1]).forEach((pair) => {
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
  const dic = {} as { [key: string]: IntrestsTypes[] };
  users.forEach((user) => {
    dic[user.id] = [];
  });
  Intrests.forEach((intrest) => {
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
function mostLikedIntrest(user: User) {
  const intrestDict = usersByIntrests();
  const intrests = intrestDict[user.id];
  const intrestCount = ld.countBy(intrests);
  const max = ld.maxBy(Object.keys(intrestCount), (key) => intrestCount[key]);
  return max;
}

// Print("Most liked intrest", mostLikedIntrest(users[3]));
// console.log(salaries_and_tenures)

// Plot("Salaries by Tenure Graph", salaries_and_tenures, false);

const salaries_tenures_DICT = salaries_and_tenures.map(([salary, tenure]) => {
  return { salary, tenure };
});
