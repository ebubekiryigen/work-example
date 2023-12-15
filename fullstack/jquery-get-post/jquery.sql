-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 15 Oca 2023, 12:29:30
-- Sunucu sürümü: 10.4.21-MariaDB
-- PHP Sürümü: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `jquery`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_turkish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_turkish_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_turkish_ci NOT NULL,
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `insertAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `list`
--

INSERT INTO `list` (`id`, `full_name`, `email`, `phone`, `updateAt`, `insertAt`) VALUES
(1, 'asd', 'saf', 'fas', '2023-01-15 10:51:24', '2023-01-15 10:51:24'),
(2, 'Ebubekir', 'Yigen@xn--yigen-8fd.com', '05332089981', '2023-01-15 10:51:46', '2023-01-15 10:51:46');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
