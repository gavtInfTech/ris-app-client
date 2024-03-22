import { React, useState, useEffect, useContext } from "react";
import NoticeTable from "./NoticeTable";
import NoticeForm from "./NoticeForm";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../axiosConfig";

export default function NoticeMain(props) {
  const [data, setData] = useState([]);
  const { auth } = useContext(AuthContext);

  let sites = props.sites.filter(
    (site) =>
      auth.role === "Администратор" || auth.organisation === site.organisation
  );

  function filterNotices(data) {
    return data.filter((item) => sites.some((site) => site.name === item.site));
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/notices/getAll");
        res.data.forEach((item) => {
          item.date = new Date(item.date);
          item.date_start = new Date(item.date_start);
          item.date_end = new Date(item.date_end);
        });
        setData(
          filterNotices(
            res.data.sort((a, b) => b.date.getTime() - a.date.getTime())
          )
        );
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const addData = (notice, id) => {
    notice.date = new Date(notice.date);
    notice.date_start = new Date(notice.date_start);
    notice.date_end = new Date(notice.date_end);
    setData((data) => [{ ...notice, id: id }, ...data]);
  };

  const changeData = (notice, id) => {
    notice.date = new Date(notice.date);
    notice.date_start = new Date(notice.date_start);
    notice.date_end = new Date(notice.date_end);
    setData(data.map((doc) => (doc.id === id ? notice : doc)));
  };

  const deleteData = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div>
      <NoticeForm addData={addData} sites={sites} />
      <NoticeTable
        changeData={changeData}
        deleteData={deleteData}
        data={data}
        sites={sites}
      />
    </div>
  );
}
