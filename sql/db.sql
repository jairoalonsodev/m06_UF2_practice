-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 19, 2022 at 09:49 PM
-- Server version: 8.0.31-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankData`
--

CREATE DATABASE IF NOT EXISTS bankData;

use bankData;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `Id` int NOT NULL,
  `DNI` varchar(9) COLLATE utf8mb3_spanish_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `accountType` int NOT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `clientType` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `entryDate` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`Id`, `DNI`, `Name`, `accountType`, `Amount`, `clientType`, `entryDate`) VALUES
(0, '53319344P', 'Joel Comes Rodríguez', 2, '243584.25', 'Very rich client', '18/11/2022'),
(1, '53324889X', 'Jairo Alonso Juárez', 2, '255524.27', 'Very rich client', '20/11/2022'),
(2, '62718242W', 'Bernarda del Gargallo Almazón', 6, '71251.57', 'Normal client', '05/11/2022'),
(3, '97425003Q', 'Odalis Florentina Julián Torrijos', 5, '1256.45', 'Poor client', '17/11/2022'),
(4, '74971900L', 'Diego Belda Salazar', 4, '456.48', 'Poor client', '15/11/2022'),
(5, '13763888K', 'Emelina Arnal Luque', 3, '12645.49', 'Normal client', '13/11/2022'),
(6, '71150982E', 'Socorro Torrecilla Alvarez', 1, '123456.78', 'Very rich client', '21/11/2022'),
(7, '17786485X', 'Sol Escudero Recuero', 1, '987654.32', 'Very rich client', '10/11/2022'),
(8, '40677246K', 'Íngrid Melero Guardia', 0, '11753.59', 'Normal client', '01/11/2022'),
(9, '09964878J', 'Jimena Febe Pazos Torrecilla', 2, '51121.21', 'Normal client', '21/11/2022');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `DNI` (`DNI`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
