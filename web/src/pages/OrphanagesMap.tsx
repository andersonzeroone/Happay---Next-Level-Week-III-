import React, {useEffect, useState} from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Map, TileLayer, Marker, Popup}from 'react-leaflet';
import mapIcon from '../utils/mapIcon';
import api from '../service/api';

import mapMarkerImg from '../images/Local.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

interface Orphanege{
  id:number;
  latitude:number;
  longitude:number;
  name:string;
}

function OphanagesMap(){

  const [orphanages,setOrphanages] = useState<Orphanege[]>([]);

  useEffect(()=>{
    api.get('orphanages').then( response => {
      setOrphanages(response.data);
    });
  },[]);

  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crinças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Senhor do Bonfim</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map 
        center={[-11.193223,-40.5162529]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
      > 
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` }/>

        {orphanages.map( orphanage =>{
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude,orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color='#fff'/>
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>      
  );
}

export default OphanagesMap;