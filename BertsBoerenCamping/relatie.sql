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
-- Table `bertsboerencamping`.`baliemedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`baliemedewerker` (
  `idmedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(10) NULL,
  `achternaam` VARCHAR(25) NULL,
  `email` VARCHAR(100) NOT NULL,
  `rol` INT(10) NULL,
  `wachtwoord` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idmedewerker`),
  UNIQUE INDEX `idMedewerker_UNIQUE` (`idmedewerker` ASC) INVISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`administratiefmedewerker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`administratiefmedewerker` (
  `idmedewerker` INT(10) NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(10) NULL,
  `achternaam` VARCHAR(25) NULL,
  `email` VARCHAR(100) NOT NULL,
  `rol` INT(10) NULL,
  `wachtwoord` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idmedewerker`),
  UNIQUE INDEX `idmedewerker_UNIQUE` (`idmedewerker` ASC) INVISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`boeking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`boeking` (
  `idboeking` INT(10) NOT NULL,
  `aankomstdatum` DATE NULL,
  `vertrekdatum` DATE NULL,
  `accomodatietype` VARCHAR(50) NULL,
  `idgast` INT NULL,
  `idmedewerker` INT NULL,
  PRIMARY KEY (`idboeking`),
  INDEX `idgast_idx` (`idgast` ASC) VISIBLE,
  UNIQUE INDEX `idboeking_UNIQUE` (`idboeking` ASC) VISIBLE,
  INDEX `idmedewerker_idx` (`idmedewerker` ASC) INVISIBLE,
  CONSTRAINT `idgast`
    FOREIGN KEY (`idgast`)
    REFERENCES `bertsboerencamping`.`gast` (`idgast`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idmedewerkerbaliemedewerker`
    FOREIGN KEY (`idmedewerker`)
    REFERENCES `bertsboerencamping`.`baliemedewerker` (`idmedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idmedewerkeradministratiefmedewerker`
    FOREIGN KEY (`idmedewerker`)
    REFERENCES `bertsboerencamping`.`administratiefmedewerker` (`idmedewerker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bertsboerencamping`.`gast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bertsboerencamping`.`gast` (
  `idgast` INT NOT NULL,
  `voornaam` VARCHAR(25) NULL,
  `tussenvoegsel` VARCHAR(15) NULL,
  `achternaam` VARCHAR(25) NULL,
  `email` VARCHAR(100) NULL,
  `telefoonnummer` VARCHAR(15) NULL,
  `voorkeuren` VARCHAR(255) NULL,
  `idboeking` INT(10) NULL,
  PRIMARY KEY (`idgast`),
  UNIQUE INDEX `idgast_UNIQUE` (`idgast` ASC) VISIBLE,
  INDEX `idboeking_idx` (`idboeking` ASC) VISIBLE,
  CONSTRAINT `idboeking`
    FOREIGN KEY (`idboeking`)
    REFERENCES `bertsboerencamping`.`boeking` (`idboeking`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
