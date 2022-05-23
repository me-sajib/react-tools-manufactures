import { useEffect, useState } from "react";

const UseToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const userEmail = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmail),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const userToken = data.token;
          localStorage.setItem("access", userToken);
          setToken(userToken);
        });
    }
  }, [user]);

  return [token, setToken];
};
export default UseToken;
