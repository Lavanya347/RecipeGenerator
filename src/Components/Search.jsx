import { useEffect, useState } from "react";
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "5f0ee57de2b744718c22a6d39699c351"

export default function Search({foodData,setFoodData}) {
    const [query,setQuery] = useState("pizza");

    //Syntax of useEffect...useEffect(callBackFun,DependencyArray) 
    //i.e useEffect(() => {},[])
    useEffect(() => {
        async function fetchFood() {
            const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood()
    },[query])

    return (
        <div className={styles.searchContainer}>
            <input 
            className={styles.input}
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            type="text"/>
        </div>
    );
}