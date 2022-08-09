const isAdmin = (user) => {
  return ['admin', 'editor'].includes(user?.role);
};

export default isAdmin;
