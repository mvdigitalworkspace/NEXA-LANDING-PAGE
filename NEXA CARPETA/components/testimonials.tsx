import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Nexa eliminó el dolor de cabeza de armar la nómina a fin de mes. Ahora las horas se calculan solas.',
    name: 'Martín Herrera',
  },
  {
    quote: 'Dejé de manejar planillas de papel. Veo en tiempo real quién fichó en cada una de mis tres sucursales.',
    name: 'Lucía Bianchi',
  },
  {
    quote: 'El GPS me da la tranquilidad de que fichan realmente en el local. Recuperé horas de control cada semana.',
    name: 'Diego Fernández',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Dueños de franquicias que ya recuperaron su tiempo
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
              <div className="flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-pretty italic leading-relaxed text-slate-700">
                {`"${t.quote}"`}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-10 shrink-0 rounded-full bg-slate-200" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">Dueño de Franquicia</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
