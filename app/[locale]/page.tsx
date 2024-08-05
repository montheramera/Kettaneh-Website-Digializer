import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const t = await getTranslations();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("home.test")}
      jkbjikbuij
    </main>
  );
}
