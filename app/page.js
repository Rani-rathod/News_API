"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './header.js';
import Search from './search';
import NewsDe from './news_de';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Footer from './footer';
import List from './list';


const page = () => {
  return (
    <>
      <Header/>
      <Search/>
      <NewsDe/>
      <Footer/>
      {/* <List/> */}
    </>
  );
};

export default page;


