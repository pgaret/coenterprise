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
      alert("You're logged in (for now)")
    }
    return true;
  } else {
    return false;
  }
}

let input = [
  {id: 7, p_id: 4},
  {id: 4, p_id: 2},
  {id: 6, p_id: 4},
  {id: 3, p_id: 1},
  {id: 1, p_id: null},
  {id: 8, p_id: 3},
  {id: 2, p_id: 1},
  {id: 5, p_id: 2},
]

let idealTree =
{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: [

          ]
        }
      ]
    },
    {
      id: 3,
      children: [
        {
          id: 8,
          children: []
        }
      ]
    }
  ]
}

function buildTree(){
  let treeMap = {}
  let tree = {}
  for (let i = 0; i < input.length; i++){
    const pid = input[i].p_id
    const id = input[i].id
    if (pid === null){
    }
    if (!treeMap[id]){
      treeMap[id] = {id: id, children: []}
    }
    treeMap[id].parent = pid
    if (!treeMap[pid]){
      treeMap[pid] = {id: pid, children: [treeMap[id]]}
    } else {
      treeMap[pid].children.push(treeMap[id])
    }
  }
  for (let i = 0; i < treeMap.length; i++){

  }
  console.log(treeMap)
}

buildTree()