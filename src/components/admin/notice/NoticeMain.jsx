import { React, useState, useEffect, useContext } from 'react';
import NoticeTable from "./NoticeTable";
import NoticeForm from "./NoticeForm";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from '../../../axiosConfig';

export default function NoticeMain() {

    const [data, setData] = useState([]);
    const {auth} = useContext(AuthContext);
    const siteGroups = auth.info.siteGroups;

    function filterNotices(data) {
        let filteredNotices = data.filter((item) => {
            for (const key in siteGroups) {
              const group = siteGroups[key];
              if (group.includes(item.site)) {
                return true;
              }
            }
            return false;
          });
          return filteredNotices;
    }
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get("/notices/getAll");
                res.data.forEach((item) => {
                  item.date = new Date(item.date);
                })
                setData(filterNotices(res.data.sort((a, b) => a.date.getTime() - b.date.getTime())));
              } catch (err) { 
                console.log(err)
              }
        } 
        getData();
    }, [])
    
    const addData = (notice, id) => {
        notice.date = new Date(notice.date);
        setData((data) => [...data, {...notice, id: id}])
    }

    const changeData = (notice, id) => {
        notice.date = new Date(notice.date);
        setData(data.map((doc) => doc.id === id ? notice : doc));
    }

    const deleteData = (id) => {
        setData(data.filter((d) => d.id !== id));
    }

    return (
        <div>
            <NoticeForm addData={addData} />
            <NoticeTable changeData={changeData} deleteData={deleteData} data={data} />
        </div>
    )
}