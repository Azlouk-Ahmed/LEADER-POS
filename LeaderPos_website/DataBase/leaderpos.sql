-- phpMyAdmin SQL Dump
-- version 2.6.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Jan 25, 2022 at 11:01 AM
-- Server version: 4.1.9
-- PHP Version: 4.3.10
-- 
-- Database: `leaderpos`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `inboxes`
-- 

CREATE TABLE `inboxes` (
  `Email` varchar(50) NOT NULL default '',
  `name` varchar(50) NOT NULL default '',
  `phone` int(8) NOT NULL default '0',
  `subject` varchar(50) NOT NULL default '',
  `message` text NOT NULL,
  PRIMARY KEY  (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table `inboxes`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `signup`
-- 

CREATE TABLE `signup` (
  `Email` varchar(50) NOT NULL default '',
  `Name` varchar(50) NOT NULL default '',
  `Family_name` varchar(30) NOT NULL default '',
  `Gender` char(1) NOT NULL default '',
  `Password` varchar(30) NOT NULL default '',
  `speciality` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table `signup`
-- 

