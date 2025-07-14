import { createContext, useEffect, useState } from "react";
import { api } from "../axiosConfig";
import * as adminInfo from "../components/admin/adminInfo";
import * as berezinskoeInfo from "../components/admin/berezinskoeInfo";
import * as bugskoeInfo from "../components/admin/bugskoeInfo";
import * as dvinskoeInfo from "../components/admin/dvinskoeInfo";
import * as nijPrivInfo from "../components/admin/nijnePripytskiyInfo";
import * as grodnenskoeInfo from "../components/admin/grodnenskiyInfo";
import * as vitebskoeInfo from "../components/admin/VitebskVodTransInfo";
import * as parahodstvoInfo from "../components/admin/parahodstvo";

export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [auth, setAuth] = useState({
    id: null,
    role: null,
    organisation: null,
    info: null,
    rolePath: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await api.get("/auth/authCheck");

        if (res.data.role === "Администратор") {
          setAuth({ ...res.data, info: adminInfo, rolePath: "main" });
        } else if (res.data.role === "Клиент" || res.data.role === "Путевик") {
          setAuth({ ...res.data });
        } else if (
          res.data.organisation === 'РУЭСП "Днепро-Бугский водный путь"'
        ) {
          setAuth({ ...res.data, info: bugskoeInfo, rolePath: "bugskoe" });
        } else if (
          res.data.organisation ===
          'РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
        ) {
          setAuth({
            ...res.data,
            info: dvinskoeInfo,
            rolePath: "dvinskoe",
          });
        } else if (
          res.data.organisation ===
          "РУ Днепро-Березинское предприятие водных путей"
        ) {
          setAuth({
            ...res.data,
            info: berezinskoeInfo,
            rolePath: "berezinskoe",
          });
        } else if (res.data.organisation === 'Филиал \"Нижне-Припятский\" г. Мозырь') {
          setAuth({
            ...res.data,
            info: nijPrivInfo,
            rolePath: "nijnepripyat",
          });
        } else if (res.data.organisation === 'Филиал \"Витебскводтранс\" г. Витебск') {
          setAuth({
            ...res.data,
            info: vitebskoeInfo,
            rolePath: "vitebskvodtrans",
          });
        } else if (res.data.organisation === 'Филиал \"Гродненский участок\" г. Гродно') {
          setAuth({
            ...res.data,
            info: grodnenskoeInfo,
            rolePath: "grodnenskiy",
          });
        }
        else if (res.data.organisation === "Белорусское речное пароходство") {
          setAuth({
            ...res.data,
            info: parahodstvoInfo,
            rolePath: "parahodstvo",
          });
        }
         else if (res.data.role === "Диспетчер порта") {
          setAuth({
            ...res.data,
            rolePath: "dispetcher-porta",
          });
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  if (isLoading) return <></>;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
