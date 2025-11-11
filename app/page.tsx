import Image from "next/image";

const categories = [
  {
    name: "Sustainable fashion",
    description:
      "Organic fabrics, circular designs, and carbon-neutral logistics for every season.",
    accent: "from-emerald-400/70 via-emerald-300/40 to-teal-400/70",
  },
  {
    name: "Smart home essentials",
    description:
      "Connected lighting, climate control, and security that work beautifully together.",
    accent: "from-sky-400/80 via-blue-400/40 to-indigo-500/80",
  },
  {
    name: "Artisanal pantry",
    description:
      "Small-batch pantry staples crafted by independent makers with traceable sourcing.",
    accent: "from-amber-400/80 via-orange-400/40 to-rose-400/80",
  },
  {
    name: "Wellness & beauty",
    description:
      "Clean skincare, daily rituals, and wellness tech to support mindful routines.",
    accent: "from-fuchsia-400/80 via-pink-400/40 to-rose-400/80",
  },
  {
    name: "Outdoor tech",
    description:
      "Solar gear, modular packs, and field-ready tools engineered for the elements.",
    accent: "from-cyan-400/80 via-sky-300/40 to-emerald-400/80",
  },
  {
    name: "Home & living",
    description:
      "Design-forward objects, statement lighting, and modular furniture systems.",
    accent: "from-purple-400/70 via-violet-400/40 to-slate-400/80",
  },
];

const featuredProducts = [
  {
    name: "Solstice linen set",
    description:
      "Handwoven bedding using regenerative flax and plant-based dyes.",
    price: "$189",
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
    badge: "Editor's pick",
  },
  {
    name: "Aurora pour-over",
    description:
      "Double-walled ceramic brewer with precision glass carafe and timber lid.",
    price: "$142",
    rating: 4.9,
    reviews: 201,
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    badge: "Back in stock",
  },
  {
    name: "Vega smart garden",
    description:
      "Compact hydroponic grow system with adaptive lighting and app controls.",
    price: "$229",
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    badge: "Community favorite",
  },
  {
    name: "Halo skin kit",
    description:
      "Dermatologist-formulated trio powered by bio-fermented botanicals.",
    price: "$98",
    rating: 4.9,
    reviews: 318,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    badge: "Limited drop",
  },
];

const stats = [
  { value: "2,400+", label: "Verified independent sellers" },
  { value: "45k", label: "Shoppers discovering new essentials" },
  { value: "24h", label: "Average time to ship curated drops" },
];

const sellingPoints = [
  {
    title: "Guided onboarding",
    description:
      "Our merchandising team helps craft your story, from brand voice to imagery.",
    label: "GO",
  },
  {
    title: "Logistics & fulfillment",
    description:
      "From eco packaging to routing, we manage the last mile while you stay creative.",
    label: "LF",
  },
  {
    title: "Data storytelling",
    description:
      "Access dashboards that surface demand signals, sell-through rates, and retention.",
    label: "DS",
  },
];

const steps = [
  {
    title: "Apply and curate",
    description:
      "Share your collection, materials, and values. We help refine positioning before launch.",
  },
  {
    title: "Launch with support",
    description:
      "Receive creative, merchandising, and packaging support to deliver a standout debut.",
  },
  {
    title: "Delight and grow",
    description:
      "Tap into analytics, fulfillment, and marketing to scale sustainably with your existing team.",
  },
];

const testimonials = [
  {
    quote:
      "Aurora gave us a launchpad to reach design-conscious customers without losing our voice.",
    name: "Isla Romero",
    title: "Founder, Sol & Slate",
  },
  {
    quote:
      "We scaled from weekend pop-ups to nationwide demand while keeping shipping emissions low.",
    name: "Marcus Lee",
    title: "Co-founder, Northwind Gear",
  },
  {
    quote:
      "The data insights help us plan production with confidence and reduce waste every season.",
    name: "Sienna Brooks",
    title: "Creative Director, Atelier Nine",
  },
];

