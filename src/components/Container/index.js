import React from 'react'
import './index.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { useDispatch } from 'react-redux';
import { getCases } from '../../redux/slice/trackerSlice';
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function Container({ scroollRef }) {
    const dispatch = useDispatch()
    const handleClick = (countryCode, countryName) => {
        dispatch(getCases({ countryCode, countryName }))
        scroollRef.current.scrollIntoView()
    }
    return (<>
        <ComposableMap>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Tippy key={geo.rsmKey} content={geo.properties.name}>
                            <Geography style={{
                                border: 'none', outline: "none", hover: {
                                    stroke: "#485460",
                                },
                            }} fill='#4bcffa'
                                stroke='#0fbcf9' geography={geo} border="0"
                                onClick={() => {
                                    handleClick(geo.id, geo.properties.name)
                                }}
                            />
                        </Tippy>
                    ))
                }
            </Geographies>
        </ComposableMap>
    </>
    )
}

export default Container