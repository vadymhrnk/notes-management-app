import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./Header.scss";

export const Header = () => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if ((localStorage.getItem("i18nextLng") ?? "").length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header-container">
      <div className="header-title">{t("headerTitle")}</div>
      <div className="language-dropdown">
        <select
          value={localStorage.getItem("i18nextLng") ?? ""}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ua">Ukrainian</option>
        </select>
      </div>
    </div>
  );
};
