/* eslint-disable @next/next/no-img-element */

const AuthImage = () => {
  return (
    <div className=" relative flex h-full w-1/2 items-center justify-center">
      <img
        src='/image/login.svg'
        alt=""
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
};

export default AuthImage;
