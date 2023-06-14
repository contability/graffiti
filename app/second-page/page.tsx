"use client";
import { useTranslation } from "react-i18next";

const SecondPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("secondTitle")}</p>
      <p>{t("back-to-home")}</p>
    </div>
  );
};

export default SecondPage;
