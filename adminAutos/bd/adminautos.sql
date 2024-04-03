-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-04-2024 a las 21:53:24
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adminautos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `kilometraje`
--

CREATE TABLE `kilometraje` (
  `idkilometraje` smallint(6) UNSIGNED NOT NULL,
  `idunidad` int(10) UNSIGNED NOT NULL,
  `kilometraje` decimal(40,3) UNSIGNED DEFAULT NULL,
  `fch` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `kilometraje`
--

INSERT INTO `kilometraje` (`idkilometraje`, `idunidad`, `kilometraje`, `fch`) VALUES
(1, 1, '6021.200', '2024-03-27 22:03:04'),
(2, 1, '7366.700', '2024-03-27 22:03:40'),
(3, 1, '8534.400', '2024-03-27 22:03:59'),
(4, 1, '9815.800', '2024-03-27 22:04:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantenimiento`
--

CREATE TABLE `mantenimiento` (
  `idmantenimiento` smallint(6) UNSIGNED NOT NULL,
  `idunidad` int(10) UNSIGNED NOT NULL,
  `idkilometraje` smallint(6) NOT NULL,
  `fchManto` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mantenimiento`
--

INSERT INTO `mantenimiento` (`idmantenimiento`, `idunidad`, `idkilometraje`, `fchManto`) VALUES
(1, 1, 3, '2024-03-12 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipounidad`
--

CREATE TABLE `tipounidad` (
  `idtipounidad` smallint(6) UNSIGNED NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipounidad`
--

INSERT INTO `tipounidad` (`idtipounidad`, `nombre`) VALUES
(1, 'aveo chevrolet'),
(2, 'c3500 chevrolet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `idunidad` int(10) UNSIGNED NOT NULL,
  `idtipounidad` smallint(6) UNSIGNED NOT NULL,
  `modelo` int(10) UNSIGNED DEFAULT NULL,
  `nip` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `color` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `unidad`
--

INSERT INTO `unidad` (`idunidad`, `idtipounidad`, `modelo`, `nip`, `color`) VALUES
(1, 1, 2024, 'jvhf000', 'Plata Metalico');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `kilometraje`
--
ALTER TABLE `kilometraje`
  ADD PRIMARY KEY (`idkilometraje`),
  ADD KEY `kilometraje_FKIndex1` (`idunidad`);

--
-- Indices de la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD PRIMARY KEY (`idmantenimiento`),
  ADD KEY `mantenimiento_FKIndex1` (`idunidad`);

--
-- Indices de la tabla `tipounidad`
--
ALTER TABLE `tipounidad`
  ADD PRIMARY KEY (`idtipounidad`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`idunidad`),
  ADD KEY `unidad_FKIndex1` (`idtipounidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `kilometraje`
--
ALTER TABLE `kilometraje`
  MODIFY `idkilometraje` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  MODIFY `idmantenimiento` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipounidad`
--
ALTER TABLE `tipounidad`
  MODIFY `idtipounidad` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `unidad`
--
ALTER TABLE `unidad`
  MODIFY `idunidad` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `kilometraje`
--
ALTER TABLE `kilometraje`
  ADD CONSTRAINT `kilometraje_ibfk_1` FOREIGN KEY (`idunidad`) REFERENCES `unidad` (`idunidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD CONSTRAINT `mantenimiento_ibfk_1` FOREIGN KEY (`idunidad`) REFERENCES `unidad` (`idunidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD CONSTRAINT `unidad_ibfk_1` FOREIGN KEY (`idtipounidad`) REFERENCES `tipounidad` (`idtipounidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
