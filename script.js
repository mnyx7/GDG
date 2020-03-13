window.onload = function() {

  const rootEl = document.getElementById("root");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => renderPosts(json));

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => renderUsers(json));

  const createPostsTable = () => {
    const headings = ["ID", "USER ID", "TITLE", "BODY"];
    const postsTable = document.createElement("table");
    postsTable.id = "posts";

    const row = postsTable.insertRow();

    headings.forEach(heading => {
      th = document.createElement("th");
      th.innerHTML = heading;
      row.appendChild(th);
    });

    rootEl.appendChild(postsTable);
  };

  const createUsersTable = () => {
    const headings = [
      "ID",
      "NAME",
      "EMAIL",
      "CITY",
      "PHONE",
      "WEBSITE",
      "COMPANY"
    ];
    const usersTable = document.createElement("table");
    usersTable.id = "users";

    const row = usersTable.insertRow();

    headings.forEach(heading => {
      th = document.createElement("th");
      th.innerHTML = heading;
      row.appendChild(th);
    });

    rootEl.appendChild(usersTable);
  };

  const renderPosts = records => {
    createPostsTable();
    const postsTable = document.getElementById('posts');


    records.forEach(record => {
      let row = postsTable.insertRow();

      row.insertCell().innerHTML = record.id;
      row.insertCell().innerHTML = record.userId;
      row.insertCell().innerHTML = record.title;
      row.insertCell().innerHTML = record.body;
    });
  };

  const renderUsers = records => {
    createUsersTable();
    let usersTable = document.getElementById('users');
    
    records.forEach(record => {
      let row = usersTable.insertRow();

      row.insertCell().innerHTML = record.id;
      row.insertCell().innerHTML = record.name;
      row.insertCell().innerHTML = record.username;
      row.insertCell().innerHTML = record.email;
      row.insertCell().innerHTML = record.address.city;
      row.insertCell().innerHTML = record.phone;
      row.insertCell().innerHTML = record.website;
      row.insertCell().innerHTML = record.company.name;
    });
  };
};
