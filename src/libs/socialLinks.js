export default (link) => {
  const linkID = link.toLowerCase();
  switch (linkID) {
    case "linkedin":
      return "#";
    case "github":
      return "#";
    case "mail":
      return "#";
    case "discord":
      return "#";

    default:
      break;
  }
};
