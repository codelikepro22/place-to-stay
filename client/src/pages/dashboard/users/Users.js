import { useEffect } from 'react';

const Users = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return <div>Users</div>;
};

export default Users;
