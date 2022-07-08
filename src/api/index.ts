import axios from "axios";
import { IMedium } from "../types";

const API = axios.create({
    baseURL:"https://run.mocky.io/v3"
})

export const fetchMedia = async (): Promise<IMedium[]> =>{
    const { data: { media } } = await API.get('/a811c0e9-adae-4554-9694-173aa23bc38b')
    return media as IMedium[]
}