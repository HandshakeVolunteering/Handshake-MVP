import NavBar from "../components/navbar"
import Listing from "../components/Listing"
import React from "react"
import axios from "axios"

export default function Discover() {
    const [listings, changeListings] = React.useState()
    
    React.useEffect(() => {
        axios.get("http://localhost:5000/api/listings/discover", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("key")}`,
            }
        })
    })
  return (
    <>
        {/* <NavBar /> */}
        <div className="discover-page">
            <div className="discover-sections-p">
                <div className='discover-sections'>
                    <div className='discover-section'>
                        Discover
                    </div>
                    <div className='discover-section'>
                        Tech
                    </div>
                    <div className='discover-section'>
                        Physical
                    </div>
                    <div className='discover-section'>
                        Teaching
                    </div>
                    <div className='discover-section'>
                        Design
                    </div>
                    <div className='discover-section'>
                        Development
                    </div>
                    <div className='discover-section'>
                        Online
                    </div>
                </div>
            </div>
            <div className="listings">
                <Listing 
                    title="E-Commerce Website"
                    skills={["React", "Next.js", "TailwindCSS", "Firebase"]}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio est, porttitor sit amet urna sit amet, malesuada dictum felis. Sed arcu leo, tristique sit amet interdum sit amet, auctor vel mi."
                    location="Remote"
                    author="Tesla Co."
                />
            </div>
        </div>
    </>
  )
}
