document.getElementById("form").addEventListener("submit", login);

function login(event){
  if (event){
    event.preventDefault();
    validate(value("email"), value("password"));
  }
}

function value(element){
  return document.getElementById(element).value;
}

function validate(email, password){
  if (email.length === 0){
    document.getElementById("email-error").innerHTML = "Required field";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (password.length === 0){
    document.getElementById("password-error").innerHTML = "Required field";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
  if (email.length > 0 && password.length > 0 && email !== "email"  && password !== "p1"){
    document.getElementById("submit-error").innerHTML = "Invalid login credentials";
  }
  if (email === "email" && password === "p1"){
    if (document.getElementById("remember").checked){
      alert("You're logged in and your credentials will be remembered");
    } else {
      alert("You're logged in (for now)");
    }
    return true;
  } else {
    return false;
  }
}

// Sample input, what I could recall of the presented structure
let input = [
  {id: 1, pid: null},
  {id: 7, pid: 4},
  {id: 4, pid: 2},
  {id: 6, pid: 4},
  {id: 3, pid: 1},
  {id: 8, pid: 3},
  {id: 2, pid: 1},
  {id: 5, pid: 2},
];

function buildTree(){
  // Treemap serves as both hash map and tree builder
  // It has  flat structure of the nodes themselves to use for reference pointers
  // Because the nodes are passed by reference, creating the flat tree also creates the real tree
  let treeMap = {};
  // When there is no parent id, I can know that it's the rootnode
  // Knowing the rootnode (whatever content id it has) lets me return only it
  let rootNode;
  for (let i = 0; i < input.length; i++){
    const pid = input[i].pid;
    const id = input[i].id;
    // Assigning rootnode so that I can return only that entry of the hash map
    if (!pid){
      rootNode = id
    }
    // If the treemap doesn't have this node, add it
    if (!treeMap[id]){
      treeMap[id] = {id: id, children: []};
    }
    // If the treemap is missing the parent node, we can add it in too
    // If the parent node isn't missing, we'll just push this node onto the list of its children
    if (!treeMap[pid]){
      treeMap[pid] = {id: pid, children: [treeMap[id]]};
    } else {
      treeMap[pid].children.push(treeMap[id]);
    }
  }
  // Presenting the data on the DOM
  document.getElementById("input").innerHTML = JSON.stringify(input, null, 4);
  document.getElementById("output").innerHTML = JSON.stringify(treeMap[1], null, 4);

  // We determined the id of the rootnode above, so regardless of the content we can find it and return it here
  console.log(treeMap[rootNode]);
  return treeMap[rootNode];
}

buildTree();
