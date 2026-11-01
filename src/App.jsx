import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, BookOpen, Braces, BrainCircuit,
  Check, ChevronDown, Code2, Download, ExternalLink, FileText, Github, GraduationCap,
  Layers3, Linkedin, Mail, Menu, Microscope, Orbit, ScanSearch, Sparkles, Sun,
  Telescope, X, Network, Workflow, Satellite, Trophy, Users, CalendarDays, MapPin,
  MessageCircle, Terminal, Eye, FlaskConical
} from 'lucide-react';

const profile = {
  name: 'Apurba Das',
  email: 'apurba131223@gmail.com',
  github: 'https://github.com/apurbasbjk30',
  linkedin: 'https://www.linkedin.com/in/apurbasbjk30/',
  cv: '/assets/CV_Apurba_Das (3).pdf',
};

const research = [
  {
    id: '01', title: 'Hierarchical Evidence Localization for Retrieval-Augmented Scientific Literature Understanding',
    short: 'HIRAG explores how document structure can improve evidence localization in scientific question answering, helping retrieval systems find the right passages before an answer is generated.',
    status: 'Manuscript submitted · 2026', venue: 'Information Sciences',
    tone: 'rose', icon: Network,
    flow: ['Scientific paper', 'Document graph', 'Section selection', 'Evidence retrieval', 'Answer generation'],
    contributions: [
      'Hierarchical Scientific Document Graphs (HSDGs) represent relationships between sections.',
      'A Query-Aware Section Selector (QASS) predicts sections relevant to a question.',
      'Structure-aware candidate expansion works alongside dense semantic retrieval.',
      'Evaluation considers retrieval quality, evidence localization, answer quality, and efficiency.'
    ],
    methods: ['NLP', 'RAG', 'Information Retrieval', 'Dense Embeddings', 'FAISS', 'Mistral'],
    note: 'Paper and code links can be added once public URLs are available.'
  },
  {
    id: '02', title: 'CME-Swin: CME Morphology Learning with Swin Transformer for Geomagnetic Storm Occurrence Prediction',
    short: 'This work explores transformer-based visual representation learning for coronal mass ejection (CME) morphology and its application to geomagnetic storm occurrence prediction.',
    status: 'Accepted for presentation · publication processing', venue: 'ICMLDE 2026',
    tone: 'sand', icon: Satellite,
    flow: ['CME imagery', 'Swin Transformer', 'Morphological features', 'Storm prediction'],
    contributions: [
      'Applies deep learning to solar-event imagery.',
      'Learns visual features associated with CME morphology.',
      'Connects computer vision methods with space-weather prediction.'
    ],
    methods: ['Computer Vision', 'Swin Transformer', 'Deep Learning', 'Space Weather'],
    note: 'Accepted for conference presentation and further processing for publication in Procedia Computer Science.'
  },
  {
    id: '03', title: 'A Storm-Centric Multi-CME Event Fusion Framework for Geomagnetic Storm Intensity Prediction',
    short: 'SCMEF studies relationships between multiple CME events, solar-wind observations, and geomagnetic storm intensity through temporal feature engineering and machine learning.',
    status: 'Accepted for presentation', venue: 'URSI-RCRS 2026 · Paper ID 1163',
    tone: 'sage', icon: Orbit,
    flow: ['CME events', 'Solar-wind data', 'Temporal features', 'Intensity prediction'],
    contributions: [
      'Fuses multiple CME events around a storm-centric time window.',
      'Uses time-lagged solar-wind features to capture temporal context.',
      'Explores machine learning for geomagnetic storm intensity prediction.'
    ],
    methods: ['XGBoost', 'Time-Series Modeling', 'Solar Physics', 'Machine Learning'],
    note: 'Session G05 — Machine Learning Methods for Ionospheric Modeling.'
  }
];

