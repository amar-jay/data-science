"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salaries_and_tenures = exports.friendship_pairs = exports.Intrests = exports.users = exports.friendshipLenById = void 0;
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
/**
 * Intrests of each user [user_idx, intrest ]
 */
exports.Intrests = [
    [0, "Hadoop"],
    [0, "Big Data"],
    [0, "HBase"],
    [0, "Java"],
    [0, "Spark"],
    [0, "Storm"],
    [0, "Cassandra"],
    [1, "NoSQL"],
    [1, "MongoDB"],
    [1, "Cassandra"],
    [1, "HBase"],
    [1, "Postgres"],
    [2, "Python"],
    [2, "scikit-learn"],
    [2, "scipy"],
    [2, "numpy"],
    [2, "statsmodels"],
    [2, "pandas"],
    [3, "R"],
    [3, "Python"],
    [3, "statistics"],
    [3, "regression"],
    [3, "probability"],
    [4, "machine learning"],
    [4, "regression"],
    [4, "decision trees"],
    [4, "libsvm"],
    [5, "Python"],
    [5, "R"],
    [5, "Java"],
    [5, "C++"],
    [5, "Haskell"],
    [5, "programming languages"],
    [6, "statistics"],
    [6, "probability"],
    [6, "mathematics"],
    [6, "theory"],
    [7, "machine learning"],
    [7, "scikit-learn"],
    [7, "Mahout"],
    [7, "neural networks"],
    [8, "neural networks"],
    [8, "deep learning"],
    [8, "Big Data"],
    [8, "artificial intelligence"],
    [9, "Hadoop"],
    [9, "Java"],
    [9, "MapReduce"],
    [9, "Big Data"],
];
const allIntrests = exports.Intrests.map((pair) => pair[1]);
/**
 * A couple that indicates that two indexes are friends
 */
exports.friendship_pairs = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [5, 7],
    [6, 8],
    [7, 8],
    [8, 9],
    [10, 11],
    [11, 3],
];
exports.salaries_and_tenures = [
    [83000, 8.7],
    [88000, 8.1],
    [48000, 0.7],
    [76000, 6],
    [69000, 6.5],
    [76000, 7.5],
    [60000, 2.5],
    [83000, 10],
    [48000, 1.9],
    [63000, 4.2],
];
