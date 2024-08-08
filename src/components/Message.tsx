import MainHeader from "./MainHeader";
import Inbox from "./Inbox";
import InboxMessage from "./InboxMessage";

const Message = () => {
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full rounded border border-border bg-bgGray">
        <Inbox />
        <InboxMessage />
      </div>
    </div>
  );
};

export default Message;
