import { React, useState, useEffect, useContext } from 'react';
import NoticeTable from "./NoticeTable";
import NoticeForm from "./NoticeForm";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { collection, getDocs } from "firebase/firestore";
import  { db }  from "../../../init-firebase.js";
import { AuthContext } from "../../../contexts/AuthContext";

function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
  }

export default function NoticeMain() {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [data, setData] = useState([]);
    const {auth} = useContext(AuthContext);
    const siteGroups = auth.info.siteGroups;

    function filterNotices(data) {
        let filteredNotices = data.filter((element) => {
            for (const key in siteGroups) {
              const group = siteGroups[key];
              if (group.includes(element)) {
                return true;
              }
            }
            return false;
          });
          return filteredNotices;
    }
    
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "notices"));
            const docs = data.docs.map((doc) => {return{...doc.data()}});
            setData(filterNotices(docs));
        } 
        getData();
    }, [])
    
    const addData = (doc, id) => {
        setData((data) => [...data, {...doc, id: id}])
    }

    const changeData = (newDoc, id) => {
        setData(data.map((doc) => doc.id === id ? newDoc : doc));
    }

    const deleteData = (id) => {
        setData(data.filter((d) => d.id !== id));
    }

    const handleCloseMessage = (reason) => {
        if (reason === 'clickaway') {
            return;
            }
        
        setOpen(false);
    }

    const handleOpenMessage = (message, severity) => {
        setOpen(true);
        setMessage(message);
        setSeverity(severity);
    }

    return (
        <div>
            <NoticeForm addData={addData} handleOpenMessage={handleOpenMessage} />
            <NoticeTable handleOpenMessage={handleOpenMessage} changeData={changeData} deleteData={deleteData} data={data} />
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={open} autoHideDuration={5000} onClose={handleCloseMessage}>
                <div>
                    <Alert onClose={handleCloseMessage} severity={severity}>
                        {message}
                    </Alert>
                </div>
            </Snackbar>
        </div>
    )
}