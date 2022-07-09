import { useEffect } from 'react';

const Messages = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return <div>Messages</div>;
};

export default Messages;
