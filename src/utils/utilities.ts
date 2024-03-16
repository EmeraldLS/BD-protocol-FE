const formatName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

export { formatName };
