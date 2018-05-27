CREATE TABLE   IF NOT EXISTS  `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE   IF NOT EXISTS  `info` (
  `info_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `sex` varchar(3) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `blog` varchar(255) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `education` varchar(50) DEFAULT NULL,
  `college` varchar(50) DEFAULT NULL,
  `university` varchar(50) DEFAULT NULL,
  `gpa` float(5) DEFAULT NULL,
  `introduction` TEXT(21845) DEFAULT NULL,
  `zhihu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE   IF NOT EXISTS  `project` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `s_date` varchar(50) DEFAULT NULL,
  `e_date` varchar(50) DEFAULT NULL,
  `introduction` TEXT(65535) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE   IF NOT EXISTS  `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `class_name` varchar(50) NOT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE   IF NOT EXISTS  `article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `create_time` varchar(50) DEFAULT NULL,
  `update_time` varchar(50) DEFAULT NULL,
  `content` TEXT(65535) DEFAULT NULL,
  `classification` TEXT(20) DEFAULT NULL,
  `cover_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;