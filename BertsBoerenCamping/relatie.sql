CREATE TABLE Gast (
  IdGast INT AUTO_INCREMENT PRIMARY KEY,
  Voornaam VARCHAR(25),
  TussenVoegsel VARCHAR(15),
  Achternaam VARCHAR(15),
  Email VARCHAR(50), 
  Telefoonnummer VARCHAR(15),
  Voorkeuren VARCHAR(255)
);

CREATE TABLE Booking (
  IdBoeking INT AUTO_INCREMENT PRIMARY KEY,
  IdGast INT,
  AankomstDatum DATE,
  VertrekDatum DATE,
  AccommodatieType VARCHAR(50),
  FOREIGN KEY (IdGast) REFERENCES Gast(IdGast),
  KEY IdGast (IdGast),
  KEY AankomstVertrekAcco (AankomstDatum, VertrekDatum, AccommodatieType)
);