import Image from "next/image";

const features = [
  {
    title: "Mobil Odak",
    description:
      "Android ve iOS için performanslı, modern ve kullanıcı dostu deneyimler.",
  },
  {
    title: "Ürün Kalitesi",
    description:
      "Ölçeklenebilir mimari, güvenli altyapı ve hızlı iterasyon kültürü.",
  },
  {
    title: "Tasarım Dili",
    description:
      "Markanıza özel, estetik ve sezgisel arayüzler ile güçlü ilk izlenim.",
  },
];

const apps = [
  {
    name: "Ramazan İmsakiyesi 2026: Sayaç",
    description:
      "İmsak, iftar ve sahur vakitlerine özel geri sayım, sade ve hızlı kullanım.",
    status: "Yakında",
    logo: "/assets/ramazan-imsakiyesi.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-[#f4f2ff]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,75,200,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,143,38,0.08),transparent_55%,rgba(147,75,200,0.18))]" />

        <header className="relative z-10 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#7d4bd6]/25 blur-lg" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f0f1a] ring-1 ring-white/15 shadow-sm">
                  <Image
                    src="/assets/mobrixlabs-logo.png"
                    alt="MobrixLabs logo"
                    width={44}
                    height={44}
                    className="h-9 w-9 object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="pr-1">
                <p className="text-base font-semibold tracking-tight">
                  MobrixLabs
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Uygulama ve Oyun Stüdyosu
                </p>
              </div>
            </div>
            <nav className="flex w-full flex-wrap items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 md:w-auto">
              <a
                className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
                href="#hakkimizda"
              >
                Hakkımızda
              </a>
              <a
                className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
                href="#uygulamalar"
              >
                Uygulamalarımız
              </a>
              <a
                className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
                href="#iletisim"
              >
                İletişim
              </a>
            </nav>
            <a
              className="group inline-flex items-center gap-2 rounded-full bg-[#ff8f26] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#1b0f0a] shadow-lg shadow-[#ff8f26]/20 transition hover:bg-[#ff7a00]"
              href="mailto:info@mabrixlabs.com"
            >
              Bize Ulaşın
              <span className="text-sm transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-24 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-10 lg:pt-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b07dff]">
                MobrixLabs
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Mobil uygulama ve oyunlarda
                <span className="text-[#ff8f26]"> kusursuz deneyim </span>
                tasarlıyoruz.
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Startup ekibimizle, Play Store ve iOS için değer katan ürünler
                geliştiriyoruz. Kullanıcıların ihtiyaçlarına odaklanan, hızlı ve
                güvenilir uygulamalar üretiyoruz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="rounded-full bg-[#ff8f26] px-6 py-3 text-sm font-semibold text-[#1b0f0a] transition hover:bg-[#ff7a00]"
                  href="#uygulamalar"
                >
                  Uygulamalarımızı Gör
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/60 hover:text-white"
                  href="mailto:info@mabrixlabs.com"
                >
                  info@mabrixlabs.com
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-white/45">
                <span>Android</span>
                <span>iOS</span>
                <span>Oyun</span>
                <span>Uygulama</span>
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white/70">
                    Ürün İstatistikleri
                  </p>
                  <span className="rounded-full bg-[#ff8f26]/15 px-3 py-1 text-xs text-[#ffb266]">
                    2026
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Geliştirilen Ürün</p>
                    <p className="mt-2 text-2xl font-semibold">1</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Platform</p>
                    <p className="mt-2 text-2xl font-semibold">2</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Odak</p>
                    <p className="mt-2 text-2xl font-semibold">Mobil</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#7d4bd6]/30 blur-2xl" />
            </div>
          </section>

          <section
            id="hakkimizda"
            className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-sm">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-semibold">
                    Fikirden mağazaya, uçtan uca ürün teslimi.
                  </h2>
                  <p className="mt-4 text-white/70">
                    MobrixLabs, kullanıcıların hayatını kolaylaştıran uygulamalar
                    ve oyunlar üretir. Hızlı prototipleme, güçlü mühendislik ve
                    estetik tasarım anlayışıyla ürünlerimizi yayınlıyoruz.
                  </p>
                </div>
                <div className="grid flex-1 gap-4 sm:grid-cols-3">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-sm font-semibold">{feature.title}</p>
                      <p className="mt-2 text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="uygulamalar"
            className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10"
          >
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b07dff]">
                  Uygulamalarımız
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Yayınlanan ve yakında çıkacak ürünlerimiz.
                </h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {apps.map((app) => (
                  <div
                    key={app.name}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <Image
                            src={app.logo}
                            alt={`${app.name} logosu`}
                            width={52}
                            height={52}
                            className="h-12 w-12 rounded-xl object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{app.name}</h3>
                          <p className="mt-2 text-sm text-white/70">
                            {app.description}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-[#ff8f26]/60 px-3 py-1 text-xs text-[#ffb266]">
                        {app.status}
                      </span>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        className="cursor-not-allowed rounded-full border border-white/10 px-4 py-2 text-xs text-white/40"
                        type="button"
                        aria-disabled="true"
                      >
                        Play Store Yakında
                      </button>
                      <button
                        className="cursor-not-allowed rounded-full border border-white/10 px-4 py-2 text-xs text-white/40"
                        type="button"
                        aria-disabled="true"
                      >
                        App Store Yakında
                      </button>
                    </div>
                  </div>
                ))}
                <div className="rounded-3xl border border-dashed border-[#7d4bd6]/40 bg-white/5 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-white/70">
                    Sıradaki ürünler
                  </p>
                  <p className="mt-3 text-sm text-white/60">
                    Yeni fikirler üzerinde çalışıyoruz. Duyurular için bizi
                    takipte kalın.
                  </p>
                  <a
                    className="mt-6 inline-flex rounded-full border border-[#ff8f26]/60 px-4 py-2 text-xs text-white/70 transition hover:border-[#ff8f26] hover:text-white"
                    href="mailto:info@mabrixlabs.com"
                  >
                    İş birliği için iletişime geçin
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="iletisim"
            className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-sm">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">İletişim</h2>
                  <p className="mt-3 text-white/70">
                    Proje iş birlikleri, yatırım görüşmeleri veya ürün fikirleri
                    için bize yazın.
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <span className="text-white/60">E-posta</span>
                  <a
                    className="text-lg font-semibold text-[#ffb266]"
                    href="mailto:info@mabrixlabs.com"
                  >
                    info@mabrixlabs.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-white/45 sm:flex-row lg:px-10">
          <span>© 2026 MobrixLabs. Tüm hakları saklıdır.</span>
          <span>Mobil uygulama ve oyun stüdyosu.</span>
        </div>
      </footer>
    </div>
  );
}
