const formatDate = (date: string) => {
  try {
    return date;
  } catch (error) {
    console.error(error);

    return "Invalid date";
  }
};

export default formatDate;
