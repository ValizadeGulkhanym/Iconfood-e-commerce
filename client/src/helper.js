
export const storeUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || "{}";
  return JSON.parse(stringifiedUser);
};

export const logout = () => {
 
  localStorage.setItem("user", "");
  navigate("/signin");
};