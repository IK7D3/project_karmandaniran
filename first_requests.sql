-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2023 at 10:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `p_5`
--

-- --------------------------------------------------------

--
-- Table structure for table `first_requests`
--

CREATE TABLE `first_requests` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `initial_request` tinyint(1) NOT NULL DEFAULT 0,
  `appel` tinyint(1) NOT NULL DEFAULT 0,
  `degree_of_education` varchar(255) DEFAULT NULL,
  `work_experience` varchar(255) DEFAULT NULL,
  `type_of_employment` varchar(255) DEFAULT NULL,
  `organizational_position` varchar(255) DEFAULT NULL,
  `user_number` varchar(255) DEFAULT NULL,
  `job_specialization` varchar(255) DEFAULT NULL,
  `job_experiences` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `main_destination` varchar(255) DEFAULT NULL,
  `other_destinations` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `destination_city` varchar(255) DEFAULT NULL,
  `first_payment_code` varchar(255) DEFAULT NULL,
  `first_message` tinyint(1) NOT NULL DEFAULT 0,
  `initial_request_start_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `first_requests`
--

INSERT INTO `first_requests` (`id`, `user_id`, `status`, `initial_request`, `appel`, `degree_of_education`, `work_experience`, `type_of_employment`, `organizational_position`, `user_number`, `job_specialization`, `job_experiences`, `origin`, `main_destination`, `other_destinations`, `city`, `destination_city`, `first_payment_code`, `first_message`, `initial_request_start_date`, `created_at`, `updated_at`) VALUES
(16, 4, 1, 0, 0, 'ارشد', '6 سال', 'قراردادی', 'مدیر فنی', '1234', NULL, NULL, 'دانشگاه صنعتی شاهرود', 'دانشگاه سنندج', 'اراک، یزد', 'شاهرود', 'سنندج', NULL, 0, NULL, NULL, NULL),
(17, 21, 1, 0, 0, 'لیسانس', '2 سال', 'رسمی', 'استاد', '456', NULL, NULL, 'آموزشکده فنی ارومیه', 'دانشگاه تبریز', NULL, 'ارومیه', 'تبریز', NULL, 0, '1402-08-18 13:10:56', NULL, NULL),
(18, 6, 1, 0, 0, 'ایمان', 'ایمان', 'ایمان', NULL, NULL, NULL, NULL, 'دانشگاه میبد', 'دانشگاه یزد', NULL, 'میبد', 'یزد', NULL, 0, NULL, NULL, NULL),
(19, 23, 1, 3, 0, 'دیپلم ناپیوسته', '4سال', 'رسمی', 'معاون دانشکده', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه شیراز', NULL, 'تهران', 'شیراز', '33333', 1, '2023-10-30 19:48:23', '2023-10-30 16:16:50', '2023-11-01 11:34:24'),
(20, 24, 0, 1, 0, 'لیسانس', '2 سال', 'رسمی', 'معاون دانشکده', NULL, NULL, NULL, 'دانشگاه یزد', 'دانشگاه پیام نور اراک', NULL, 'یزد', 'اراک', NULL, 0, '1402-08-09 11:58:57', '2023-10-31 06:26:52', '2023-10-31 08:56:25'),
(21, 24, 0, 1, 0, 'لیسانس', '2 سال', 'رسمی', 'معاون دانشکده', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه شیراز', NULL, 'تهران', 'شیراز', NULL, 0, NULL, '2023-10-31 08:56:25', '2023-10-31 08:59:52'),
(22, 24, 0, 2, 0, 'سیکل', '4سال', 'رسمی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه کرج', 'دانشگاه تهران', NULL, 'کرج', 'تهران', '36345', 0, '1402-08-09 12:31:08', '2023-10-31 08:59:52', '2023-10-31 09:03:27'),
(23, 24, 0, 2, 0, 'لیسانس', '4سال', 'شرکتی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه یزد', 'دانشگاه تهران', NULL, 'یزد', 'تهران', '78678', 0, '1402-08-09 12:42:27', '2023-10-31 09:03:27', '2023-10-31 09:17:00'),
(24, 24, 0, 2, 0, 'لیسانس', '2 سال', 'شرکتی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه شیراز', NULL, 'تهران', 'شیراز', '68', 0, '1402-08-09 12:48:37', '2023-10-31 09:17:01', '2023-10-31 09:18:39'),
(25, 24, 0, 1, 0, 'مدرک یک', '2 سال', 'شرکتی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه شیراز', NULL, 'تهران', 'شیراز', NULL, 0, NULL, '2023-10-31 09:18:40', '2023-10-31 09:39:28'),
(26, 24, 0, 3, 0, 'مدرک دو', '2 سال', 'شرکتی', 'مدیر فنی', NULL, NULL, NULL, 'دانشگاه تبریز', 'دانشگاه شیراز', NULL, 'تبریز', 'شیراز', '989', 0, '1402-08-09 13:10:56', '2023-10-31 09:39:28', '2023-11-01 11:16:35'),
(27, 24, 0, 3, 0, 'سیکل', '2 سال', 'رسمی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه تهران', NULL, 'تهران', 'تهران', '11111111111111', 0, '1402-08-10 14:48:28', '2023-11-01 11:16:36', '2023-11-01 11:19:58'),
(28, 24, 0, 3, 0, 'سیکل', '2 سال', 'رسمی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه اراک', 'دانشگاه تهران', NULL, 'اراک', 'تهران', '777777777', 0, '1402-08-10 14:50:50', '2023-11-01 11:19:59', '2023-11-02 09:24:35'),
(31, 24, 0, 3, 0, 'دیپلم ناپیوسته', '4سال', 'رسمی', 'معاون فناوری', NULL, NULL, NULL, 'دانشگاه تهران', 'دانشگاه بجنورد', 'دانشگاه تهران، دانشگاه یزد', 'تهران', 'بجنورد', '678678', 0, '1402-08-11 18:05:19', '2023-11-02 09:24:36', '2023-11-12 20:04:22'),
(32, 24, 1, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2023-11-12 20:04:22', '2023-11-12 20:04:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `first_requests`
--
ALTER TABLE `first_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_foreign_key` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `first_requests`
--
ALTER TABLE `first_requests`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `first_requests`
--
ALTER TABLE `first_requests`
  ADD CONSTRAINT `user_id_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
