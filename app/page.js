"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './header.js';
import Search from './search';
import NewsDe from './news_de';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';


const page = () => {
  return (
    <>
      <Header/>
      <Search/>
      <NewsDe/>
    </>
  );
};

export default page;