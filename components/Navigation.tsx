'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, X, Sparkles} from 'lucide-react';
import {useState} from 'react';
export default function Navigation(){
 const [open,setOpen]=useState(false);const path=usePathname();
 return <header className="navigation"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><Sparkles size={18}/></span><span>POP<span className="brand-pink">/</span>CULTURE <small>THE DIGITAL MUSEUM</small></span></Link><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{[['/','Home'],['/past','The Past'],['/present','The Present'],['/future','The Future']].map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={path===href?'active':''}>{label}</Link>)}<a className="nav-cta" href="/#explore" onClick={()=>setOpen(false)}>Explore museum ↗</a></nav></header>;
}