const projects = [
  {
    name: 'SUSTAIN-X', category: 'NLP · Explainable AI', tone: 'rose', icon: ScanSearch,
    title: 'Explainable NLP for Climate Adaptation and Urban Sustainability Analysis',
    description: 'A decision-support system for analyzing climate-adaptation policies and urban-sustainability challenges using citizen grievance text, interpretable indicators, and sentence-level evidence.',
    highlights: ['Urban Sustainability Stress Index', 'Evidence-linked policy analysis', 'Explainable text-based insights'],
    tech: ['NLP', 'Text Analytics', 'Explainable AI'],
    link: 'https://github.com/apurbasbjk30/SUSTAIN-X/tree/main', linkLabel: 'Explore repository'
  },
  {
    name: 'Earth Observation', category: 'Computer Vision · Geospatial', tone: 'sand', icon: Satellite,
    title: 'AI-Based Land-Use Classification of the Delhi-NCR Airshed',
    description: 'A geospatial deep-learning pipeline using Sentinel-2 satellite imagery and ESA WorldCover labels to classify land-use categories.',
    highlights: ['8,000+ satellite image patches', 'CNN and ResNet18 models', 'Class-weighted loss for class imbalance'],
    tech: ['PyTorch', 'ResNet18', 'Remote Sensing'],
    link: 'https://github.com/apurbasbjk30/Earth_Observation', linkLabel: 'Explore repository'
  },
  {
    name: 'Go-Clean', category: 'AI for Governance', tone: 'sage', icon: Eye,
    title: 'Garbage Detection and Automated Challan System',
    description: 'An AI-assisted cleanliness-monitoring platform using YOLOv5-based garbage detection, CCTV feeds, violation logging, and automated challan generation.',
    highlights: ['Object detection workflow', 'Violation logging', 'Live demonstration available'],
    tech: ['YOLOv5', 'Computer Vision', 'AI for Governance'],
    link: 'https://go-clean-qp3b.onrender.com', linkLabel: 'Open live demo'
  },
  {
    name: 'X-Ray Classification', category: 'Deep Learning · Medical Imaging', tone: 'lilac', icon: FlaskConical,
    title: 'X-Ray Image Classification using Deep Learning',
    description: 'A medical image-classification project exploring deep-learning architectures for X-ray image analysis.',
    highlights: ['Image preprocessing', 'CNN-based classification', 'Model evaluation'],
    tech: ['Deep Learning', 'CNN', 'Medical Imaging'],
    link: 'https://github.com/apurbasbjk30/Covid-19-detection-using-xRays', linkLabel: 'Explore repository'
  }
];

const publications = [
  { year: '2026', title: 'CME-Swin: CME Morphology Learning with Swin Transformer for Geomagnetic Storm Occurrence Prediction', venue: 'ICMLDE 2026', status: 'Accepted for presentation; publication processing', icon: Satellite },
  { year: '2026', title: 'Hierarchical Evidence Localization for Retrieval-Augmented Scientific Literature Understanding', venue: 'Information Sciences', status: 'Manuscript submitted', icon: Network },
  { year: '2026', title: 'A Storm-Centric Multi-CME Event Fusion Framework for Geomagnetic Storm Intensity Prediction', venue: 'URSI-RCRS 2026 · Paper ID 1163', status: 'Accepted for presentation · Session G05', icon: Orbit },
  { year: '2025', title: 'Ransomware Detection using Machine Learning', venue: 'National CSI Seminar', status: 'Presented · February 2025', icon: ShieldIcon }
];

function ShieldIcon(props) { return <Terminal {...props} />; }

const experience = [
  { date: 'Summer 2026', role: 'Summer Research Intern', org: 'National Institute of Technology Rourkela', supervisor: 'Dr. Prasenjit Dey', detail: 'Worked on hierarchical evidence localization for scientific literature understanding, query-aware section selection, and structure-aware retrieval.' },
  { date: 'Summer 2024', role: 'Summer Research Intern', org: 'Banaras Hindu University', supervisor: 'Dr. Sachchida Nand Chaurasia · Department of Computer Science', detail: 'Explored storm-centric multi-CME event fusion and machine learning for geomagnetic storm intensity prediction.' },
  { date: 'Jan–Mar 2025', role: 'AI & ML Intern', org: 'Briztech Infotechs', detail: 'Contributed to data preprocessing, model training, and model evaluation.' },
  { date: 'Jan–Feb 2025', role: 'Web Development Intern', org: 'Suvidha Foundation', detail: 'Developed and deployed responsive web interfaces, with work across usability, testing, and website maintenance.' }
];

