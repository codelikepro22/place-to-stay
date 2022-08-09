import checkOwner from './checkOwner.js';

const roomPermissions = {
  update: {
    roles: ['admin', 'editor'],
    owner: checkOwner,
  },
  delete: {
    roles: ['admin', 'editor'],
    owner: checkOwner,
  },
};

export default roomPermissions;
