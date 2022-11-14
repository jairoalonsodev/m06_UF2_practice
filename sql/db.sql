SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `Id` int NOT NULL,
  `DNI` varchar(9) COLLATE utf8mb3_spanish_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `Account type` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `Amount` int NOT NULL,
  `Client type` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `Entry date` varchar(10) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `DNI` (`DNI`);
COMMIT;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`Id`, `DNI`, `Name`, `Account type`, `Amount`, `Client type`, `Entry date`) VALUES
(1, '53319344P', 'Joel Comes Rodríguez', 'Personal account', '150000.00', 'Very rich client', '14-11-2022'),
(2, '53324889X', 'Jairo Alonso Juárez', 'Personal account', '255524.27', 'Very rich client', '14-11-2022'),
(3, '62718242W', 'Bernarda del Gargallo Almazón', 'Tax-Free Savings account', '71251.57', 'Normal client', '14-11-2022'),
(4, '97425003Q', 'Odalis Florentina Julián Torrijos', 'Fixed deposit account', '1256.45', 'Poor client', '14-11-2022'),
(5, '74971900L', 'Diego Belda Salazar', 'Individual Savings account', '456.48', 'Poor client', '14-11-2022'),
(6, '13763888K', 'Emelina Arnal Luque', 'Solidary account', '12645.49', 'Normal client', '14-11-2022'),
(7, '71150982E', 'Socorro Torrecilla Alvarez', 'Investment account', '123456.78', 'Very rich client', '14-11-2022'),
(8, '17786485X', 'Sol Escudero Recuero', 'Investment account', '987654.32', 'Very rich client', '14-11-2022'),
(9, '40677246K', 'Íngrid Melero Guardia', 'Savings account', '11753.59', 'Normal client', '14-11-2022'),
(10, '09964878J', 'Jimena Febe Pazos Torrecilla', 'Personal account', '51121.21', 'Normal client', '14-11-2022');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `DNI` (`DNI`);
--
-- Database: `TestsM06`
--
CREATE DATABASE IF NOT EXISTS `TestsM06` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `TestsM06`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `userpass` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `userpass`) VALUES
('user1', 'pass1'),
('user2', 'pass2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;
