const myGroups = []; // массив для хранения подписок на группы

const groupList = [{
    groupName: "Habrahabr",
    subscribers:0,
    id:1
  },
  {
    groupName: "Web2018",
    subscribers:0,
    id:2
  },
  {
    groupName: "Web2018",
    subscribers:0,
    id:3
  },
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(id) {
  group="this";
  id_chek=0;
  if(myGroups.indexOf(id) == -1){
  for (let key of groupList.values()) {
    if (key.id == id) {
      key.subscribers=key.subscribers+1;
      group=key.groupName
      myGroups.push(group,id);
      console.log("you are just subscribe on " + group);
      id_chek=1;
      return 0;
    }
  }
}
else {
  console.log("you have already subscribed to " + group + " group");
  return 0;
}
  if (id_chek == 0){
  console.log("invalid index specified");
}
  console.log("can't subscribe on " + group + " group");
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(id) {
  group="this";
  if (myGroups.indexOf(id) != -1) {
    for (let key of groupList.values()) {
      if (id==key.id) {
        key.subscribers=key.subscribers-1;
        group=key.groupName;
      }
    }
    myGroups.splice(myGroups.indexOf(id), 1);
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
