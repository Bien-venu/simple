/* eslint-disable @next/next/no-img-element */
"use client";
import { MdOutlineAttachment } from "react-icons/md";
import { BsArrowUpShort } from "react-icons/bs";
import { useState, useRef } from "react";
import Spinner from "./Spinner";

const Comment = ({ name }: any) => {
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setIsUploading(true);
      const uploadedImages: string[] = [];
      const fileArray = Array.from(files); // Convert FileList to Array

      for (const file of fileArray) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "bakehaven");

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dxbeayp6k/image/upload`,
            {
              method: "POST",
              body: formData,
            },
          );
          const data = await response.json();
          uploadedImages.push(data.secure_url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      setIsUploading(false);
      setImages((prevImages) => [...prevImages, ...uploadedImages]);
    }
  };

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = (url: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== url));
  };

  return (
    <div className="relative rounded border border-border bg-account p-4">
      <textarea
        className="w-full bg-account pb-32"
        placeholder={`Leave a comment for ${name}`} // Unique comment placeholder
      />
      <div className="mb-2 flex flex-wrap items-center gap-1">
        {images.map((image) => (
          <div key={image} className="relative h-24 w-24 border border-grey">
            <img
              src={image}
              alt="comment"
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => removeImage(image)}
              className="text-red-500 absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bgGray p-1"
            >
              ×
            </button>
          </div>
        ))}
        {isUploading && (
          <div className="flex h-24 items-center">
            <Spinner />
          </div>
        )}
        <label className="text-primary border-primary bg-transpparent hidden h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-sm text-center text-sm">
          <input
            type="file"
            ref={fileInputRef}
            onChange={uploadImage}
            className="hidden"
            multiple
          />
        </label>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <MdOutlineAttachment
          size={20}
          onClick={handleAttachmentClick}
          className="cursor-pointer"
        />
        <div className="flex items-center justify-center rounded-full bg-btn">
          <BsArrowUpShort size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