const brandLogos = [
  "Field & Form",
  "Northwind",
  "Lumen Studio",
  "Arc & Oak",
  "Atelier Nine",
  "Sol & Slate",
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(56,189,248,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
      <header className="relative isolate pb-20">
        <nav className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-8">
              <a className="text-base font-semibold tracking-tight text-white sm:text-lg" href="#top">
                Aurora Market
              </a>
              <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
                <a className="transition hover:text-white" href="#categories">
                  Categories
                </a>
                <a className="transition hover:text-white" href="#trending">
                  Trending
                </a>
                <a className="transition hover:text-white" href="#partner">
                  For sellers
                </a>
                <a className="transition hover:text-white" href="#stories">
                  Stories
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="hidden text-sm font-medium text-slate-200 transition hover:text-white md:inline-block"
                href="#signin"
              >
                Sign in
              </a>
              <a
                className="hidden rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] md:inline-block"
                href="#partner"
              >
                Become a seller
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-white/40 md:hidden"
                aria-label="Open navigation"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h14M3 15h14" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-4 sm:mt-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Next-day delivery on select creators
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Discover independent brands curated for modern, conscious living.
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Aurora Market connects you with emerging makers, limited drops, and circular products
                designed to last. Shop confidently with trusted logistics and transparent sourcing.
              </p>
            </div>
            <form action="#trending" method="get" className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <label className="sr-only" htmlFor="search">
                  Search products and collections
                </label>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search sustainable essentials, artisan drops, smart home tech..."
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 backdrop-blur transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 hidden items-center text-slate-300 sm:flex">
                  <span className="rounded border border-white/15 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest">
                    Ctrl K
                  </span>
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Browse collections
              </button>
            </form>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/5 to-white/0 blur-3xl" />
            <div className="flex flex-col gap-6">
              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-semibold uppercase tracking-widest text-emerald-200">
                    Fresh drop
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-300">
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.118 3.444a1 1 0 00.95.69h3.622c.969 0 1.371 1.24.588 1.81l-2.93 2.13a1 1 0 00-.364 1.118l1.118 3.445c.3.923-.755 1.688-1.54 1.117l-2.93-2.13a1 1 0 00-1.176 0l-2.93 2.13c-.784.57-1.838-.194-1.539-1.118l1.118-3.444a1 1 0 00-.364-1.118l-2.93-2.13c-.783-.57-.38-1.81.588-1.81h3.622a1 1 0 00.95-.69l1.118-3.444z" />
                    </svg>
                    4.9 | 312 reviews
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">Lumos handblown lamp</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Crafted with recycled glass and adaptive LED glow that shifts with your space in real time.
                </p>
                <div className="relative mt-6 h-56 overflow-hidden rounded-[1.5rem] border border-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80"
                    alt="Handblown glass lamp on a wooden side table"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 60vw, 90vw"
                    priority
                  />
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-200">
                  <div>
                    <span className="text-lg font-semibold text-white">$249</span>
                    <span className="ml-2 text-slate-400">Limited inventory</span>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                  >
                    View product
                  </button>
                </div>
              </article>

              <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white">What&apos;s trending</h4>
                  <a className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100" href="#trending">
                    See all →
                  </a>
                </div>
                <div className="space-y-4">
                  {featuredProducts.slice(0, 2).map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-3"
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="mt-1 text-xs text-slate-400">{product.description}</p>
                      </div>
                      <span className="text-sm font-semibold text-emerald-200">{product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative space-y-24 pb-24 sm:space-y-32">
        <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Marketplace</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Curated collections for the way you live
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                Discover maker-led categories updated weekly with limited runs, recycled materials, and
                timeless design.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
              href="#trending"
            >
              Explore the drops
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <p className="mt-3 text-sm text-slate-300">{category.description}</p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                  >
                    Browse collection
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="trending" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Trending now</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Featured products</h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-300">
                  Shop the drops our community can&apos;t stop talking about. Each piece goes through our
                seven-point curation framework.
              </p>
            </div>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
            >
              Get early access
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </a>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-emerald-500/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 22rem, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
                    {product.badge ? (
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100">{product.badge}</span>
                    ) : null}
                    <span className="flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-300">
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.118 3.444a1 1 0 00.95.69h3.622c.969 0 1.371 1.24.588 1.81l-2.93 2.13a1 1 0 00-.364 1.118l1.118 3.445c.3.923-.755 1.688-1.54 1.117l-2.93-2.13a1 1 0 00-1.176 0l-2.93 2.13c-.784.57-1.838-.194-1.539-1.118l1.118-3.444a1 1 0 00-.364-1.118l-2.93-2.13c-.783-.57-.38-1.81.588-1.81h3.622a1 1 0 00.95-.69l1.118-3.444z" />
                      </svg>
                      {product.rating.toFixed(1)} | {product.reviews} reviews
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">{product.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-sm">
                    <span className="text-lg font-semibold text-emerald-200">{product.price}</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="partner" className="relative isolate overflow-hidden bg-slate-900/40 py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-8">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">For sellers</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Built for independent makers ready to scale
                </h2>
                <p className="mt-4 max-w-xl text-sm text-slate-300">
                  Launch a flagship storefront, tap into fulfillment support, and access data-rich insights.
                  We champion your craft while you stay focused on creating.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {sellingPoints.map((point) => (
                  <div key={point.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold uppercase tracking-widest text-emerald-200">
                      {point.label}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white">How it works</h3>
                <p className="mt-2 text-sm text-slate-300">
                  A proven framework that empowers creators with storytelling, fulfillment, and growth.
                </p>
              </div>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                href="#newsletter"
              >
                Become a partner
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="stories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Community</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Creator stories</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                Hear from the brands taking off on Aurora Market with the support of our logistics, data, and
                storytelling.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
              href="#partner"
            >
              Share your story
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
              >
                <blockquote className="text-sm text-slate-200">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{testimonial.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="newsletter" className="relative isolate px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 p-8 sm:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
                Stay in the loop
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Be the first to shop limited drops and exclusive collabs
              </h2>
              <p className="mt-4 max-w-xl text-sm text-slate-300">
                We send a weekly edit of new arrivals, studio stories, and events in your city. Zero spam, always
                opt-out friendly.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 backdrop-blur transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                >
                  Join the list
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-400">We respect your inbox. Unsubscribe anytime.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {brandLogos.map((logo) => (
                  <span key={logo} className="rounded-full border border-white/10 px-4 py-2 text-slate-200">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
                &ldquo;Aurora surfaced our brand to customers who value design and sustainability. We grew repeat orders
                by 3x within two months.&rdquo;
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80"
                    alt="Portrait of Kai Nguyen"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Kai Nguyen</p>
                  <p className="text-xs text-slate-400">Founder, Lumen Studio</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <a className="text-lg font-semibold tracking-tight text-white" href="#top">
                Aurora Market
              </a>
              <p className="text-sm text-slate-400">
                A modern marketplace elevating independent brands through storytelling, logistics, and data-backed
                growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span>hello@auroramarket.com</span>
                <span className="hidden sm:inline-block">|</span>
                <span>+1 (415) 555-0147</span>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#categories">
                    All collections
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#trending">
                    Weekly drops
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#stories">
                    Creator stories
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#newsletter">
                    Gift guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#partner">
                    Sell with us
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#stories">
                    Impact report
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#newsletter">
                    Events
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#top">
                    Our manifesto
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#newsletter">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#partner">
                    Brand toolkit
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#stories">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#top">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Aurora Market. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="transition hover:text-white" href="#top">
                Privacy
              </a>
              <a className="transition hover:text-white" href="#top">
                Terms
              </a>
              <a className="transition hover:text-white" href="#top">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
