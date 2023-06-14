// import i18next from "i18next";

import i18n from "../i18n";

const ChangeLng = () => {
  const onChangeLang = (locale: string) => {
    // i18next.changeLanguage(locale);
    i18n.changeLanguage(locale);
  };
  return (
    <div>
      <p>
        <button
          onClick={() => {
            onChangeLang("en");
          }}
        >
          en
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            onChangeLang("kr");
          }}
        >
          kr
        </button>
      </p>
    </div>
  );
};

export default ChangeLng;
