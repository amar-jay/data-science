import _ from "lodash";
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
} from "./consts";
import { DefaultDict, Print } from "./commonFunc";
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
function num_of_friends(user: User) {
  let friend_ids = friendships[user.id];
  return friend_ids.length;
}

/**
 * total relationships overall
 */
let total_connections = 0;
users.map((user) => {
  total_connections += num_of_friends(user);
});

/**
 *Find average connection per user
 */
const avg_connections = total_connections / numOfUsers;

// Print("Average Relationship", avg_connections);

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
  let foaf: UserID[] = [];
  let friends = friendships[user.id] as UserID[];

  friends.forEach((friend) => foaf.push(...friendships[friend]));

  return {
    friends: friends,
    getAll: foaf,
    getUnique: new Set(foaf),
    byCount: _.countBy(foaf),
  };
}
// Print("foaf: ", friendsOfFriends(users[6]));
/**
 * Finds the ids of all users who like the target interest.
 */
function usersWhoLike(intrest: IntrestsTypes) {
  return Intrests.filter((pair) => pair[1] === intrest).map((pair) => pair[0]);
}
Print("Users who like machine learning", usersWhoLike("Java"));

/**
 * Using DefaultDict to generate for all
 */
function usersWhoLike_Dict() {
  let dict = new DefaultDict(Set);
  Intrests.forEach((intrest) => {
    Intrests.filter((pair) => pair[1] === intrest[1]).forEach((pair) => {
      dict[pair[1]].add(pair[0]);
      // resolve the type error
    });
  });

  return dict;
}
class g {}

Print("Sort of users by likes", usersWhoLike_Dict());
