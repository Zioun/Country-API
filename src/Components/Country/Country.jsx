import { useState } from "react";

const Country = ({country, handleVisitedCount, handleFlag, detailsCountry}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`card card-compact w-72 bg-base-100 shadow-xl col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 m-auto border ${visited && 'bg-slate-200'}`}>
            <figure><img className="h-[170px] w-full" src={flags.png} alt="Shoes" /></figure>
            <div className="card-body" style={{color: visited? 'gray':'black'}}>
                <h2 className="card-title text-left">{name.common}</h2>
                <p className="text-left">Population : {population}</p>
                <p className="text-left">Area : {area}</p>
                <p className="text-left"><small>Code : {cca3}</small></p>
                <p className="text-left">Action : {visited? 'Visited' : 'No Visite'} <small></small></p>
                <div className="card-actions justify-end">
                <button onClick={() => handleFlag (country)} className="btn btn-primary">Add Flag</button>
                <button onClick={() => handleVisitedCount(country)} className="btn btn-primary">Visited Country</button>
                <button onClick={handleVisited} className="btn btn-primary">{visited? "Visited" : "Go"}</button>
                <button onClick={() => detailsCountry(country)} className="btn btn-primary">Show Country Details</button>
                </div>
            </div>
        </div> 
    );
};

export default Country;