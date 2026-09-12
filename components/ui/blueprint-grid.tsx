import React from 'react'
import { cn } from '@/lib/utils'

interface BlueprintGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  gridSize?: number
  className?: string
  withAura?: boolean
}

/**
 * BlueprintGrid — Le canevas Dovetail :
 * "Blueprint grid under a black moon — faint graph lines, white type, one violet spark."
 */
export function BlueprintGrid({
  children,
  gridSize = 44,
  className,
  withAura = true,
  ...props
}: BlueprintGridProps) {
  return (
    <div
      className={cn(
        'relative w-full bg-[#0a0a0a] text-white overflow-hidden isolate select-none',
        className
      )}
      {...props}
    >
      {/* 1. Trame vectorielle de quadrillage blueprint (faint graph lines) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 18%, #000 35%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 18%, #000 35%, transparent 85%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Micro-mires en croix (+) aux intersections de la grille blueprint */}
      <div
        className="pointer-events-none absolute inset-0 -z-15 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(103, 152, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 25%, #000 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 25%, #000 20%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Aura Soft Indigo centrale (The one violet/indigo spark under the black moon) */}
      {withAura && (
        <>
          <div
            className="pointer-events-none absolute top-10 left-1/2 -z-10 -translate-x-1/2 w-[720px] h-[360px] rounded-full blur-[140px] opacity-25"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(103, 152, 255, 0.4) 0%, rgba(124, 103, 255, 0.15) 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />
          {/* Lueur subtile dorée en contre-point (ADN Reflet jaune soufre) */}
          <div
            className="pointer-events-none absolute top-48 left-1/2 -z-10 -translate-x-1/2 w-[480px] h-[220px] rounded-full blur-[120px] opacity-10"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201, 171, 30, 0.3) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
        </>
      )}

      {children}
    </div>
  )
}
