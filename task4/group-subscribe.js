const myGroups = []; // массив для хранения подписок на группы

const groupList = [{
    groupName: "Habrahabr"
  },
  {
    groupName: "Web2018"
  },
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(group) {
  for (let key of groupList.values()) {
    if (key.groupName == group && myGroups.indexOf(group) == -1) {
      myGroups.push(group);
      console.log("you are just subscribe on " + group);
      return 0;
    }
  }
  console.log("can't subscribe on " + group + " group");
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  if (myGroups.indexOf(group) != -1) {
    myGroups.splice(myGroups.indexOf(group), 1);
    console.log("you are just unsubscribe for " + group);
  } else
    console.log("can't unsubscribe on " + group);
}

function test_() {
  console.log("\nfunction subscribeGroup(" + "Habrahabr" + ")");
  console.log(subscribeGroup("Habrahabr"));
  console.log("\nfunction subscribeGroup(" + "Satan" + ")");
  console.log(subscribeGroup("Satan"));
  console.log("\nfunction subscribeGroup(" + "Web2018" + ")");
  console.log(subscribeGroup("Web2018"));
  console.log("\nfunction subscribeGroup(" + "Web2018" + ")");
  console.log(subscribeGroup("Web2018"));

  console.log("\nfunction unsubscribeGroup(" + "Satan" + ")");
  console.log(unsubscribeGroup("Satan"));
  console.log(myGroups);
  console.log("\nfunction unsubscribeGroup(" + "Habrahabr" + ")");
  console.log(unsubscribeGroup("Habrahabr"));
  console.log(myGroups);
}
