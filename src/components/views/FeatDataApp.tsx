"use client";
import axios from "axios";
import { useEffect } from "react";

const Settings = [
    {
        key: 'key-app1',
        url: 'https://dogapi.dog/api/v2/breeds',
        link: '/app-1'
    },
    {
        key: 'key-app2',
        url: 'https://dogapi.dog/api/v2/breeds?page[number]=2',
        link: '/app-2'
    }
]
const FeatDataApp = () => {
    useEffect(() => {
        const fetchData = async () => {
            for (const setting of Settings) {
                try {
                    const response = await axios.get(setting.url);
                    const data = response.data;
                    localStorage.setItem(setting.key, JSON.stringify(data));
                } catch (error) {
                    console.error(`Error fetching from ${setting.url}:`, error);
                }
            }
        };
        fetchData();
    }, []);

    return null; 
};

export default FeatDataApp;