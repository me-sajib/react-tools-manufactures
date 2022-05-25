import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdminCheck, setLoadingAdminCheck] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://boiling-hollows-81420.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((result) => {
          setAdmin(result.admin);
          setLoadingAdminCheck(false);
        });
    }
  }, [user]);

  return [admin, loadingAdminCheck];
};
export default useAdmin;