const achievements = [
  { icon: GraduationCap, value: '9.56 / 10', title: 'Reported CGPA', detail: 'Academic performance, as stated in my resume.' },
  { icon: Code2, value: 'NPTEL Elite', title: 'Programming in Java', detail: 'Elite certificate · 2024.' },
  { icon: MessageCircle, value: 'Research talk', title: 'National CSI Seminar', detail: 'Presented work on ransomware detection using machine learning · February 2025.' },
  { icon: Telescope, value: 'IIT Kharagpur', title: 'National Space Challenge', detail: 'Attendee · 2025.' },
  { icon: BrainCircuit, value: 'GIAN Course', title: 'AI in Engineering Business Processes', detail: 'NIT Rourkela.' },
  { icon: Sun, value: 'IUCAA Workshop', title: 'Data Analytics', detail: 'Workshop at IIT Kharagpur · 2024.' },
  { icon: Sparkles, value: 'Recognition', title: 'Token of Excellence', detail: 'Web Development.' }
];

const leadership = [
  ['2026–Present', 'Vice President', 'Code Crafter Programming Club'],
  ['2025–Present', 'Co-Technical Secretary', 'Computer Society of India · CUJ Student Chapter'],
  ['2025–2026', 'Joint Secretary', 'Code Crafter Programming Club'],
  ['2024–2025', 'Technical Executive', 'Code Crafter Programming Club']
];

const skills = [
  { title: 'NLP & Retrieval', icon: ScanSearch, items: ['Retrieval-Augmented Generation', 'Semantic Search', 'Sentence Embeddings', 'Dense Retrieval', 'FAISS'] },
  { title: 'Machine Learning', icon: BrainCircuit, items: ['XGBoost', 'Random Forest', 'Scikit-learn', 'Regression', 'Classification'] },
  { title: 'Deep Learning', icon: Layers3, items: ['PyTorch', 'TensorFlow', 'CNNs', 'LSTMs', 'Transfer Learning', 'YOLO'] },
  { title: 'Programming & Data', icon: Braces, items: ['Python', 'C++', 'Java', 'JavaScript', 'NumPy', 'Pandas'] },
  { title: 'Geospatial & Vision', icon: Satellite, items: ['OpenCV', 'GeoPandas', 'Rasterio', 'Satellite Image Analysis'] }
];

const interests = ['Natural Language Processing', 'Retrieval-Augmented Generation', 'Information Retrieval', 'Large Language Models', 'Scientific Question Answering', 'Evidence-Grounded AI', 'Deep Learning', 'Explainable AI'];
const navItems = ['About', 'Research', 'Publications', 'Projects', 'Experience', 'Achievements', 'Contact'];

function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, subtitle, number }) {
  return <Reveal className="section-heading">
    <div className="section-eyebrow"><span>{number}</span><i />{eyebrow}</div>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </Reveal>;
}

