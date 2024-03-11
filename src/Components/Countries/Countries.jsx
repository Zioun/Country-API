import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [visited, setVisited] = useState([]);
    const [flags, setFlags] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    const handleVisitedCount = country =>{
        const newVisiteCountry = [...visited, country];
        setVisited(newVisiteCountry);
    }
    const handleFlag = (country) =>{
        const newFlag = [...flags, country];
        setFlags(newFlag);
    }
    const detailsCountry = (country) =>{
        const newDetails = [...details, country];
        setDetails(newDetails);
    }
    const hiddenModal = () => {
        if(!false){
            const modalFind = document.getElementById('customModal');
            modalFind.className = "hidden";
        }
    }
    return (
        <div>
            <h1 className="">Total Countries : {country.length}</h1>
            <h1 className="">Visited Countries : {visited.length}</h1>
            {
                details.map((detailsItem, index) => (
                    <div className="" key={index}>
                            <div id="customModal" class={`modal-box z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-left`}>
                                <button onClick={hiddenModal} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <div className="flex gap-5 items-center">
                                    <img className="mt-5 h-20" src={detailsItem.flags.svg} alt="" />
                                    <div>
                                        <h3 class="font-bold text-2xl mt-3 text-left">{detailsItem.name.common}</h3>
                                        <h2 class="font-bold text-lg text-left">Official : {detailsItem.name.official}</h2>
                                        <h2 class="font-bold text-lg text-left">Capital : {detailsItem.capital}</h2>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-3">
                                        <h1>Continents : {detailsItem.continents}</h1>
                                        <h1>Languages: {Object.keys(detailsItem.languages)[0]}</h1>
                                        <h1>Area : {detailsItem.area} Square km</h1>
                                        <h1>Start Of Week : {detailsItem.startOfWeek}</h1>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <h1>Core Of Army</h1>
                                        <img className="h-10" src={detailsItem.coatOfArms.png} alt="" />
                                    </div>
                                </div>
                                
                                
                            </div>
                    </div>
                ))
            }
            <div className="space-x-5 mt-3">
                {
                    visited.map(visitedCountry => <h1 className="inline-block font-bold">{visitedCountry.name.common}</h1>)
                }
            </div>
            <div className="space-x-5 mt-3">
                {
                    flags.map(flag => <img className="h-[50px] w-[100px] inline-block" src={flag.flags.png}></img>)
                }
            </div>
            <div className="grid grid-cols-12 gap-y-10 mt-10">
                {
                    country.map(country => <Country key={country.cca3} handleVisitedCount ={handleVisitedCount} handleFlag ={handleFlag} country={country} detailsCountry={detailsCountry}></Country>)
                }
            </div>
        </div>
    ); 
};

export default Countries;