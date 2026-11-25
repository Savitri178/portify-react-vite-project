import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, LayoutTemplate, ShieldCheck, UserRound, LogOut, Menu, X, Code2, Palette, Zap, CheckCircle2, Plus, Trash2, Eye, Pencil, Users, Layers, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { starterTemplates, demoPortfolio } from "./data";

import { usePortify } from "./React.js";
import { Dashboard, Builder, Preview } from "./User.jsx";
import Admin from "./Admin.jsx";

function App() {
  const { user, templates, portfolio, mobileOpen, setMobileOpen, location, logout, login, signup, protectedProps } = usePortify();
  return <>
    <Navbar user={user} logout={logout} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/templates" element={<Templates templates={templates} user={user}/>}/>
      <Route path="/login" element={<Auth mode="login" login={login}/>}/>
      <Route path="/admin/login" element={<Auth mode="admin" login={login}/>}/>
      <Route path="/signup" element={<Auth mode="signup" signup={signup}/>}/>
      <Route path="/dashboard" element={<Guard user={user}><Dashboard {...protectedProps}/></Guard>}/>
      <Route path="/builder" element={<Guard user={user}><Builder {...protectedProps}/></Guard>}/>
      <Route path="/preview" element={<Guard user={user}><Preview portfolio={portfolio} template={portfolio.template || "modern"}/></Guard>}/>
      <Route path="/admin" element={<Guard user={user} admin><Admin {...protectedProps}/></Guard>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/admin/login" && <Footer/>}
  </>;
}

function Navbar({ user, logout, mobileOpen, setMobileOpen }) {
  return <header className="nav-wrap"><nav className="nav container">
    <Link to="/" className="brand"><span className="brand-mark"><Sparkles size={18}/></span> portify<span className="brand-dot">.</span></Link>
    <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
      <NavLink to="/templates" onClick={()=>setMobileOpen(false)}>Templates</NavLink>
      {user && user.role === "user" && <NavLink to="/dashboard" onClick={()=>setMobileOpen(false)}>Dashboard</NavLink>}
      {user?.role === "admin" && <NavLink to="/admin" onClick={()=>setMobileOpen(false)}>Admin</NavLink>}
      {user ? <button className="btn btn-small btn-outline" onClick={logout}><LogOut size={15}/> Logout</button> :
        <><NavLink to="/login" onClick={()=>setMobileOpen(false)}>User Login</NavLink><NavLink to="/admin/login" onClick={()=>setMobileOpen(false)}>Admin Login</NavLink><Link className="btn btn-small btn-primary" to="/signup" onClick={()=>setMobileOpen(false)}>Get started <ArrowUpRight size={15}/></Link></>}
    </div>
    <button className="mobile-toggle" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen?<X/>:<Menu/>}</button>
  </nav></header>;
}

function Home() {
  return <main>
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"></span> YOUR STORY, BEAUTIFULLY BUILT</div>
        <h1>Make your work<br/> <span className="gradient-text">impossible to ignore.</span></h1>
        <p className="hero-desc">Create a personal portfolio that feels like you. Pick a template, add your story, and share your next big thing with the world.</p>
        <div className="hero-actions"><Link to="/templates" className="btn btn-primary">Explore templates <ArrowRight size={17}/></Link><Link to="/signup" className="btn btn-ghost">Create your portfolio</Link></div>
        <div className="hero-proof"><div className="avatar-stack"><i>A</i><i>M</i><i>J</i><i>+</i></div><span>Made for your next opportunity</span></div>
      </div>
      <div className="hero-art">
        <div className="art-glow"></div>
        <div className="browser-card">
          <div className="browser-top"><div className="window-dots"><i/><i/><i/></div><span>alexmorgan.dev</span><span className="browser-menu">•••</span></div>
          <div className="mock-profile">
            <div className="mock-kicker">AVAILABLE FOR OPPORTUNITIES <span></span></div>
            <div className="mock-heading">Hey, I'm Alex.<br/><em>I build for the web.</em></div>
            <p>Frontend developer crafting digital experiences with purpose.</p>
            <div className="mock-tags"><b>React</b><b>UI Design</b><b>Creative code</b></div>
            <div className="mock-projects"><div><small>FEATURED PROJECT</small><strong>Orbit — Design system</strong></div><div className="project-symbol"><Code2/></div></div>
          </div>
        </div>
        <div className="floating-note note-one"><Sparkles size={15}/> Thoughtful design</div>
        <div className="floating-note note-two"><CheckCircle2 size={15}/> Ready to share</div>
      </div>
    </section>
    <section className="stats container"><div><strong>03</strong><span>Curated templates</span></div><div><strong>02</strong><span>Dedicated modules</span></div><div><strong>100%</strong><span>Responsive layout</span></div><div><strong>∞</strong><span>Room to grow</span></div></section>
    <section className="section container">
      <div className="section-heading"><div><div className="eyebrow">FIND YOUR LOOK</div><h2>Templates with <span className="gradient-text">personality.</span></h2></div><Link to="/templates" className="text-link">View all templates <ArrowUpRight size={16}/></Link></div>
      <TemplateGrid templates={starterTemplates.slice(0,3)} />
    </section>
    <section className="feature-band"><div className="container feature-grid"><div><div className="eyebrow">MADE TO BE SIMPLE</div><h2>From blank page<br/>to <span className="gradient-text">your next chapter.</span></h2><p>Everything you need to present your skills, projects, and personality in one place.</p><Link to="/signup" className="btn btn-primary">Start building <ArrowRight size={16}/></Link></div><div className="feature-list"><Feature icon={<LayoutTemplate/>} title="Choose a template" text="Start with a design that matches your style."/><Feature icon={<Pencil/>} title="Make it yours" text="Add your bio, skills, education, and projects."/><Feature icon={<Zap/>} title="Preview & share" text="Review your portfolio before presenting it."/></div></div></section>
    <section className="cta container"><div><div className="eyebrow">YOUR NEXT STEP STARTS HERE</div><h2>Good work deserves<br/>a great <span className="gradient-text">first impression.</span></h2><Link to="/signup" className="btn btn-primary">Create your free portfolio <ArrowRight size={17}/></Link></div><div className="cta-orbit"><div className="orbit o1"></div><div className="orbit o2"></div><Sparkles size={45}/></div></section>
  </main>;
}