function Tag({ children }) { return <span className="tag">{children}</span>; }

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const ids = ['home', ...navItems.map(n => n.toLowerCase())];

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.id;
          setActive(id === 'home'
            ? 'Home'
            : id.charAt(0).toUpperCase() + id.slice(1)
          );
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.2, 0.5]
      }
    );

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const go = (item) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      setMenuOpen(false);
      setActive(item);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Main navigation">

        <a
          className="brand"
          href="#home"
          onClick={() => {
            setMenuOpen(false);
            setActive('Home');
          }}
        >
          AD<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {['Home', ...navItems].map(item => (
            <button
              key={item}
              className={active === item ? 'nav-link active' : 'nav-link'}
              onClick={() => go(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <a className="nav-cv" href={profile.cv} download>
          <Download size={14} /> CV
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>


      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          {['Home', ...navItems].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mobile-nav-link"
              onClick={() => {
                // Allow the browser to navigate before closing the menu
                window.setTimeout(() => {
                  setMenuOpen(false);
                }, 300);
              }}
            >
              <span>{item}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}

          <a className="mobile-cv" href={profile.cv} download>
            Download CV <Download size={15} />
          </a>
        </div>
      )}
    </header>
  );
}

function Portrait() {
  return <div className="portrait-stage" aria-label="Apurba Das profile portrait with research decorations">
    <div className="portrait-halo" />
    <div className="portrait-card real-portrait-card">
      <div className="portrait-top"><span>PROFILE / 01</span><span>AD—26</span></div>
      <div className="real-portrait-wrap">
        <img className="real-portrait" src="/assets/apurba-profile.jpg" alt="Apurba Das wearing a teal blazer" />
      </div>
      <div className="portrait-bottom"><span>CURIOUS BY DESIGN</span><span><Sparkles size={13}/></span></div>
    </div>
    <motion.div className="research-girl" animate={{y:[0,-5,0],rotate:[-2,1,-2]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}} aria-label="Illustrated girl researcher companion">
      <div className="girl-hair"><div className="girl-face"><i className="girl-eye eye-a"/><i className="girl-eye eye-b"/><i className="girl-smile"/></div></div>
      <div className="girl-neck"/><div className="girl-coat"><span className="girl-lapel"/></div>
      <div className="girl-laptop"><span>AI</span></div>
      <span className="girl-caption">little researcher</span>
    </motion.div>
    <motion.div className="float-note note-book" animate={{y:[0,-7,0],rotate:[-4,-1,-4]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}><BookOpen size={18}/><span>research notes</span></motion.div>
    <motion.div className="float-note note-rag" animate={{y:[0,6,0]}} transition={{duration:4.2,repeat:Infinity,ease:'easeInOut'}}><span className="tiny-dot"/> NLP & RAG</motion.div>
    <motion.div className="float-note note-network" animate={{y:[0,-5,0],rotate:[2,-2,2]}} transition={{duration:4.8,repeat:Infinity,ease:'easeInOut'}}><BrainCircuit size={16}/><span>evidence-led AI</span></motion.div>
    <motion.div className="orbit orbit-one" animate={{rotate:360}} transition={{duration:38,repeat:Infinity,ease:'linear'}}><span/></motion.div>
    <span className="hand-note">curious by design ↗</span>
    <span className="decor-star star-one">✳</span><span className="decor-star star-two">✧</span>
  </div>;
}

function Hero() {
  return <section id="home" className="hero-section">
    <div className="container hero-grid">
      <div className="hero-copy">
        <motion.div className="eyebrow-pill" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span className="live-dot"/> COMPUTER SCIENCE RESEARCHER <b>·</b> NLP <b>·</b> LLMs</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}}>Building AI that<br/>finds the <em>right evidence.</em></motion.h1>
        <motion.p className="hero-description" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:.7}}>I'm <strong>Apurba Das</strong>, an integrated Computer Science and Engineering student at the Central University of Jharkhand. I explore NLP, Retrieval-Augmented Generation, and AI systems that retrieve relevant evidence and reason over complex scientific information.</motion.p>
        <motion.p className="hero-subline" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}>Exploring the intersection of language, retrieval, and trustworthy AI.</motion.p>
        <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.65}}>
          <a className="button button-primary" href="#research">Explore my research <ArrowDownRight size={16}/></a>
          <a className="button button-outline" href="#publications">View publications <ArrowRight size={15}/></a>
        </motion.div>
        <motion.div className="social-row" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
          <a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={12}/></a>
        </motion.div>
      </div>
      <Reveal className="hero-visual" delay={.3}><Portrait/></Reveal>
    </div>
    <div className="hero-bottom container"><span><span className="scroll-line"/> SCROLL TO EXPLORE</span><span>RESEARCH · SYSTEMS · DISCOVERY</span></div>
    <div className="hero-blob blob-a"/><div className="hero-blob blob-b"/>
  </section>;
}

function About() {
  return <section id="about" className="section about-section">
    <div className="container">
      <SectionHeading number="01" eyebrow="THE PERSON BEHIND THE PAPERS" title={<>A little about <em>my work.</em></>} subtitle="Curiosity starts with a question. Good research follows the evidence."/>
      <div className="about-grid">
        <Reveal className="about-story"><p className="dropcap">I am a Computer Science and Engineering student interested in developing intelligent systems that can retrieve, organize, and reason over complex information.</p><p>My current research interests include scientific literature understanding, hierarchical information retrieval, retrieval-augmented generation, and evidence-grounded language models. Alongside NLP and information retrieval, I work on machine learning and deep learning methods for scientific applications, including solar and geomagnetic phenomena.</p>
          <div className="education-note"><GraduationCap size={20}/><div><strong>Integrated B.Tech. & M.Tech.</strong><span>Computer Science & Engineering · Central University of Jharkhand</span></div></div>
          <div className="mini-experience"><span className="mini-icon"><Microscope size={16}/></span><span>Research experience at <strong>NIT Rourkela</strong> and <strong>Banaras Hindu University</strong></span></div>
        </Reveal>
        <Reveal className="interest-panel" delay={.1}><div className="interest-heading"><span>WHAT I'M EXPLORING</span><Sparkles size={16}/></div><div className="interest-tags">{interests.map((t,i)=><motion.span key={t} whileHover={{y:-3,scale:1.025}} transition={{type:'spring',stiffness:300}}><span className="interest-index">0{i+1}</span>{t}</motion.span>)}</div><div className="interest-foot"><Orbit size={16}/><span>Questions first. Evidence always.</span></div></Reveal>
      </div>
    </div>
  </section>;
}

