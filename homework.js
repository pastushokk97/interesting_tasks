async function infoAboutUsers(url_users,url_posts) {

  const result = [];
  let checkEmai = false;

  const requestUsers = await fetch(url_users, {
    method:'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  });
  const responseUsers = await requestUsers.json();

  for (let i = 0; i < responseUsers.length; i++) {
    if (responseUsers[i].email === 'shaa@melissa.com') checkEmail = true;
  }

  if (!checkEmai) {
    const requsetAddPerson = await fetch(url_users, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id:responseUsers.length + 1,
        email:'shaa@melissa.com',
      })
    })
    responseUsers.push({
      id:responseUsers.length + 1,
      email:'shaa@melissa.com',
    })
  }

  for (let i = 0; i < responseUsers.length; i++) {
  result.push({
    id:responseUsers[i].id,
    name:responseUsers[i].name,
    email:responseUsers[i].email,
    });
  }

  const requestPosts = await fetch(url_posts, {
    method:'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });

  const responsePosts = await requestPosts.json();
  
  let j = 0;
  let postsCount = 1;

  for (let i = 0; i < responsePosts.length; i++ ) {

    if (responsePosts[i].userId === result[j].id) {
      if (responsePosts[i].title.length > 50) responsePosts[i].title = responsePosts[i].title.slice(0, - responsePosts[i].title.length + 50)
        
        result[j].title = responsePosts[i].title
        result[j].body = responsePosts[i].body
        result[j].postsCount = postsCount;
        postsCount++;

    } else {
      j++;
      i--;
      postsCount = 1;
    }
  }

  //for check another function
  //result[0].postsCount = 20;
  //result[2].postsCount = 30;

  return result;
}
function sortUsers(users) {
  
  users.sort((a,b) => {
    return b.postsCount - a.postsCount
  })

  return users;
}


infoAboutUsers('http://jsonplaceholder.typicode.com/users','http://jsonplaceholder.typicode.com/posts')
  .then(result => {
    console.log(result)
    console.log(sortUsers(result))
  });