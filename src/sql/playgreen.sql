-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema playgreen
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema playgreen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `playgreen` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `playgreen` ;

-- -----------------------------------------------------
-- Table `playgreen`.`bet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playgreen`.`bet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bet_option` VARCHAR(255) NULL DEFAULT NULL,
  `sport` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `event_id` INT NULL DEFAULT NULL,
  `odd` INT NULL DEFAULT NULL,
  `result` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `deleted` TINYINT NULL DEFAULT NULL,
  `deleted_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `playgreen`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playgreen`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `gender` VARCHAR(255) NULL DEFAULT NULL,
  `birth_date` DATETIME NULL DEFAULT NULL,
  `country_id` INT NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `category` VARCHAR(255) NULL DEFAULT NULL,
  `document_id` VARCHAR(255) NULL DEFAULT NULL,
  `user_state` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `deleted_at` DATETIME NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `cash_on_hand` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `playgreen`.`user_bet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playgreen`.`user_bet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `odd` INT NULL DEFAULT NULL,
  `amount` INT NULL DEFAULT NULL,
  `state` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `deleted` TINYINT NULL DEFAULT NULL,
  `deleted_at` DATETIME NULL DEFAULT NULL,
  `userId` INT NULL DEFAULT NULL,
  `betId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_906a253729854629aa4f16f3219` (`userId` ASC) VISIBLE,
  INDEX `FK_0f60e754cdee0c53ca313ddc347` (`betId` ASC) VISIBLE,
  CONSTRAINT `FK_0f60e754cdee0c53ca313ddc347`
    FOREIGN KEY (`betId`)
    REFERENCES `playgreen`.`bet` (`id`),
  CONSTRAINT `FK_906a253729854629aa4f16f3219`
    FOREIGN KEY (`userId`)
    REFERENCES `playgreen`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `playgreen`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playgreen`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` INT NULL DEFAULT NULL,
  `category` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `deleted` TINYINT NULL DEFAULT NULL,
  `deleted_at` DATETIME NULL DEFAULT NULL,
  `userId` INT NULL DEFAULT NULL,
  `userBetId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_605baeb040ff0fae995404cea37` (`userId` ASC) VISIBLE,
  INDEX `FK_bff20fd4c91ab196537384faed0` (`userBetId` ASC) VISIBLE,
  CONSTRAINT `FK_605baeb040ff0fae995404cea37`
    FOREIGN KEY (`userId`)
    REFERENCES `playgreen`.`users` (`id`),
  CONSTRAINT `FK_bff20fd4c91ab196537384faed0`
    FOREIGN KEY (`userBetId`)
    REFERENCES `playgreen`.`user_bet` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 48
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