function ResearchVisual({item}) {
  const Icon = item.icon;
  return <div className={`research-visual ${item.tone}`}>
    <div className="visual-topline"><span>RESEARCH PIPELINE</span><span>FIG. {item.id}</span></div>
    <div className="visual-orbit"><div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="visual-core"><Icon size={30}/></div><span className="orbit-dot dot-a"/><span className="orbit-dot dot-b"/><span className="orbit-dot dot-c"/></div>
    <div className="pipeline">{item.flow.map((step,i)=><React.Fragment key={step}><div className="pipeline-node"><span>0{i+1}</span><b>{step}</b></div>{i<item.flow.length-1&&<div className="pipeline-arrow"><ArrowRight size={14}/></div>}</React.Fragment>)}</div>
    <div className="visual-foot"><span>METHOD / OVERVIEW</span><span>APURBA DAS <ArrowUpRight size={12}/></span></div>
  </div>;
}

function Research() {
  const [expanded, setExpanded] = useState('01');
  return <section id="research" className="section research-section">
    <div className="container">
      <SectionHeading number="02" eyebrow="QUESTIONS → METHODS → EVIDENCE" title={<>Research & scientific <em>exploration.</em></>} subtitle="Building systems that connect complex data, relevant evidence, and meaningful answers."/>
      <div className="research-list">{research.map((item,i)=>(
        <Reveal key={item.id} delay={i*.07} className={`research-item ${item.tone}`}>
          <div className="research-index"><span>{item.id}</span><div className="index-line"/></div>
          <div className="research-main">
            <div className="research-meta"><span className="micro-label">{item.venue}</span><span className="status-dot-label"><i/>{item.status}</span></div>
            <h3>{item.title}</h3><p className="research-summary">{item.short}</p>
            <div className="research-tags">{item.methods.map(t=><Tag key={t}>{t}</Tag>)}</div>
            <button className="text-action" aria-expanded={expanded===item.id} onClick={()=>setExpanded(expanded===item.id?null:item.id)}>{expanded===item.id?'Hide research details':'Read research details'} <ChevronDown className={expanded===item.id?'chevron turned':''} size={16}/></button>
            <AnimatePresence initial={false}>{expanded===item.id&&<motion.div className="research-expanded" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}><div className="expanded-inner"><h4>What this work explores</h4><ul>{item.contributions.map(c=><li key={c}>{c}</li>)}</ul><p className="research-note"><FileText size={15}/>{item.note}</p></div></motion.div>}</AnimatePresence>
          </div>
          <ResearchVisual item={item}/>
        </Reveal>
      ))}</div>
      <div className="research-footer"><span className="footer-star">✳</span><p>Different domains, one shared question:<br/><strong>How can intelligent systems find and use the evidence that matters?</strong></p></div>
    </div>
  </section>;
}

function Publications() {
  const [open, setOpen] = useState(null);
  return <section id="publications" className="section publications-section">
    <div className="container">
      <SectionHeading number="03" eyebrow="PAPERS · TALKS · SHARED IDEAS" title={<>Publications & <em>presentations.</em></>} subtitle="A record of research in progress, conference presentations, and work shared with the community."/>
      <div className="publication-list">{publications.map((p,i)=>{const Icon=p.icon;return <Reveal key={p.title} delay={i*.06} className="publication-row">
        <div className="pub-year">{p.year}<span/></div><div className="pub-icon"><Icon size={20}/></div><div className="pub-content"><div className="pub-venue">{p.venue}</div><h3>{p.title}</h3><p className="pub-status"><span className="status-pill">{p.status}</span></p>{open===i&&<motion.p className="pub-extra" initial={{opacity:0,y:5}} animate={{opacity:1,y:0}}>{p.title.includes('HIRAG')?'Research on hierarchical evidence localization and structure-aware retrieval for scientific question answering.':p.title.includes('CME-Swin')?'Transformer-based visual representation learning for CME morphology and geomagnetic storm occurrence prediction.':p.title.includes('Storm-Centric')?'Multi-CME event fusion and temporal machine learning for geomagnetic storm intensity prediction.':'Research presentation on applying machine learning methods to ransomware detection.'}</motion.p>}</div><button className="pub-expand" aria-label={`${open===i?'Hide':'Show'} summary for ${p.title}`} onClick={()=>setOpen(open===i?null:i)}><ArrowUpRight size={18}/></button>
      </Reveal>})}</div>
      <p className="section-footnote"><FileText size={14}/> Publication and manuscript statuses are shown as currently supplied. Paper, DOI, and slide links can be added when available.</p>
    </div>
  </section>;
}

