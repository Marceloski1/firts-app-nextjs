'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
//import isometricData from '../../public/assets/lottie/Isometric data analysis.json'
import wiredData from '../../public/assets/lottie/wired-flat-1845-rose-hover-pinch.json'

export default function Animado() {
  return (
    <div>
        <Player
        src={wiredData} 
        style={{ height: '300px', width: '300px' }}
        autoplay 
        loop
        />
    </div>
  )
}
