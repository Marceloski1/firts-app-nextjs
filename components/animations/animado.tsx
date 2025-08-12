'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import isometricData from '../../public/assets/lottie/Isometric data analysis.json'


export default function Animado() {
  return (
    <div>
        <Player
        src={isometricData} 
        style={{ height: '300px', width: '300px' }}
        autoplay 
        loop
        />
    </div>
  )
}