function ProjectPreview({project}) {
  const Icon = project.icon;
  return <div className={`project-preview ${project.tone}`}>
    <div className="preview-gridlines"/><span className="preview-stamp">FIELD NOTES / PROJECT</span>
    {project.name==='SUSTAIN-X' ? <div className="sustain-art"><div className="chart-bars"><i/><i/><i/><i/><i/></div><div className="art-label"><span>URBAN</span><b>SUSTAINABILITY</b><span>TEXT → INSIGHT</span></div><div className="art-orbit"><ScanSearch size={28}/></div></div> :
    project.name==='Earth Observation' ? <div className="earth-art"><div className="earth-grid"/><div className="earth-circle"><div className="land-shape shape-one"/><div className="land-shape shape-two"/><div className="land-shape shape-three"/></div><span className="satellite-label">SENTINEL-2 / LULC</span></div> :
    project.name==='Go-Clean' ? <div className="clean-art"><div className="detection-box"><span>DETECTION: OBJECT</span><div className="trash-symbol"><span/><span/><span/></div><b>GARBAGE / 0.94</b></div><div className="scan-line"/></div> :
    <div className="xray-art"><div className="xray-frame"><div className="rib rib1"/><div className="rib rib2"/><div className="rib rib3"/><div className="spine"/><div className="lung left"/><div className="lung right"/></div><span>IMAGE CLASSIFICATION</span></div>}
    <div className="preview-bottom"><span><Icon size={15}/>{project.category}</span><ArrowUpRight size={16}/></div>
  </div>;
}

function Projects() {
  const [expanded,setExpanded] = useState(null);
  return <section id="projects" className="section projects-section">
    <div className="container">
      <SectionHeading number="04" eyebrow="IDEAS BUILT INTO SYSTEMS" title={<>Selected <em>projects.</em></>} subtitle="Research ideas translated into working systems."/>
      <div className="project-grid">{projects.map((p,i)=>{const Icon=p.icon;return <Reveal key={p.name} delay={(i%2)*.08} className={`project-card ${i<2?'project-featured':''}`}>
        <ProjectPreview project={p}/>
        <div className="project-info"><div className="project-kicker"><span>PROJECT / 0{i+1}</span><span>{p.category}</span></div><h3>{p.title}</h3><p>{p.description}</p>
          <div className="project-tags">{p.tech.map(t=><Tag key={t}>{t}</Tag>)}</div>
          <AnimatePresence>{expanded===p.name&&<motion.div className="project-highlights" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}><ul>{p.highlights.map(h=><li key={h}>{h}</li>)}</ul></motion.div>}</AnimatePresence>
          <div className="project-actions"><button className="text-action" onClick={()=>setExpanded(expanded===p.name?null:p.name)} aria-expanded={expanded===p.name}>{expanded===p.name?'Less detail':'Project details'} <ChevronDown className={expanded===p.name?'turned':''} size={15}/></button><a className="project-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} <ArrowUpRight size={15}/></a></div>
        </div>
      </Reveal>})}</div>
    </div>
  </section>;
}

