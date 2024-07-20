import React from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { BsArrowUpShort } from "react-icons/bs";

const Comment = () => {
  return (
    <div className="relative rounded border border-border bg-account p-4">
      <input
        type="text"
        className="pb-32 w-full bg-account"
        placeholder="Leave a comment"
      />
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <MdOutlineAttachment size={20} />
        <div className="flex items-center justify-center rounded-full bg-btn">
          <BsArrowUpShort size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
