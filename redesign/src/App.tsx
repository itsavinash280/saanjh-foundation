import { useState, useEffect } from 'react';
import { useReducedMotion, motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Heart, HandsClapping, Plant, SunHorizon, List, X, WhatsappLogo, EnvelopeSimple, Plus, Minus } from '@phosphor-icons/react';
import { TextAnimate } from '@/registry/magicui/text-animate';
import people from './team.json';
import '@fontsource-variable/manrope';
import '@fontsource/caveat/latin-500.css';
import '@fontsource/caveat/latin-700.css';
import './style.css';
import './scrapbook.css';

const category = (i: number) => i < 2 ? 'Founders' : i < 10 ? 'Department leads' : i < 13 ? 'Coordination' : 'Catalysts';
function Heading({children, className = ''}: {children: string;className?: string}) {
  const reduced = useReducedMotion();
  return reduced ? <span className={className}>{children}</span> : <TextAnimate as="span" animation="blurInUp" by="character" once className={className} duration={0.65}>{children}</TextAnimate>;
}
function Reveal({children, className, delay = 0}: {children: React.ReactNode; className: string; delay?: number}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : {opacity: 0, y: 18, rotate: -1}} whileInView={{opacity: 1, y: 0, rotate: 0}} viewport={{once: true, amount: 0.15}} transition={{duration: 1.05, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1]}}>{children}</motion.div>;
}
export default function App() {
  const [menu, setMenu] = useState(false);
  const [intent, setIntent] = useState('Volunteer my time');
  const [faq, setFaq] = useState<number | null>(0);
  useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  const questions = [
    ['How can I become a volunteer?', 'Connect with our Volunteer Coordinator on WhatsApp. Tell us a little about yourself, your availability and how you would like to help. We will discuss the next steps together.'],
    ['Can I contribute resources?', 'Yes, we would love to hear what you can share. Contact our registrations team first so we can discuss needs and coordinate thoughtfully.'],
    ['Where can I see your work?', 'We are at the beginning of our journey and have no visits or completed projects to share yet. Our journey section will grow with verified updates as the work begins.'],
    ['How can an organisation partner with Saanjh?', 'Email saanjh.foundationjmu@gmail.com with a short introduction and how you would like to collaborate. Our team can explore the possibilities with you.'],
  ];
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><div className="shell nav">
      <a className="brand" href="#home" aria-label="Saanjh Foundation home">saanjh<span>•</span><small>FOUNDATION</small></a>
      <nav id="navigation" className={menu ? 'navigation open' : 'navigation'} aria-label="Main navigation">{[['Our story','story'],['Our purpose','purpose'],['Our people','people'],['Our journey','journey']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<a className="mobile-join" href="#join" onClick={() => setMenu(false)}>Get involved <ArrowUpRight/></a></nav>
      <a className="button small nav-join" href="#join">Get involved <ArrowUpRight size={17}/></a><button className="menu" aria-expanded={menu} aria-controls="navigation" aria-label={menu ? 'Close menu' : 'Open menu'} onClick={() => setMenu(!menu)}>{menu ? <X/> : <List/>}</button>
    </div></header>
    <main id="main">
      <section className="shell hero" id="home">
        <div className="hero-copy"><p className="eyebrow scrapbook-label">A little collection of kindness</p><h1><Heading>Care begins</Heading><br/><Heading className="rust">with us.</Heading></h1><p className="intro">A little time. A helping hand. A world where everyone feels seen.</p><a className="button" href="#join">Get involved <ArrowUpRight size={19}/></a><a className="quiet-link" href="#story">Discover our story <ArrowRight size={17}/></a></div>
        <div className="hero-art" aria-label="Saanjh values"><div className="hero-note note-one"><SunHorizon size={34}/><span><Heading>Care for</Heading><br/><Heading>today.</Heading></span></div><div className="hero-note note-two"><Plant size={34}/><span><Heading>A chance</Heading><br/><Heading>to grow.</Heading></span></div><div className="hero-note note-three"><HandsClapping size={34}/><span><Heading>Better</Heading><br/><Heading>together.</Heading></span></div><div className="care-tile"><Heart weight="regular" size={44}/><span><Heading>A little care.</Heading><br/><Heading>A fairer chance.</Heading></span></div><div className="art-caption"><span>Different people. One shared purpose.</span><ArrowUpRight size={22}/></div></div>
      </section>
      <div className="values-band"><div className="shell values"><span><SunHorizon/> Rooted in compassion</span><span><Heart/> Guided by dignity</span><span><Plant/> Growing together</span></div></div>
      <section className="shell story section" id="story"><div><h2><Heading>Kindness is a start.</Heading><br/><Heading className="soft">Showing up is what matters.</Heading></h2></div><Reveal className="story-copy"><p>We believe the things we take for granted can mean the world to someone else.</p><p>Saanjh brings people together to share what they can, whether time, resources or a helping hand, so more people can access everyday essentials and opportunities.</p><p>We are just beginning. Our promise is simple: listen first, act with care, and respect the dignity of every person.</p><a className="underlink" href="#people">Meet the people behind the purpose <ArrowUpRight/></a></Reveal></section>
      <section className="purpose-section" id="purpose"><div className="shell section"><div className="purpose-heading"><h2><Heading>Care for today.</Heading><br/><Heading className="soft">Possibility for tomorrow.</Heading></h2><p>Three intentions. One belief: everyone deserves a fairer chance.</p></div><div className="purpose-grid"><Reveal className="purpose-card essentials"><SunHorizon size={42} weight="light"/><div><span className="card-label">THE EVERYDAY</span><h3>Essentials that<br/>make a difference.</h3><p>Helping people access the basics that make each day a little easier.</p></div></Reveal><Reveal className="purpose-card growth" delay={0.15}><Plant size={42} weight="light"/><div><span className="card-label">THE TOMORROW</span><h3>A chance<br/>to grow.</h3><p>Encouraging learning and opportunities that help people move forward.</p></div></Reveal><Reveal className="purpose-card dignity" delay={0.3}><Heart size={42} weight="light"/><div><span className="card-label">THE WAY WE CARE</span><h3>Dignity.<br/>Always.</h3><p>Listening to each story and respecting people’s needs, choices and voices.</p></div></Reveal></div></div></section>
      <section className="shell section people-section" id="people"><div className="people-heading"><div><p className="eyebrow">GOOD PEOPLE. SHARED PURPOSE.</p><h2><Heading>The heart of Saanjh.</Heading></h2><p>A team coming together to make care reach further.</p></div><span className="people-count">17 people.<br/><strong>One beginning.</strong></span></div><div className="album-note">The people making this story possible.</div><div className="team-grid">{people.map((p, i) => <article className="person" key={p.name}><div className="person-photo"><img src={p.image} alt={p.name} loading="lazy" width="400" height="480"/></div><span className="person-group">{category(i)}</span><h3>{p.name}</h3><p>{p.role}</p></article>)}</div></section>
      <section className="journey-section" id="journey"><div className="shell journey section"><div className="journey-title"><SunHorizon size={55} weight="light"/><h2><Heading>Every journey</Heading><br/><Heading>starts somewhere.</Heading></h2><p><Heading>Ours starts with listening.</Heading></p></div><Reveal className="journey-content"><span className="status">OUR JOURNEY IS JUST BEGINNING</span><p className="journey-lead"><Heading>We are building the foundation.</Heading><br/><Heading>Thoughtfully. Together.</Heading></p><p>We haven’t visited any places or completed projects yet. As our work begins, this space will hold honest stories, visits and lessons from the ground.</p><div className="journey-steps"><div><span>Now</span><strong>Bringing our people together</strong></div><div><span>Next</span><strong>Listening to community needs</strong></div><div><span>Ahead</span><strong>Turning shared care into action</strong></div></div><a href="#join" className="underlink">Get involved <ArrowUpRight/></a></Reveal></div></section>
      <section className="shell section join-section" id="join"><div className="join-copy"><p className="eyebrow">THERE’S A PLACE FOR YOU HERE</p><h2><Heading>A little of your time.</Heading><br/><Heading className="rust">A lot of possibility.</Heading></h2><p>You don’t need to have all the answers. Just a little kindness and the willingness to show up.</p><div className="join-note"><HandsClapping size={28}/><span>Volunteer. Share resources. Start a conversation.</span></div></div><Reveal className="join-panel"><h3><Heading>How would you like to help?</Heading></h3><p>Choose a starting point. Let’s take it from there.</p><div className="intent-options" role="group" aria-label="How you would like to contribute">{['Volunteer my time','Share resources','Partner with Saanjh'].map(v=><button aria-pressed={intent===v} key={v} className={intent===v?'selected':''} onClick={()=>setIntent(v)}>{v}<span>{intent===v?'✓':'+'}</span></button>)}</div><a className="button" href={intent==='Partner with Saanjh'?`mailto:saanjh.foundationjmu@gmail.com?subject=${encodeURIComponent('Partnering with Saanjh')}`:`https://wa.me/${intent==='Volunteer my time'?'919149944811':'919596697733'}?text=${encodeURIComponent(`Hello Saanjh! I would like to ${intent.toLowerCase()}. How can I get involved?`)}`} target={intent==='Partner with Saanjh'?undefined:'_blank'} rel="noopener noreferrer">{intent==='Partner with Saanjh'?<EnvelopeSimple size={21}/>:<WhatsappLogo size={21}/>} {intent==='Partner with Saanjh'?'Email the team':'Let’s talk on WhatsApp'}<ArrowUpRight size={17}/></a><small>{intent==='Volunteer my time'?'Connects you with our Volunteer Coordinator':intent==='Share resources'?'Connects you with our Head of Registrations':'Opens a message in your email app'}</small></Reveal></section>
      <section className="shell faq-section"><h2><Heading>A few things you</Heading><br/><Heading>might be wondering.</Heading></h2><Reveal className="faq-paper">{questions.map(([q,a],i)=><div className="faq" key={q}><h3><button aria-expanded={faq===i} aria-controls={`answer-${i}`} onClick={()=>setFaq(faq===i?null:i)}>{q}{faq===i?<Minus/>:<Plus/>}</button></h3><div id={`answer-${i}`} hidden={faq!==i}><p>{a}</p>{i===0&&<a className="underlink" target="_blank" rel="noopener noreferrer" href="https://wa.me/919149944811">Speak with our coordinator <ArrowUpRight/></a>}</div></div>)}</Reveal></section>
    </main>
    <footer><div className="shell"><div className="footer-top"><div><a className="brand footer-brand" href="#home">saanjh<span>•</span></a><p>A little care. A brighter tomorrow.</p></div><div className="footer-contact"><span>LET’S KEEP IN TOUCH</span><a href="mailto:saanjh.foundationjmu@gmail.com">saanjh.foundationjmu@gmail.com <ArrowUpRight/></a><div><a href="https://wa.me/919596697733" target="_blank" rel="noopener noreferrer">Registrations · +91 95966 97733</a><a href="https://wa.me/919149944811" target="_blank" rel="noopener noreferrer">Volunteering · +91 91499 44811</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Saanjh Foundation</span><span>Built on kindness. Growing with you.</span><a href="#home">Back to top ↑</a></div></div></footer>
  </>;
}









