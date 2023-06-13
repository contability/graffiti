import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng} />
    </>
  );
}
