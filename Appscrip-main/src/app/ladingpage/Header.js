'use client';
import '@/styles/landingpage/landingpage.css';
import Image from 'next/image';
import Icon from '@/Images/landingpage/icon.png';
import Search from '@/Images/landingpage/search-normal.png';
import Heart from '@/Images/landingpage/heart.png';
import ShoppingBag from '@/Images/landingpage/shopping-bag.png';
import Profile from '@/Images/landingpage/profile.png';
import { useEffect, useState } from 'react';
import '@/styles/Typography.css';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '@/app/context/FavoritesContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto=Roboto({
    weight:'400',
    subsets:['latin'],
    display:'swap'
})
function Header()
{
    let[language,setLanguage]=useState('ENG');
    let[navbarshow,setNavbarShow]=useState(false);
    let[showFavorites,setShowFavorites]=useState(false);
    const { favoritesCount, favorites, removeFavorite } = useFavorites();
    useEffect(()=>{
        if(navbarshow){
            document.body.style.overflow='hidden';
        }
        else{
            document.body.style.overflow='auto';
        }
    },[navbarshow])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNavbarShow(false);
    }
    return (
        <>
            <header>
                <nav className="landingpage-navbar flex">
                    <div className="flex items-baseline">
                    <FontAwesomeIcon icon={faBars} style={{color: "#080808",width:'20px',height:'20px',marginRight:'8px'}} className='toggler-icon'  onClick={()=>{setNavbarShow(true)}}/>
                    <Image src={Icon} width={36} height={36} alt='Appscrip logo' className='icon'/>
                    </div>
                    <h6 className={"logo-title "+inter.className}>LOGO</h6>
                    <div className='flex navbar-language-imgs-box'>
                        <Image src={Search} width={24} height={24} alt='Search products' className='icon'/>
                        <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }} onClick={() => setShowFavorites(!showFavorites)}>
                            <Image src={Heart} width={24} height={24} alt='Favorites list' className='icon'/>
                            {favoritesCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    backgroundColor: '#FF0000',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '10px',
                                    fontWeight: 'bold'
                                }}>
                                    {favoritesCount}
                                </span>
                            )}
                        </div>
                        <Image src={ShoppingBag} width={24} height={24} alt='Shopping cart' className='icon'/>
                        <Image src={Profile} width={24} height={24} alt='User profile' className='icon profile-icon'/>
                        <div className="flex language-container">
                            <span className="language-txt">ENG</span>
                            <FontAwesomeIcon icon={faChevronDown} style={{color: "black",width:'16px',marginLeft:'8px'}}  />
                        </div>
                    </div>
                </nav>
                <div className="">
                    <div className={navbarshow?"flex navbar-link-container show":"flex navbar-link-container"}>
                        <div className="">  
                            <FontAwesomeIcon icon={faXmark} style={{color: "#080808",width:'25px',height:'25px'}} className='x-icon' onClick={()=>{setNavbarShow(false)}}/>
                        </div>
                        <a className='common-links custom-black-text navbar-links' style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer-contact-us')}>SHOP</a>
                        <a className='common-links custom-black-text navbar-links' style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer-contact-us')}>SKILLS</a>
                        <a className='common-links custom-black-text navbar-links' style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer-contact-us')}>STORIES</a>
                        <a className='common-links custom-black-text navbar-links' style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer-contact-us')}>ABOUT</a>
                        <a className='common-links custom-black-text navbar-links' style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer-contact-us')}>CONTACT US</a>

                    </div>
                </div>

                <div className={"center-title-container flex "+roboto.className}>
                    
                    <h1 className="h1-heading custom-black-text">DISCOVER OUR PRODUCTS</h1>
                    <p className="paragraph custom-black-text heading-para text-center">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>

                {showFavorites && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '100%',
                        maxWidth: '400px',
                        height: '100vh',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        overflowY: 'auto',
                        padding: '20px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h4 className="filter-titles custom-black-text">FAVORITES ({favoritesCount})</h4>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <FontAwesomeIcon 
                                    icon={faXmark} 
                                    style={{color: "#080808", width: '20px', cursor: 'pointer'}} 
                                    onClick={() => setShowFavorites(false)}
                                />
                            </div>
                        </div>
                        {favorites.length > 0 ? (
                            <div>
                                {favorites.map((product) => (
                                    <div key={product.id} style={{
                                        marginBottom: '16px',
                                        padding: '12px',
                                        border: '1px solid #E0E0E0',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <Image
                                            src={product.image || product.images?.[0] || '/fallback.png'}
                                            width={60}
                                            height={80}
                                            alt={product.title}
                                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h6 className="filter-subtitle custom-black-text" style={{ marginBottom: '4px' }}>
                                                {product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
                                            </h6>
                                            <p className="filter-subtitle custom-grey-text" style={{ marginBottom: '4px' }}>
                                                ₹{product.price}
                                            </p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            style={{
                                                color: '#807373',
                                                width: '16px',
                                                cursor: 'pointer',
                                                marginTop: '4px'
                                            }}
                                            onClick={() => removeFavorite(product.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="filter-subtitle custom-grey-text" style={{ textAlign: 'center', marginTop: '40px' }}>
                                No favorites yet
                            </p>
                        )}
                    </div>
                )}
            </header>
        </>
    )
}

export default Header;