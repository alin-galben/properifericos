-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2021 a las 23:36:19
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `properifericosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatares`
--

CREATE TABLE `avatares` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `avatares`
--

INSERT INTO `avatares` (`id`, `nombre`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Avatar', 'http://localhost:8000/img/1623340687204-properifericos-Cat_1.png', '2021-06-11 13:00:40', '2021-06-11 13:00:40'),
(2, 'Cat_7.png', 'http://localhost:8000/img/1623420763056-properifericos-Cat_7.png', '2021-06-11 14:12:43', '2021-06-11 14:12:43'),
(3, 'Cat_9.png', 'http://localhost:8000/img/1623421054988-properifericos-Cat_9.png', '2021-06-11 14:17:34', '2021-06-11 14:17:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `texto` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `entradaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

CREATE TABLE `enlaces` (
  `id` int(11) NOT NULL,
  `enlace` varchar(255) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productoId` int(11) DEFAULT NULL,
  `tiendaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id`, `enlace`, `precio`, `createdAt`, `updatedAt`, `productoId`, `tiendaId`) VALUES
(1, 'https://www.pccomponentes.com/samsung-galaxy-m11-3-32gb-negro-libre', '139', '2021-06-11 13:04:38', '2021-06-11 13:04:38', 1, 1),
(2, 'https://www.amazon.es/', '154', '2021-06-11 13:05:25', '2021-06-11 13:05:25', 1, 2),
(3, 'https://www.amazon.es/', '171', '2021-06-11 13:07:11', '2021-06-11 13:07:11', 1, 2),
(4, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '189', '2021-06-11 13:28:09', '2021-06-11 13:28:09', 2, 2),
(5, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '234', '2021-06-11 20:42:02', '2021-06-11 20:42:02', 1, 1),
(6, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '344', '2021-06-11 20:42:22', '2021-06-11 20:42:22', 2, 2),
(7, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '344', '2021-06-11 20:42:25', '2021-06-11 20:42:25', 3, 2),
(8, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '344', '2021-06-11 20:42:28', '2021-06-11 20:42:28', 4, 2),
(9, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '344', '2021-06-11 20:42:30', '2021-06-11 20:42:30', 5, 2),
(10, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '344', '2021-06-11 20:43:45', '2021-06-11 20:43:45', 5, 2),
(11, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '358', '2021-06-11 20:43:50', '2021-06-11 20:43:50', 4, 2),
(12, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '375', '2021-06-11 20:43:56', '2021-06-11 20:43:56', 3, 2),
(13, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1020', '2021-06-11 20:56:25', '2021-06-11 20:56:25', 7, 4),
(14, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '900', '2021-06-11 20:56:32', '2021-06-11 20:56:32', 7, 2),
(15, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '800', '2021-06-11 20:56:38', '2021-06-11 20:56:38', 7, 5),
(16, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1300', '2021-06-11 20:56:48', '2021-06-11 20:56:48', 7, 3),
(17, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1300', '2021-06-11 20:56:53', '2021-06-11 20:56:53', 8, 1),
(18, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1300', '2021-06-11 20:57:00', '2021-06-11 20:57:00', 8, 2),
(19, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1288', '2021-06-11 20:57:06', '2021-06-11 20:57:06', 8, 4),
(20, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1262', '2021-06-11 20:57:11', '2021-06-11 20:57:11', 8, 5),
(21, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1244', '2021-06-11 20:57:19', '2021-06-11 20:57:19', 9, 1),
(22, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1244', '2021-06-11 20:57:24', '2021-06-11 20:57:24', 10, 1),
(23, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1244', '2021-06-11 20:57:27', '2021-06-11 20:57:27', 11, 1),
(24, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1244', '2021-06-11 20:57:29', '2021-06-11 20:57:29', 12, 1),
(25, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1224', '2021-06-11 20:57:35', '2021-06-11 20:57:35', 10, 2),
(26, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1322', '2021-06-11 20:57:44', '2021-06-11 20:57:44', 11, 2),
(27, 'https://www.pccomponentes.com/lenovo-ideapad-3-15itl06-intel-core-i5-1135g7-16gb-512gb-ssd-156', '1322', '2021-06-11 20:57:48', '2021-06-11 20:57:48', 12, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `texto` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria`, `descripcion`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Samsung Galaxy M11 3 32GB Negro Libre', 'Telefonos', 'Expande tu mundo de entretenimiento. Galaxy M11 incluye una pantalla HD+ Infinity-O de 6,4\" que te permitirá disfrutar como nunca de todos tus videojuegos y vídeos favoritos.\n\nCaracterísticas:\nUn diseño cómodo en una variedad de colores elegantes: El M11 luce tan bien como se siente. Los colores Metallic Blue y Black, añaden un toque moderno al marco sencillo. Las suaves curvas del diseño lateral simétrico te permiten sujetar el teléfono cómodamente para una fácil navegación por la pantalla.', 'https://thumb.pccomponentes.com/w-530-530/articles/33/335145/1151-samsung-galaxy-m11-3-32gb-negro-libre.jpg', '2021-06-11 13:04:13', '2021-06-11 13:04:13'),
(2, 'Samsung Galaxy A21s 4 128GB Azul Libre', 'Telefonos', 'Sumérgete en la gran pantalla Infinity-O de 6.5 pulgadas de Galaxy A21s. Su amplio ratio de aspecto llena tu pantalla de contenido de lado a lado. Mira tus vídeo favoritos, videojuegos y streamings en una impresionante pantalla HD+.\n\nCaracterísticas:\nDiseño elegante que se adapta a tu mano Galaxy A21s presenta un acabado brillante y holográfico que atrae todas las miradas. Sus finas curvas permiten un agarre fácil y seguro mientras navegas por su pantalla. Elige entre Negro, Blanco o Azul y combínalo con tu estilo.', 'https://thumb.pccomponentes.com/w-530-530/articles/33/332031/1905-samsung-galaxy-a21s-4-128gb-azul-libre.jpg', '2021-06-11 13:27:26', '2021-06-11 13:27:26'),
(3, 'HP Pavilion 15 Eg0005ns Intel Core I5 1135G7 8GB 512GB SSD MX350 156', 'Portatiles', 'Trabaja desde cualquier lugar. Juega desde donde quieras. El ordenador portátil Pavilion 15 te ofrece un mayor rendimiento en un menor formato, para una máxima eficacia en tus tareas desde cualquier lugar. Disfruta de tus contenidos con una impresionante calidad gracias a su pantalla con microborde y al sonido de B&O.\n\nBuenos resultados desde el primer minuto\nSu rendimiento se sitúa un escalón por encima. Descubre un ordenador portátil que se adapta a tu ritmo gracias a su procesador premium Intel® de 11.ª generación.', 'https://thumb.pccomponentes.com/w-530-530/articles/37/378017/1774-hp-pavilion-15-eg0005ns-intel-core-i5-1135g7-8gb-512gb-ssd-mx350-156.jpg', '2021-06-11 15:44:39', '2021-06-11 15:44:39'),
(4, 'Lenovo IdeaPad 5i Intel Core I7 1165G7 16GB 512GB SSD 156', 'Portatiles', 'Deje que su pasión se mantenga al día con su estilo de vida dinámico. Ya sea que esté explorando la vida en el campus o persiguiendo su carrera, con los últimos procesadores Intel® Core ™ i7 de 10.a generación y hasta gráficos discretos NVIDIA®, descubrirá maravillas nuevas e impresionantes a través de la serieModern.\n\nCaracterísticas\nHasta el último procesador Intel® Core ™ i7 de 10.a generación\nUltraligero 1,6 kg, ultradelgado 16,9 mm\nPanel de nivel IPS de bisel delgado', 'https://thumb.pccomponentes.com/w-530-530/articles/35/354896/12-msi-modern-15-a10m-486xes-intel-core-i7-10510u-16gb-512gb-ssd-156.jpg', '2021-06-11 15:45:34', '2021-06-11 15:45:34'),
(5, 'Samsung Galaxy A21s 4 128GB Azul Libre', 'Telefonos', 'Sumérgete en la gran pantalla Infinity-O de 6.5 pulgadas de Galaxy A21s. Su amplio ratio de aspecto llena tu pantalla de contenido de lado a lado. Mira tus vídeo favoritos, videojuegos y streamings en una impresionante pantalla HD+.', 'https://thumb.pccomponentes.com/w-530-530/articles/33/332031/1905-samsung-galaxy-a21s-4-128gb-azul-libre.jpg', '2021-06-11 15:46:08', '2021-06-11 15:46:08'),
(7, 'CHiQ L32H7A 32\" LED HD Ready', 'TV', 'CHiQ L32H7A es un smart TV de 32\" pulgadas HD para disfrutar plenamente de tus series, películas o juegos. ¡Navega por la web sin necesidad de un ordenador! Un navegador está directamente integrado, permitiéndote visitar tus sitios favoritos solo usando su control remoto.', 'https://thumb.pccomponentes.com/w-530-530/articles/31/316651/1517-chiq-l32h7a-32-led-hd-ready-especificaciones.jpg', '2021-06-11 20:52:34', '2021-06-11 20:52:34'),
(8, 'Led Full Hd', 'TV', 'Aiwa LED406FHD es un televisor de 40\" con excelente calidad de imagen, y Android TV, con diversión garantizada para todo la familia.\n\nCaracterísticas:\nTelevisor LED de 40? con Android TV.\nDiversión garantizada para toda la familia: Netflix, Youtube, Amazon Prime, Disney +.\nExcelente calidad de imagen.\nTecnología Mirashare y Chromecast integrados.\nMando a distancia con control de voz y Asistente de Google.', 'https://thumb.pccomponentes.com/w-530-530/articles/38/388177/1284-aiwa-led406fhd-40-led-fullhd-opiniones.jpg', '2021-06-11 20:53:02', '2021-06-11 20:53:02'),
(9, 'Silver 411061 40\" LED HD', 'TV', 'El televisor Silver 411061 de 40 pulgadas proporciona una gran experiencia visual y realismo en pantalla. Esta televisión HD permite reproducción en formatos multimedia de audio y vídeo. Su sonido, además, no desmerece la calidad de imagen, y cuenta con altavoces estéreo. Su formato compacto se adapta a la perfección a tu habitación.', 'https://thumb.pccomponentes.com/w-530-530/articles/22/221500/411061-panoramica0.jpg', '2021-06-11 20:53:26', '2021-06-11 20:53:26'),
(10, 'Hisense 40A5600F 40 LED FullHD', 'TV', 'La gama Hisense 40A5600F ofrece un diseño limpio y elegante. Con triple sintonizador digital y satélite, y con reproducción de video por USB. Su Smart TV le introduce en un mundo de aplicaciones.\n\nEspecificaciones Hisense 40A5600F\nExhibición\nDiagonal de la pantalla: 101,6 cm (40\")\nTipo HD: Full HD\nTecnología de visualización: LED\nTipo de retroiluminación LED: Direct-LED\nForma de la pantalla: Plana\nRelación de aspecto nativa: 16:9\nFormato de pantalla, ajustes: 4:3,16:9\nFormato de vídeo soportado: 720p,768p,1080p\nFormatos gráficos soportados: 1280 x 720 (HD 720),1360 x 768 (WXGA),1366 x 768,1920 x 1080 (HD 1080)\nBrillo de pantalla: 200 cd / m²\nFrecuencia nativa de refresco: 60 Hz\nRazón de contraste (típica): 5000:1\nÁngulo de visión, horizontal: 178°\nÁngulo de visión, vertical: 178°\nFiltro peine: 3D\nResolución de la pantalla: 1920 x 1080 Pixeles\nDiagonal de pantalla: 100,5 cm\nRelación de luminosidad máxima: 52%', 'https://thumb.pccomponentes.com/w-530-530/articles/30/308337/110-hisense-40a5600f-40-led-fullhd.jpg', '2021-06-11 20:54:06', '2021-06-11 20:54:06'),
(11, 'TD Systems K40DLJ12FS 39.5\" LED FullHD', 'TV', 'Conecta tu hogar con el mundo de la información, el ocio y el entretenimiento con el televisor K40DLJ12FS de TD Systems. Disfruta de forma fácil y cómoda de todo el contenido online en tu Smart TV.\n\nNuevos canales en alta definición\nSintonizador digital terrestre DVB-T2 para sintonizar más canales y señales en alta definición.\n\nInnovación\nLa TDT Híbrida te permite acceder a todo el contenido online de las cadenas de televisión, sin horarios, para disfrutar de él cuando tú quieras.\n\nConéctate de manera sencilla\nAccede a multitud de funciones y contenido online y conéctate con el mundo.', 'https://thumb.pccomponentes.com/w-530-530/articles/33/336996/1460-td-systems-k40dlj12fs-395-led-fullhd.jpg', '2021-06-11 20:55:17', '2021-06-11 20:55:17'),
(12, 'TCL 40ES560 40 LED FullHD', 'TV', '¡Comparte momentos únicos! Con AndroidTV 8.0, enamórate de la A.I. La serie ES56 combina un diseño fino y contemporáneo, calidad de imagen HDR y el sistema Smart TV más avanzado que existe: AndroidTV 8.0. Diseñada para aquellos que no quieren tener que elegir entre elegancia, calidad de imagen y fácil acceso al contenido que más les gusta, la serie ES56 se integra a la perfección en su entorno y permite que todos los miembros de la familia disfruten de su contenido favorito.\n\nLa serie ES56 ofrece una experiencia de visionado más inteligente. Ve taquillazos, transmite aplicaciones y disfruta de juegos multijugador. Además, con el Asistente de Google* integrado, puedes hacer mucho más y mucho más rápido. Haz preguntas, descubre el mejor contenido, controla los dispositivos inteligentes de tu casa, y todo solo con tu voz.', 'https://thumb.pccomponentes.com/w-530-530/articles/22/220741/tcl-40es560-40-led-fullhd-mejor-precio.jpg', '2021-06-11 20:55:52', '2021-06-11 20:55:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2021-06-11 13:00:40', '2021-06-11 13:00:40'),
(2, 'admin', '2021-06-11 13:00:40', '2021-06-11 13:00:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`id`, `nombre`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'PcComponentes', 'https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg', '2021-06-11 13:00:40', '2021-06-11 13:00:40'),
(2, 'Amazon', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png', '2021-06-11 13:00:40', '2021-06-11 13:00:40'),
(3, 'Coolmod', 'https://www.coolmod.com/coolmod/images/logo_coolmod_232x59.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Mediamarkt', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Media_Markt_logo.svg/1280px-Media_Markt_logo.svg.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Fnac', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `avatarId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`, `avatarId`) VALUES
(1, 'usuarionormal', 'usuario@properifericos.com', '$2a$08$ZioXcx1TAoR2Mafqe8pkXuvm2ZNh43Li8B42GrD9lN8pRI4ts3WNq', '2021-06-11 13:01:16', '2021-06-11 14:19:29', 2),
(2, 'alin11g', 'alin11g@yahoo.com', '$2a$08$DwPNeUWjb6M1USZv7ajcXO2a00L.8Oed5IpZkRutr8BmUx3gvYKMm', '2021-06-11 17:26:48', '2021-06-11 17:26:48', 1),
(3, 'ProPerifericos', 'admin@properifericos.com', '$2a$08$KHsB/N1.qS4yfs4QDv3QWOLo7MOOZLoEeOXjeWzdjsvYnw8Bw8iNa', '2021-06-11 21:12:25', '2021-06-11 21:14:48', 3),
(4, 'ProPerifericos2', 'user2@properifericos.com', '$2a$08$Qg4ZxEFnsPN/KY55iDyMBOH2sA/.6rcqGkEQUZADBt6HnDKM/ZyqG', '2021-06-11 21:12:50', '2021-06-11 21:12:50', 1),
(5, 'ProPerifericos3', 'user3@properifericos.com', '$2a$08$L065NseD5HPpm53HCj8KFug5aXvLEaAMzBSydjDTJ5sS/.cVi9DsC', '2021-06-11 21:12:55', '2021-06-11 21:12:55', 1),
(7, 'alin12g', 'alin12g@yahoo.com', '$2a$08$jyppqUDqS0G5E4.cR71i1u4wSNG8/OIH0u1AAYxCV8P3ZkhzgY1Fi', '2021-06-11 21:15:56', '2021-06-11 21:15:56', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2021-06-11 13:01:16', '2021-06-11 13:01:16', 1, 1),
('2021-06-11 17:26:48', '2021-06-11 17:26:48', 1, 2),
('2021-06-11 21:12:25', '2021-06-11 21:12:25', 1, 3),
('2021-06-11 21:12:50', '2021-06-11 21:12:50', 1, 4),
('2021-06-11 21:12:55', '2021-06-11 21:12:55', 1, 5),
('2021-06-11 21:15:56', '2021-06-11 21:15:56', 1, 7),
('2021-06-11 13:01:16', '2021-06-11 13:01:16', 2, 1),
('2021-06-11 21:12:25', '2021-06-11 21:12:25', 2, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `avatares`
--
ALTER TABLE `avatares`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `entradaId` (`entradaId`);

--
-- Indices de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productoId` (`productoId`),
  ADD KEY `tiendaId` (`tiendaId`);

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `avatarId` (`avatarId`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `avatares`
--
ALTER TABLE `avatares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`entradaId`) REFERENCES `entradas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD CONSTRAINT `enlaces_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enlaces_ibfk_2` FOREIGN KEY (`tiendaId`) REFERENCES `tiendas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `entradas_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`avatarId`) REFERENCES `avatares` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
