-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2019 a las 20:32:55
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `start` date DEFAULT NULL,
  `start_hour` time DEFAULT NULL,
  `end` date DEFAULT NULL,
  `end_hour` time DEFAULT NULL,
  `allDay` tinyint(1) DEFAULT NULL,
  `fk_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`id`, `title`, `start`, `start_hour`, `end`, `end_hour`, `allDay`, `fk_usuario`) VALUES
(2, 'Evento 2', '2019-02-12', '05:00:00', '2019-02-12', '07:00:00', 0, 17),
(3, 'Evento 1', '2019-02-13', '00:00:00', '0000-00-00', '00:00:00', 1, 17),
(4, 'Evento 3', '2019-02-19', '07:00:00', '2019-02-20', '15:00:00', 0, 17),
(5, 'Evento 4', '2019-02-06', '00:00:00', '0000-00-00', '00:00:00', 1, 17),
(6, 'Evento 5', '2019-02-08', '00:00:00', '0000-00-00', '00:00:00', 1, 17),
(7, 'Evento 6', '2019-02-12', '09:00:00', '2019-02-12', '12:00:00', 0, 17),
(8, 'Evento1', '2019-03-12', '07:00:00', '2019-03-12', '08:00:00', 1, 16),
(9, 'Evento2', '2019-03-20', '00:00:00', '0000-00-00', '00:00:00', 1, 16),
(10, 'Evento3', '2019-03-06', '07:00:00', '2019-03-07', '12:30:00', 1, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `psw` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `psw`, `email`, `fecha_nacimiento`) VALUES
(16, 'Oscar Cambronero', '$1$xjM2YNXz$caPKkkCm6mmkqiZm1DLz30', 'ocambronero@gmail.com', '1969-09-06'),
(17, 'Olman Campos', '$1$xjM2YNXz$caPKkkCm6mmkqiZm1DLz30', 'oc@gmail.com', '1996-04-05'),
(18, 'Erick Calvo', '$1$xjM2YNXz$caPKkkCm6mmkqiZm1DLz30', 'ecalvo@gmail.com', '1987-12-24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email-user` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
