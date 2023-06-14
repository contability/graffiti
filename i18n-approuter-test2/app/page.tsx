"use client";

import React from "react";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const RootPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("title")}</p>
      <p>
        <Link href="/second-page">{t("to-second-page")}</Link>
      </p>
      <p>{t("to-client-page")}</p>
    </div>
  );
};

export default RootPage;
