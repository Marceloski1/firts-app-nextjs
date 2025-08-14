'use client'
import { useEffect , useRef} from "react"
import party from 'party-js' 

type PartyConfettiOptions = {
  count?: number;
  spread?: number;
  duration?: number;
  particleColor?: string | string[];
  shapes?: string[];
  zIndex?: number;
  // Puedes añadir más opciones si las soporta tu versión de party-js
};

type PartyConfettiProps = {
  // Disparador externo (opcional). Cuando cambie a true dispara una animación.
  trigger?: boolean;
  // Opciones de party-js
  options?: PartyConfettiOptions;
  // Contenedor destino donde lanzar la animación. Si no se provee, usa document.body
  containerRef?: React.RefObject<HTMLElement> | null;
  // ¿Lanzar automáticamente al montar?
  autoPlay?: boolean;
  // Si quieres que la animación ocurra solo una vez por sesión
  oneShotKey?: string; 
 
};
const PartyConfetti: React.FC<PartyConfettiProps> = ({
  trigger = false,
  options = {},
  containerRef = null,
  autoPlay = true,
  oneShotKey,
 
}) => {
  const hasFiredRef = useRef(false);

  const launch = () => {
    const target = containerRef?.current ?? document.body;
    party.confetti(target, {
      count: options.count ?? 80,
      spread: options.spread ?? 40,
      duration: options.duration ?? 2000,
      particleColor: options.particleColor ?? ['#FF3D00', '#FFB700', '#2ECC71', '#00A8F0', '#9B59B6'],
      shapes: options.shapes ?? undefined,
      zIndex: options.zIndex ?? 999,
    });
  };

  // Lanza al montar si autoPlay está activo
  useEffect(() => {
    if (autoPlay) {
      if (oneShotKey) {
        const seen = sessionStorage.getItem(oneShotKey);
        if (seen) return;
        sessionStorage.setItem(oneShotKey, '1');
      }
      launch();
      hasFiredRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lanza cuando trigger cambia a true
  useEffect(() => {
    if (trigger && !hasFiredRef.current) {
      launch();
      hasFiredRef.current = true;
    }
  }, [trigger, containerRef]);

  return null; // No renderiza UI propia
};

export default PartyConfetti;