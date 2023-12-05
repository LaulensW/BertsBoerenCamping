-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bertsboerencamping
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bertsboerencamping` DEFAULT CHARACTER SET utf8 ;
USE `bertsboerencamping` ;

-- -----------------------------------------------------
-- Table `bertsboerencamping`.`gast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`gast` (
  `idGast` INT NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(15) NULL,
  `achternaam` VARCHAR(25) NULL,
  `email` VARCHAR(100) NULL,
  `telefoonnummer` VARCHAR(15) NULL,
  `voorkeuren` VARCHAR(255) NULL,
  PRIMARY KEY (`idGast`),
  UNIQUE INDEX `idgast_UNIQUE` (`idGast` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`boeking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`boeking` (
  `idBoeking` INT NOT NULL AUTO_INCREMENT,
  `aankomstdatum` DATE NULL,
  `vertrekdatum` DATE NULL,
  `accomodatietype` VARCHAR(50) NULL,
  `idGast` INT NULL,
  `idMedewerker` INT NULL,
  PRIMARY KEY (`idBoeking`),
  INDEX `idgast_idx` (`idGast` ASC) VISIBLE,
  UNIQUE INDEX `IdBoeking_UNIQUE` (`idBoeking` ASC) VISIBLE,
  INDEX `IdMedewerker_idx` (`idMedewerker` ASC) VISIBLE,
  CONSTRAINT `IdGast`
    FOREIGN KEY (`idGast`)
    REFERENCES `bertsboerencamping`.`gast` (`idGast`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IdMedewerkerBaliemedewerker`
    FOREIGN KEY (`idMedewerker`)
    REFERENCES `bertsboerencamping`.`baliemedewerker` (`idMedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IdMedewerkerAdministratiefmedewerker`
    FOREIGN KEY (`idMedewerker`)
    REFERENCES `bertsboerencamping`.`administratiefmedewerker` (`idMedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`baliemedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`baliemedewerker` (
  `idMedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(10) NULL,
  `achternaam` VARCHAR(25) NULL,
  `rol` INT(10) NULL,
  `wachtwoord` VARCHAR(16) NULL,
  PRIMARY KEY (`idMedewerker`),
  UNIQUE INDEX `IdMedewerker_UNIQUE` (`idMedewerker` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`administratiefmedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`administratiefmedewerker` (
  `idMedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(10) NULL,
  `achternaam` VARCHAR(25) NULL,
  `rol` INT(10) NULL,
  `wachtwoord` VARCHAR(16) NULL,
  PRIMARY KEY (`idMedewerker`),
  UNIQUE INDEX `IdMedewerker_UNIQUE` (`idMedewerker` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




-- CREATE TABLE Gast (
--   IdGast INT AUTO_INCREMENT PRIMARY KEY,
--   Voornaam VARCHAR(25),
--   TussenVoegsel VARCHAR(15),
--   Achternaam VARCHAR(15),
--   Email VARCHAR(50), 
--   Telefoonnummer VARCHAR(15),
--   Voorkeuren VARCHAR(255)
-- );

-- CREATE TABLE Booking (
--   IdBoeking INT AUTO_INCREMENT PRIMARY KEY,
--   IdGast INT,
--   AankomstDatum DATE,
--   VertrekDatum DATE,
--   AccommodatieType VARCHAR(50),
--   FOREIGN KEY (IdGast) REFERENCES Gast(IdGast),
--   KEY IdGast (IdGast),
--   KEY AankomstVertrekAcco (AankomstDatum, VertrekDatum, AccommodatieType)
-- );