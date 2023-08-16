var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
const person = {
    role: Role.Admin,
};
if (person.role === Role.Admin) {
    console.log("Role: ", Role.Admin);
}
console.log(Role.Admin);
console.log(Role.User);
// export = {};
//# sourceMappingURL=example.js.map