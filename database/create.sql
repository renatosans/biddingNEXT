-- MySQL Script generated by MySQL Workbench
-- Tue Sep 27 17:37:32 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bidding
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bidding
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bidding` DEFAULT CHARACTER SET utf8 ;
USE `bidding` ;

-- -----------------------------------------------------
-- Table `bidding`.`Measurement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Measurement` (
  `unit` VARCHAR(4) NOT NULL,
  `description` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`unit`),
  UNIQUE INDEX `Unit_UNIQUE` (`unit` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`Contractor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Contractor` (
  `id` INT NOT NULL,
  `companyName` VARCHAR(250) NOT NULL,
  `contactPerson` TEXT NULL,
  `email` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`ItemGroup`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`ItemGroup` (
  `id` INT NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`Item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Item` (
  `id` INT NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `avgPrice` DECIMAL NOT NULL,
  `unitOfMeasurement` VARCHAR(4) NOT NULL,
  `itemGroup` INT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `bidding`.`ItemGroup`
-- -----------------------------------------------------
START TRANSACTION;
USE `bidding`;
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (1, 'Aluguel de maquinas');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (2, 'Materiais de Construção');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (3, 'Mão de obra');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (4, 'Aluguel de equipamentos');

COMMIT;

