enum Role {
  Admin = "ADMIN",
  User = "USER",
}

const person = {
  role: Role.Admin,
};

if (person.role === Role.Admin) {
  console.log("Role: ", Role.Admin);
}

console.log(Role.Admin);
console.log(Role.User);

// export = {};
