CREATE DATABASE  IF NOT EXISTS `blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `blog`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `category` varchar(30) NOT NULL,
  `state` tinyint NOT NULL DEFAULT '0',
  `body` text NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_user` (`id_user`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (6,'adadadad','adadadad','entretenimento',0,'adadada',1),(7,'Teste1','teste1','entretenimento',0,'2242342',1),(8,'Teste2','teste2','entretenimento',0,'tesdte',1),(10,'aasdASa','aasdasa','entretenimento',0,'dadadadadad',1),(11,'dadadadadada','dadadadadada','entretenimento',0,'<h1>adadadadaddadadadad</h1>\r\n<p>&nbsp;</p>\r\n<p><img src=\"https://www.otakupt.com/wp-content/uploads/2022/12/Bocchi-the-Rock-agradece-apoio-dos-fas-2.jpg\" alt=\"bocchi\" width=\"720\" height=\"405\"></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>sdadadadada</p>\r\n<p>dad</p>\r\n<p>ad</p>\r\n<p>ad</p>\r\n<p>ad</p>\r\n<p>ad</p>\r\n<p>a</p>\r\n<p>da</p>\r\n<p>dada</p>\r\n<p>da</p>\r\n<p>daaaaaaaaaaaaaaaaaadadada</p>',1),(14,'qhduahdauhdauhdadada 131223123213121','qhduahdauhdauhdadada-131223123213121','entretenimento',0,'<h1 style=\"text-align: left;\">adadadadadada<img src=\"https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/gaivota.jpg\" alt=\"\" width=\"600\" height=\"386\"></h1>',1),(15,'Chicodjadjaidjaijdajdada 231321321','chicodjadjaidjaijdajdada-231321321','entretenimento',0,'<h1>HDuahduahdauhdahda</h1>\r\n<p><img src=\"https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/gaivota.jpg\" alt=\"\" width=\"600\" height=\"386\"></p>',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(99) NOT NULL,
  `dat` date NOT NULL,
  `password` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Adminastror','Chico','Admin','franciscodavi.s.costa@gmail.com','2023-01-20','$2b$10$jIpW9hC6U2p3QW1Ig1svreMWM3ghkZWXoFUBcWjXLH/8K4YcUTLTu'),(2,'Admin','Admin','chico','chico@chico.com','2023-01-22','$2b$10$iGEoQAM5jgg2NNUxNYUdEes8tF9sb35EbeN4BnaD5MYWKcnB547Wu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-30  3:09:12
