import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, LayoutTemplate, ShieldCheck, UserRound, LogOut, Menu, X, Code2, Palette, Zap, CheckCircle2, Plus, Trash2, Eye, Pencil, Users, Layers, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { starterTemplates, demoPortfolio } from "./data";

import { read } from "./React.js";

function Admin({user,templates,updateTemplates}) {
  const users=read("portify_users",[]);
  const [name,setName]=useState("");const [category,setCategory]=useState("Developer");const [description,setDescription]=useState("");const [notice,setNotice]=useState("");
  function add(e){e.preventDefault();const id=name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+Date.now();updateTemplates(t=>[...t,{id,name,category,description,style:category==="Professional"?"light":category==="Creative"?"colorful":"dark",tag:"Admin added",color:"violet"}]);setName("");setDescription("");setNotice("Template added successfully.");}
  function remove(id){updateTemplates(t=>t.filter(x=>x.id!==id));setNotice("Template deleted.");}
  return <main className="page container"><div className="dashboard-top"><div><div className="eyebrow">ADMIN CONTROL CENTER</div><h1>Manage <span className="gradient-text">Portify.</span></h1><p>Manage registered accounts and the template library.</p></div><span className="admin-pill"><ShieldCheck size={16}/> Administrator</span></div>
    <div className="dashboard-stats"><div className="dash-stat"><span>REGISTERED USERS</span><strong>{users.length}</strong></div><div className="dash-stat"><span>ACTIVE TEMPLATES</span><strong>{templates.length}</strong></div><div className="dash-stat"><span>ADMIN ACCOUNT</span><strong className="small-stat">{user.email}</strong></div></div>
    <div className="admin-layout"><section className="panel"><div className="panel-heading"><div><span className="eyebrow">TEMPLATE LIBRARY</span><h2>Manage templates</h2></div><span className="count-pill"><Layers size={14}/>{templates.length} total</span></div>{notice&&<div className="success-message">{notice}</div>}<div className="admin-template-list">{templates.map(t=><div className="admin-template" key={t.id}><div className={`admin-template-icon thumb-${t.style}`}>{t.id==="modern"?"✳":t.id==="minimal"?"A":"✦"}</div><div><b>{t.name}</b><small>{t.category} · {t.style} theme</small></div><button className="delete-button" onClick={()=>remove(t.id)} title="Delete template"><Trash2 size={17}/></button></div>)}</div></section>
    <section className="panel"><span className="eyebrow">ADD NEW DESIGN</span><h2>Create a template</h2><form className="form-stack admin-form" onSubmit={add}><label>Template name<input value={name} onChange={e=>setName(e.target.value)} required placeholder="e.g. Elegant Resume"/></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>Developer</option><option>Professional</option><option>Creative</option></select></label><label>Description<textarea rows="3" value={description} onChange={e=>setDescription(e.target.value)} required placeholder="Describe this template"/></label><button className="btn btn-primary btn-full">Add template <Plus size={16}/></button></form></section></div>
    <section className="panel users-panel"><div className="panel-heading"><div><span className="eyebrow">USER ACCOUNTS</span><h2>Registered users</h2></div><span className="count-pill"><Users size={14}/>{users.length} users</span></div>{users.length===0?<p className="empty-state">No registered users yet. New signups will appear here.</p>:<div className="user-table"><div className="user-row user-head"><span>Name</span><span>Email</span><span>Joined</span></div>{users.map(u=><div className="user-row" key={u.email}><span>{u.name}</span><span>{u.email}</span><span>{new Date(u.createdAt).toLocaleDateString()}</span></div>)}</div>}</section>
  </main>;
}


export default Admin;