function Experience() {
  return <section id="experience" className="section experience-section">
    <div className="container">
      <SectionHeading number="05" eyebrow="WHERE I'VE LEARNED & CONTRIBUTED" title={<>Experience & <em>education.</em></>} subtitle="Research, experimentation, and building things with people who ask good questions."/>
      <div className="experience-grid"><div className="timeline-column"><div className="subsection-label"><span className="subsection-icon"><Microscope size={16}/></span> EXPERIENCE</div><div className="timeline">{experience.map((e,i)=><Reveal key={e.role+e.org} delay={i*.07} className="timeline-item"><div className="timeline-marker"/><div className="timeline-date">{e.date}</div><h3>{e.role}</h3><h4>{e.org}</h4>{e.supervisor&&<p className="supervisor">With {e.supervisor}</p>}<p>{e.detail}</p></Reveal>)}</div></div>
        <div className="education-column"><div className="subsection-label"><span className="subsection-icon"><GraduationCap size={16}/></span> EDUCATION</div><Reveal className="education-card"><div className="edu-decoration"><GraduationCap size={26}/><span>ACADEMIC PATH / 01</span></div><div className="edu-year">2023 — PRESENT</div><h3>Integrated B.Tech. & M.Tech.</h3><p className="edu-subtitle">Computer Science & Engineering</p><div className="edu-rule"/><div className="edu-institution"><MapPin size={15}/><span>Central University of Jharkhand<br/>Ranchi, India</span></div><div className="edu-stat"><span>REPORTED CGPA</span><strong>9.56<small> / 10</small></strong><p>As stated in my resume; not represented as a degree CGPA.</p></div></Reveal>
          <Reveal className="leadership-card" delay={.12}><div className="subsection-label"><span className="subsection-icon"><Users size={16}/></span> LEADERSHIP & COMMUNITY</div>{leadership.map(([date,role,org])=><div className="leadership-row" key={role}><span className="leadership-date">{date}</span><div><strong>{role}</strong><span>{org}</span></div></div>)}</Reveal>
        </div>
      </div>
    </div>
  </section>;
}

function Achievements() {
  return <section id="achievements" className="section achievements-section">
    <div className="container">
      <SectionHeading number="06" eyebrow="MILESTONES ALONG THE WAY" title={<>Milestones & <em>recognition.</em></>} subtitle="A few academic, technical, and community milestones that have shaped my journey."/>
      <div className="achievement-grid">{achievements.map((a,i)=>{const Icon=a.icon;return <Reveal key={a.title} delay={(i%4)*.05} className="achievement-card"><div className="achievement-icon"><Icon size={19}/></div><span className="achievement-value">{a.value}</span><h3>{a.title}</h3><p>{a.detail}</p><span className="achievement-spark">✳</span></Reveal>})}</div>
    </div>
  </section>;
}

function Toolkit() {
  return <section className="section toolkit-section"><div className="container"><SectionHeading number="07" eyebrow="TOOLS IN THE WORKSHOP" title={<>Tools I <em>work with.</em></>} subtitle="A practical toolkit for experimenting, building, and evaluating intelligent systems."/><div className="skills-grid">{skills.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.title} delay={i*.05} className="skill-group"><div className="skill-heading"><span><Icon size={18}/></span><h3>{s.title}</h3></div><div className="skill-items">{s.items.map(item=><span key={item}>{item}</span>)}</div></Reveal>})}</div><p className="toolkit-note"><Sparkles size={14}/> A toolkit, not a leaderboard — no arbitrary proficiency percentages.</p></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-section">
    <div className="contact-shape shape-left"/><div className="contact-shape shape-right"/>
    <div className="container contact-inner"><Reveal className="contact-copy"><div className="section-eyebrow"><span>08</span><i/> OPEN TO GOOD QUESTIONS</div><h2>Interested in research,<br/>ideas, or <em>collaboration?</em></h2><p>I'm always interested in connecting with researchers and students working on NLP, information retrieval, RAG, LLMs, and scientific machine learning.</p><div className="contact-actions"><a className="button button-primary" href={profile.linkedin}>Get in touch <Mail size={16}/></a><a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">View GitHub <Github size={16}/></a></div></Reveal>
      <Reveal className="contact-card" delay={.12}><div className="contact-card-top"><span>LET'S CONNECT</span><div className="contact-orbit"><Orbit size={19}/></div></div><a href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={17}/></span><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={16}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={17}/></span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={17}/></span><span><small>GITHUB</small><strong>Explore my repositories</strong></span><ArrowUpRight size={16}/></a><div className="contact-card-foot"><span className="live-dot"/> Usually happy to talk research.</div></Reveal>
    </div>
    <footer className="footer container"><a className="brand" href="#home">AD<span>.</span></a><p>Designed with curiosity by Apurba Das.</p><span>© {new Date().getFullYear()} · MADE TO KEEP ASKING</span><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></footer>
  </section>;
}

export default function App() {
  useEffect(() => { document.documentElement.classList.add('js-ready'); }, []);
  return <><NavBar/><main><Hero/><About/><Research/><Publications/><Projects/><Experience/><Achievements/><Toolkit/><Contact/></main></>;
}