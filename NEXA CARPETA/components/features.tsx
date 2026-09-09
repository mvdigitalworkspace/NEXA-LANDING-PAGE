import { MapPin, Lock, Clock, ImageIcon, type LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: MapPin,
    eyebrow: 'Ubicación',
    title: 'Fichaje Geofence',
    description:
      'Valida por GPS que cada empleado esté físicamente en la sucursal al momento de fichar. Se acabaron los fichajes desde casa: el radio permitido lo defines tú.',
  },
  {
    icon: Lock,
    eyebrow: 'Seguridad',
    title: 'Seguridad por PIN',
    description:
      'Cada empleado usa un código único e intransferible. Evita suplantaciones y garantiza que quien ficha es realmente la persona correcta.',
  },
  {
    icon: Clock,
    eyebrow: 'Automatización',
    title: 'Cierres Automáticos',
    description:
      'Nexa audita los turnos a las 23:59 y cierra automáticamente los que quedaron abiertos. Nunca más una jornada mal registrada por un olvido.',
  },
]

export function Features() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Todo lo que necesitas para controlar el presentismo
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
          Desde la validación por ubicación hasta el cálculo automático de horas.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-16 md:gap-24">
        {features.map((feature, index) => {
          const reversed = index % 2 === 1
          return (
            <div
              key={feature.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* Text */}
              <div className={reversed ? 'md:order-2' : ''}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>

              {/* Photo placeholder */}
              <div className={reversed ? 'md:order-1' : ''}>
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-slate-200 bg-slate-200">
                  <ImageIcon className="h-12 w-12 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">Fotografía de personas trabajando</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
