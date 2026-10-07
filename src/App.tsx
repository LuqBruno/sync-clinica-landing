import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { contact, maps, posts, services, team, whatsapp } from "./content";
const base = import.meta.env.BASE_URL;
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CTA({
  children = "Conversar sobre uma avaliação",
  light = false,
}: {
  children?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""}`}
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow />
    </a>
  );
}
function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Sync Clínica — início">
      <img
        src={`${base}media/logo.webp`}
        alt="SYNC — Reabilitação Funcional Avançada"
        width="240"
        height="94"
      />
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nav.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const key = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (e.key === "Tab") {
        const nodes = [
          trigger.current,
          ...Array.from(nav.current?.querySelectorAll<HTMLElement>("a") ?? []),
        ].filter(Boolean) as HTMLElement[];
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <button
          className="menu-toggle"
          ref={trigger}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="navigation"
          ref={nav}
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navegação principal"
        >
          <a href="#atendimentos" onClick={() => setOpen(false)}>
            Atendimentos
          </a>
          <a href="#equipe" onClick={() => setOpen(false)}>
            Equipe
          </a>
          <a href="#conteudos" onClick={() => setOpen(false)}>
            Conteúdos
          </a>
          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>
          <a
            className="nav-contact"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar avaliação
            <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
function Movement({ active = 0 }: { active?: number }) {
  return (
    <svg
      className={`movement movement-${active}`}
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle cx="200" cy="200" r="160" />
      <circle cx="200" cy="200" r="126" />
      <path d="M80 254c60-20 51-134 119-134s59 143 121 137" />
      <circle className="movement-point" cx="200" cy="120" r="10" />
      <path d="m299 76 33 31-43 8M102 324l-34-30 43-10" />
    </svg>
  );
}
function Treatments() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKey(e: KeyboardEvent, index: number) {
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = (index + 1) % services.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (index - 1 + services.length) % services.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = services.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <section id="atendimentos" className="treatments section">
      <div className="section-heading">
        <h2>
          Seu movimento.
          <br />
          <span>Seu plano de cuidado.</span>
        </h2>
        <p>
          Do idoso ao atleta, cada pessoa chega com uma história. Os recursos de
          atendimento são escolhidos a partir dela.
        </p>
      </div>
      <div className="care-explorer">
        <div
          role="tablist"
          aria-label="Atendimentos da Sync"
          className="care-tabs"
        >
          {services.map((s, i) => (
            <button
              key={s.name}
              role="tab"
              id={`tab-${i}`}
              aria-controls="care-panel"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              onKeyDown={(e) => onKey(e, i)}
              onClick={() => setActive(i)}
            >
              <span>{s.name}</span>
              <Arrow />
            </button>
          ))}
        </div>
        <div
          className="care-panel"
          role="tabpanel"
          id="care-panel"
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
        >
          <div className="care-visual">
            <Movement active={active} />
            <span>{services[active].cue}</span>
          </div>
          <div className="care-copy">
            <h3>{services[active].title}</h3>
            <p>{services[active].text}</p>
            <p>{services[active].detail}</p>
            <a
              className="text-link"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tirar minhas dúvidas
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function App() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animations.push(
              e.target.animate(
                [
                  { opacity: 0.65, transform: "translateY(16px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                { duration: 650, easing: "cubic-bezier(.16,1,.3,1)" },
              ),
            );
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.13 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <section className="hero" id="inicio">
          <div className="hero-top">
            <p className="hero-location">Fisioterapia em Tubarão, SC</p>
            <p className="hero-tagline">Reabilitação funcional avançada</p>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1>
                Movimento{" "}
                <br />e ciência.
                <br />
                <span>Em sincronia com você.</span>
              </h1>
              <p>
                Um cuidado personalizado para quem precisa se recuperar de
                dores, lesões ou cirurgias ortopédicas.
              </p>
              <CTA />
              <a className="hero-more" href="#atendimentos">
                Conheça os atendimentos
                <Arrow />
              </a>
            </div>
            <div className="hero-photo">
              <img
                src={`${base}media/equipe.webp`}
                alt="Marcos, Henrique e Vitor, os três fisioterapeutas da Sync, reunidos no retrato oficial da equipe"
                width="1440"
                height="960"
                fetchPriority="high"
                decoding="async"
              />
              <div className="photo-caption">
                <span>Três profissionais.</span>
                <strong>Um cuidado em conjunto.</strong>
              </div>
            </div>
            <div className="hero-orbit" aria-hidden="true" />
          </div>
          <div className="hero-bottom">
            <span>A sua história orienta o nosso cuidado.</span>
            <a href="#equipe">
              Conheça quem cuida de você
              <Arrow diagonal />
            </a>
          </div>
        </section>
        <Treatments />
        <section id="equipe" className="team-section section">
          <div className="section-heading" data-reveal>
            <h2>
              Três olhares.
              <br />
              <span>Em sincronia.</span>
            </h2>
            <div>
              <p>
                Na Sync, os fisioterapeutas avaliam, discutem os casos e
                constroem o plano de tratamento em conjunto.
              </p>
              <p className="small-note">
                Pessoas reais. Diferentes perspectivas. Atenção à sua história.
              </p>
            </div>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="person" key={person.name} data-reveal>
                <div className="person-photo">
                  <img
                    src={`${base}media/${person.image}.webp`}
                    alt={`Retrato oficial de ${person.name}`}
                    width="1440"
                    height="960"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{person.name}</h3>
                <p>{person.field}</p>
                <a
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conhecer o perfil profissional de ${person.name}`}
                >
                  Perfil profissional
                  <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="approach section">
          <div className="approach-statement" data-reveal>
            <h2>
              Antes de qualquer técnica,
              <br />
              <span>uma conversa sobre você.</span>
            </h2>
            <p>
              Avaliar, compreender e acompanhar. O atendimento começa com
              atenção ao que você sente e ao que faz parte da sua vida.
            </p>
          </div>
          <div className="approach-flow">
            <article>
              <span>Escuta</span>
              <p>Sua história e sua rotina fazem parte da avaliação.</p>
            </article>
            <article>
              <span>Análise em equipe</span>
              <p>Os profissionais discutem o caso e a proposta de cuidado.</p>
            </article>
            <article>
              <span>Acompanhamento</span>
              <p>O plano é conduzido com atenção às suas necessidades.</p>
            </article>
          </div>
        </section>
        <section id="conteudos" className="content-section section">
          <div className="section-heading" data-reveal>
            <h2>
              Informação também
              <br />
              <span>faz parte do cuidado.</span>
            </h2>
            <a
              className="text-link"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorar o Instagram
              <Arrow diagonal />
            </a>
          </div>
          <div className="posts-grid">
            {posts.map((post) => (
              <article className="post" key={post.title}>
                <a
                  className="post-cover"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ler no Instagram: ${post.title}`}
                >
                  <img
                    src={`${base}media/${post.image}.webp`}
                    alt={`Capa original da publicação da Sync: ${post.title}`}
                    width="1080"
                    height="1350"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <Arrow diagonal />
                  </span>
                </a>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a
                  className="text-link"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ler no Instagram
                  <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>
        <p className="post-source-note section">Capas das publicações oficiais; ilustrações não representam atendimentos da clínica.</p>
        <section id="contato" className="contact-section section">
          <div className="contact-intro" data-reveal>
            <h2>
              Vamos conversar
              <br />
              <span>sobre o seu movimento?</span>
            </h2>
            <p>
              Envie uma mensagem para consultar disponibilidade e solicitar sua
              avaliação. A equipe orienta você sobre o atendimento.
            </p>
            <CTA light />
            <span className="privacy-note">
              Comece pelo assunto geral. Preserve seus dados de saúde na
              primeira mensagem.
            </span>
          </div>
          <div className="contact-details">
            <h3>Encontre a Sync</h3>
            <address>
              {contact.address}
              <br />
              {contact.neighborhood}
              <br />
              CEP 88705-601
            </address>
            <a
              className="text-link"
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir rota no Google Maps
              <Arrow diagonal />
            </a>
            <div className="contact-line">
              <span>WhatsApp da clínica</span>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                {contact.display}
                <Arrow diagonal />
              </a>
            </div>
            <div className="contact-line">
              <span>Instagram</span>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @sync.clinica
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <Logo />
        <p>
          Movimento e ciência.
          <br />
          Em sincronia com você.
        </p>
        <small>
          Prévia comercial · conteúdo e uso dos materiais sujeitos à
          aprovação da clínica.
        </small>
      </footer>
    </>
  );
}
export default App;
