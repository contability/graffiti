import React from "react";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";
import ChangeLng from "../ui/change-language";

const RootPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("title")}</p>
      <p>{t("to-second-page")}</p>
      <p>{t("to-client-page")}</p>
      <div>
        <ChangeLng />
      </div>
    </div>
  );
};

export default RootPage;
