import axios from "axios";
import IDataList from "../models/IDataList";
const getDataFrmServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/items`)
    .then(response => response.data)
}


const pushDataFromUser = (formData : Omit <IDataList, "id">) => {
    return axios.post<IDataList>(`http://localhost:3001/items`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export {getDataFrmServer, pushDataFromUser}