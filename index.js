let votes = [
    9, 9, 6, 1, 10, 5, 9, 10, 8, 2, 9, 6, 6, 6, 10, 2, 8, 9, 6, 4, 8, 3, 7, 1, 7,
    3, 10, 9, 1, 3, 9, 9, 5, 1, 3, 3, 5, 10, 3, 7, 9, 5, 5, 6, 9, 9, 2, 10, 3, 2,
    10, 9, 6, 9, 8, 9, 6, 8, 6, 4, 6, 1, 4, 10, 7, 5, 6, 5, 7, 7, 6, 10, 5, 9, 2,
    6, 2, 10, 2, 2, 5, 9, 4, 1, 7, 5, 4, 7, 6, 3, 6, 3, 3, 4, 3, 6, 8, 6, 8, 5,
  ];
  let member1 = 0,
    member2 = 0,
    member3 = 0,
    member4 = 0,
    member5 = 0,
    member6 = 0,
    member7 = 0,
    member8 = 0,
    member9 = 0,
    member10 = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === 1) {
      member1++;
    } else if (votes[i] === 2) {
      member2++;
    } else if (votes[i] === 3) {
      member3++;
    } else if (votes[i] === 4) {
      member4++;
    } else if (votes[i] === 5) {
      member5++;
    } else if (votes[i] === 6) {
      member6++;
    } else if (votes[i] === 7) {
      member7++;
    } else if (votes[i] === 8) {
      member8++;
    } else if (votes[i] === 9) {
      member9++;
    } else if (votes[i] === 10) {
      member10++;
    }
  }
  let maxVotes = Math.max(
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
    member7,
    member8,
    member9,
    member10
  );
  if (maxVotes === member1) {
    console.log("Member 1 wins ");
  } else if (maxVotes === member2) {
    console.log("Member 2 wins ");
  } else if (maxVotes === member3) {
    console.log("Member 3 wins");
  } else if (maxVotes === member4) {
    console.log("Member 4 wins");
  } else if (maxVotes === member5) {
    console.log("Member 5 wins");
  } else if (maxVotes === member6) {
    console.log("Member 6 wins ");
  } else if (maxVotes === member7) {
    console.log("Member 7 wins");
  } else if (maxVotes === member8) {
    console.log("Member 8 wins");
  } else if (maxVotes === member9) {
    console.log("Member 9 wins with ");
  } else {
    console.log("Member 10 wins");
  }