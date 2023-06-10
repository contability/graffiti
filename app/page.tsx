import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div>
      <p>
        <Link href={"/next-qrcode"}>go to next-qrcode test page</Link>
      </p>
      <p>
        <Link href={"/qrcode"}>go to qrcode test page</Link>
      </p>
    </div>
  );
};

export default Page;
