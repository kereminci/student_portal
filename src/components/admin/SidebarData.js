import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Kontrol Paneli',
    path: '/',
    icon: 'fa fa-home',
    cName: 'admin-nav-text'
  },
  {
    title: 'Duyuru',
    path: '../pages/Duyurular',
    icon: 'fa fa-scroll',
    cName: 'admin-nav-text'
  },
  {
    title: 'Etkinlik',
    path: '../pages/Etkinlikler',
    icon: 'fa fa-calendar',
    cName: 'admin-nav-text'
  },
  {
    title: 'Haber',
    path: '../pages/Haberler',
    icon: 'fa fa-newspaper',
    cName: 'admin-nav-text'
  }
];