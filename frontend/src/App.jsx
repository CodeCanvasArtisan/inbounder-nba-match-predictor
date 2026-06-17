import { useState } from 'react'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

import * as NBALogos from 'react-nba-logos';
import { MainPage } from './main_page/MainPage';

function NBAMatchPredictor() {

  return (
    <>
      <MainPage/>
      <Analytics />
    </>
  )
}

export default NBAMatchPredictor
