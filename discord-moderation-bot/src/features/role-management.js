```role-management.js
// role-management.js
const Discord = require('discord.js');

module.exports = {
  assignRole: (user, role) => {
    user.roles.add(role);
  },
  removeRole: (user, role) => {
    user.roles.remove(role);
  },
  updatePermissions: (role, permissions) => {
    role.setPermissions(permissions);
  },
  createRole: (guild, roleName, permissions) => {
    guild.roles.create({
      data: {
        name: roleName,
        permissions: permissions,
      },
    });
  },
  deleteRole: (role) => {
    role.delete();
  },
};
```