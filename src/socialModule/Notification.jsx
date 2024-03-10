import React, { useState } from 'react';
import { Button, Flex, Text, Avatar, IconButton } from '@chakra-ui/react';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';

const Notification = ({ username, message, avatarUrl }) => {
  return (
    <Flex p="3" borderBottom="1px solid #E2E8F0">
      <Avatar src={avatarUrl} size="sm" mr="3" />
      <Flex direction="column" flex="1">
        <Text fontWeight="bold">{username}</Text>
        <Text>{message}</Text>
      </Flex>
    </Flex>
  );
};

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    {
      username: 'user1',
      message: 'Liked your photo.',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      username: 'user2',
      message: 'Commented on your post.',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  ]);

  return (
    <Flex direction="column" bg="white" boxShadow="md" borderRadius="md" p="4" w="300px">
      <Text fontWeight="bold" mb="3">
        Notifications
      </Text>
      {notifications.map((notification, index) => (
        <Notification key={index} {...notification} />
      ))}
      <Flex mt="3">
        <IconButton aria-label="Like" icon={<AiOutlineHeart />} size="sm" mr="2" />
        <IconButton aria-label="Comment" icon={<AiOutlineComment />} size="sm" mr="2" />
        <IconButton aria-label="Share" icon={<AiOutlineShareAlt />} size="sm" />
      </Flex>
    </Flex>
  );
};


export default NotificationPanel;
