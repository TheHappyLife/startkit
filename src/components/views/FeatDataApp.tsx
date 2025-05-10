"use client";
import { Settings } from "@/SettingApp";
import { useStoreApp } from "@/store/storeAppMain";
import axios from "axios";
import { useEffect } from "react";
const FeatDataApp = () => {
    const { setDataMain } = useStoreApp();
    useEffect(() => {
        const fetchData = async () => {
            for (const setting of Settings) {
                try {
                    const response = await axios.get(setting.url);
                    const data = response.data;
                    if(setting.key === 'key-app1') {
                        setDataMain(data);
                    }
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