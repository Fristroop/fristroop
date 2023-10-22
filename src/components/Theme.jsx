import { useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState(document.body.getAttribute("data-bs-theme"));
  const changeTheme = () => {
    const target = theme == "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", target);
    localStorage.setItem("theme", target);
    setTheme(target);
  };
  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <input
        type="checkbox"
        className="btn-check"
        id="btn-check"
        autoComplete="off"
        onChange={changeTheme}
      />
      <label
        className="btn text-white"
        style={{ backgroundColor: "#712cf9" }}
        htmlFor="btn-check"
      >
        {theme === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </label>
    </div>
  );
};
