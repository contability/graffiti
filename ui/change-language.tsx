import i18next from "i18next";

const ChangeLng = () => {
  const onChangeLang = (locale: string) => {
    i18next.changeLanguage(locale);
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
