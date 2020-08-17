const fetchUsers = async (count) => {
  for (let i = 0; i < count; i++) {
    const res = await fetch('https://randomuser.me/api/');
    const data = res.json();
    console.log(data);
  }
};

console.log(fetchUsers(1));