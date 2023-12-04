-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bertsboerencamping
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bertsboerencamping
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bertsboerencamping` DEFAULT CHARACTER SET utf8 ;
USE `bertsboerencamping` ;

-- -----------------------------------------------------
-- Table `bertsboerencamping`.`gast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`gast` (
  `IdGast` INT NOT NULL AUTO_INCREMENT,
  `Voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(15) NULL,
  `Achternaam` VARCHAR(25) NULL,
  `Email` VARCHAR(100) NULL,
  `Telefoonnummer` VARCHAR(15) NULL,
  `Voorkeuren` VARCHAR(255) NULL,
  PRIMARY KEY (`IdGast`),
  UNIQUE INDEX `idgast_UNIQUE` (`IdGast` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`Baliemedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`Baliemedewerker` (
  `IdMedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `Voornaam` VARCHAR(25) NULL,
  `Tussenvoegsel` VARCHAR(10) NULL,
  `Achternaam` VARCHAR(25) NULL,
  `Rol` INT(10) NULL,
  `Wachtwoord` VARCHAR(16) NULL,
  PRIMARY KEY (`IdMedewerker`),
  UNIQUE INDEX `IdMedewerker_UNIQUE` (`IdMedewerker` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`Administratiefmedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`Administratiefmedewerker` (
  `IdMedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `Voornaam` VARCHAR(25) NULL,
  `Tussenvoegsel` VARCHAR(10) NULL,
  `Achternaam` VARCHAR(25) NULL,
  `Rol` INT(10) NULL,
  `Wachtwoord` VARCHAR(16) NULL,
  PRIMARY KEY (`IdMedewerker`),
  UNIQUE INDEX `IdMedewerker_UNIQUE` (`IdMedewerker` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`boeking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`boeking` (
  `IdBoeking` INT NOT NULL AUTO_INCREMENT,
  `Aankomstdatum` DATE NULL,
  `Vertrekdatum` DATE NULL,
  `Accomodatietype` VARCHAR(50) NULL,
  `IdGast` INT NULL,
  `IdMedewerker` INT NULL,
  PRIMARY KEY (`IdBoeking`),
  INDEX `idgast_idx` (`IdGast` ASC) VISIBLE,
  UNIQUE INDEX `IdBoeking_UNIQUE` (`IdBoeking` ASC) VISIBLE,
  INDEX `IdMedewerker_idx` (`IdMedewerker` ASC) VISIBLE,
  CONSTRAINT `IdGast`
    FOREIGN KEY (`IdGast`)
    REFERENCES `bertsboerencamping`.`gast` (`IdGast`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IdMedewerkerBaliemedewerker`
    FOREIGN KEY (`IdMedewerker`)
    REFERENCES `bertsboerencamping`.`Baliemedewerker` (`IdMedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IdMedewerkerAdministratiefmedewerker`
    FOREIGN KEY (`IdMedewerker`)
    REFERENCES `bertsboerencamping`.`Administratiefmedewerker` (`IdMedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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