/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.40 : Database - accountdemo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`accountdemo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `accountdemo`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `record_type` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `record_desc` varchar(255) DEFAULT NULL,
  `record_value` float DEFAULT NULL,
  `record_date` datetime DEFAULT NULL,
  `pay` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

/*Data for the table `account` */

insert  into `account`(`id`,`record_type`,`category`,`subcategory`,`record_desc`,`record_value`,`record_date`,`pay`,`userid`) values (2,0,'着装','衣服','',3,'2021-02-25 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(3,0,'着装','衣服','',3,'2021-02-25 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(4,1,'交通','上下班','sadasdabsdijna',3,'2021-02-25 00:00:00','ICBC','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(5,1,'其他','健身锻炼','nihaoaaa',3,'2021-02-25 00:00:00','ABC','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(6,0,'着装','衣服','213',55,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(7,0,'着装','衣服','',33,'2021-02-27 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(8,0,'着装','衣服','',66,'2021-02-27 00:00:00','other','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(9,1,'着装','衣服','',5555,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(10,0,'着装','衣服','',666,'2021-02-27 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(11,0,'日常','洗漱用品','',555,'2021-02-27 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(12,0,'衣饰','衣服','',66,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(13,0,'交通','地铁','test',33,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(14,1,'衣饰','衣服','213',999,'2021-02-27 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(15,0,'衣饰','衣服','123123',88,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(17,0,'衣饰',NULL,NULL,0,NULL,'aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(18,0,'食物',NULL,NULL,0,NULL,'weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(19,0,'衣饰',NULL,'213213',0,NULL,'weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(20,0,'食物','三餐','12323',3,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(21,0,'衣饰','衣服','66666',333,'2021-02-27 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(22,1,'女士','化妆品','66666',666,'2021-03-02 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(23,0,'衣饰','衣服','test',564,'2021-03-02 00:00:00','ICBC','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(24,0,'衣饰','衣服','123123',10000,'2021-03-02 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(25,1,'衣饰','衣服','213123',10000,'2021-03-02 00:00:00','other','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(26,0,'衣饰','衣服','123213',10000,'2021-03-02 00:00:00','ABC','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(27,1,'衣饰','衣服','asdasd',9999,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(28,0,'衣饰','衣服','123',10000,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(29,1,'衣饰','衣服','123123',10000,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(30,0,'衣饰','衣服','21312',10000,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(31,1,'衣饰','衣服','123',10000,'2021-03-02 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(32,0,'衣饰','衣服','213',10000,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(33,1,'衣饰','衣服','213',10000,'2021-03-02 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(34,0,'衣饰','衣服','213213',10000,'2021-03-07 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(35,1,'衣饰','衣服','213213',10000,'2021-03-07 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(36,0,'衣饰','衣服','21323',10000,'2021-03-07 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(37,1,'衣饰','衣服','123',10000,'2021-03-07 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(38,0,'衣饰','衣服','21323',100,'2021-03-13 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(39,0,'衣饰','衣服','测试一下',33,'2021-05-05 00:00:00','weChat','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM'),(40,0,'衣饰','衣服','test撒大苏打的',55,'2021-10-05 00:00:00','aliPay','oYW2U4rZoWXP8ZlRFTnT4hfEQKlM');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