function Feature({icon,title,text}) { return <div className="feature-item"><div className="feature-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>; }

function TemplateGrid({ templates, onSelect, selected }) {
  return <div className="template-grid">{templates.map((t,i)=><article className={`template-card ${selected===t.id?"selected":""}`} key={t.id}>
    <div className={`template-thumb thumb-${t.style}`}>
      <div className="thumb-browser"><span>● ● ●</span><span>portfolio.site</span></div>
      <div className="thumb-content"><div className="thumb-side"><span>PORTFOLIO / 2026</span><b>{t.id==="modern"?"Build boldly.":t.id==="minimal"?"Hello, I'm Alex.":"Ideas into impact."}</b><small>{t.id==="modern"?"Developer & creator":t.id==="minimal"?"Product designer":"Creative developer"}</small><i></i><i></i></div><div className="thumb-shape">{t.id==="modern"?"✳":t.id==="minimal"?"A":"✦"}</div></div>
      <span className="template-number">0{i+1}</span>
    </div>
    <div className="template-info"><div><span className="category">{t.category}</span><h3>{t.name}</h3><p>{t.description}</p></div><button className="icon-button" onClick={()=>onSelect?onSelect(t.id):null} aria-label={`Select ${t.name}`}><ArrowUpRight size={19}/></button></div>
    <div className="template-foot"><span className="template-tag">{t.tag}</span><span className="template-type">{t.style} theme</span></div>
  </article>)}</div>;
}

function Templates({templates,user}) {
  const [filter,setFilter]=useState("All");
  const navigate=useNavigate();
  const categories=["All","Developer","Professional","Creative"];
  const filtered=templates.filter(t=>filter==="All"||t.category===filter);
  return <main className="page container"><div className="page-intro"><div className="eyebrow">THE TEMPLATE LIBRARY</div><h1>Find a look that feels <span className="gradient-text">like you.</span></h1><p>Choose a starting point. You can personalize the content in your portfolio builder.</p></div>
    <div className="filter-row">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`filter-chip ${filter===c?"active":""}`}>{c}</button>)}</div>
    <TemplateGrid templates={filtered} onSelect={id=>navigate(user?.role==="admin"?"/admin":user?`/builder?template=${id}`:"/signup")}/>
    {!user&&<p className="center-note">Create an account to select a template and start building.</p>}
  </main>;
}

function Auth({mode,login,signup}) {
  const isAdmin=mode==="admin"; const isLogin=mode!=="signup"; const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
  function submit(e){e.preventDefault();setError("");const result=isLogin?login(email,password,isAdmin):signup(name,email,password);if(!result.ok)setError(result.message);}
  return <main className="auth-page"><div className="auth-decoration"></div><div className="auth-card"><Link to="/" className="brand"><span className="brand-mark"><Sparkles size={18}/></span> portify<span className="brand-dot">.</span></Link><div className="eyebrow">{isLogin?"WELCOME BACK":"YOUR PORTFOLIO STARTS HERE"}</div><h1>{isAdmin?"Admin Login":isLogin?"User Login":"Create your account."}</h1><p>{isLogin?"Log in to continue building your story.":"Join Portify and make your work stand out."}</p>
    <form onSubmit={submit} className="form-stack">{!isLogin&&<label>Full name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label>}<label>Email address<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" minLength="6" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters"/></label>{error&&<div className="error-message">{error}</div>}<button className="btn btn-primary btn-full" type="submit">{isLogin?"Log in":"Create account"} <ArrowRight size={17}/></button></form>
    {!isAdmin&&<div className="auth-switch">{isLogin?"New to Portify?":"Already have an account?"} <Link to={isLogin?"/signup":"/login"}>{isLogin?"Create an account":"Log in"}</Link></div>}
    {isAdmin&&<div className="demo-hint"><ShieldCheck size={15}/> Admin demo: admin@portify.com / admin123</div>}
    <div className="privacy-note">Demo authentication uses browser Local Storage. Do not use real or sensitive passwords.</div>
  </div></main>;
}

function Guard({user,admin=false,children}) { const location=useLocation(); if(!user)return <div className="access-message"><ShieldCheck size={28}/><h2>Log in to continue</h2><p>This area is available to registered users.</p><Link className="btn btn-primary" to={admin?"/admin/login":"/login"} state={{from:location.pathname}}>Go to login <ArrowRight size={16}/></Link></div>; if(!admin&&user.role==="admin")return <div className="access-message"><h2>User access only</h2><Link to="/admin">Go to admin dashboard</Link></div>; if(admin&&user.role!=="admin")return <div className="access-message"><ShieldCheck size={28}/><h2>Admin access only</h2><p>Your account does not have permission to view this page.</p><Link className="btn btn-primary" to="/dashboard">Go to dashboard</Link></div>; return children; }

function NotFound(){return <div className="access-message"><h2>Page not found</h2><Link to="/" className="btn btn-primary">Back home</Link></div>}
function Footer(){return <footer className="site-footer"><div className="container footer-inner"><Link to="/" className="brand">portify<span className="brand-dot">.</span></Link><span>Make your work impossible to ignore.</span><span>© 2026 Portify</span></div></footer>}
export default App;