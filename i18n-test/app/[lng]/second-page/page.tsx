import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Footer } from "../components/Footer";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng} />
    </>
  );
}
