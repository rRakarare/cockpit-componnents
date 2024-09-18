export const getChatHref = ({type="chat", _id=""}: {type: 'chat'|'data-chat'|'image-chat'|undefined, _id:string|undefined}) => {
    switch (type) {
      case "chat":
        return `/chat/${_id}`;
      case "data-chat":
        return `/data-chat/${_id}`;
      case "image-chat":
        return `/media/${_id}`;
        default:
        return "/";
    }
  };