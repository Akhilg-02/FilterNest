"use client"

import { useState } from "react"
import { Search, Heart, User, ChevronDown, Menu, LoaderPinwheel, Grid2x2 } from "lucide-react"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-base-line">
        <div><Grid2x2 size={28} color="red"/> Lorem ipsum dolor sit amet</div>
        <div><Grid2x2 size={28}  color="red"/> Lorem ipsum dolor sit amet</div>
        <div><Grid2x2 size={28}  color="red"/> Lorem ipsum dolor sit amet</div>
      </div>
      <div className="container header-container">
      <div style={{display:"flex", alignContent:"center"}}>
        <div className="mobile-view">
          <Menu size={39}/>
        </div>
      <LoaderPinwheel size={44}/>
      </div>
        <div className="logo">LOGO</div>

        <div className="header-icons">
          <button aria-label="Search">
            <Search size={20} />
          </button>
          <button aria-label="Favorites">
            <Heart size={20} />
          </button>
          <button aria-label="Account">
            <User size={20} />
          </button>
          <div className="language-selector">
            <span>ENG</span>
            <ChevronDown size={16} />
          </div>
        </div>
        
      </div>
      <nav className="nav-menu">
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            Skills
          </a>
          <a href="#" className="nav-link">
            Stories
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </nav>
    </header>
  )
}

