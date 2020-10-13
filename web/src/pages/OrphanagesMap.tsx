import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Map, TileLayer}from 'react-leaflet';

import mapMarkerImg from '../images/Local.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OphanagesMap(){
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
        center={[-11.2002834,-40.5228782]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
      > 
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </Map>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>      
  );
}

export default OphanagesMap;