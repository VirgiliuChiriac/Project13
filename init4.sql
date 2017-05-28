drop table InfoProdus cascade constraints;
CREATE TABLE InfoProdus(
  id_produs integer,
  id_user integer,
  tip VARCHAR2(50),
  achizitie VARCHAR2(50),
  pret INT,
  suprf_utila VARCHAR2(20),
  PRIMARY KEY (id_produs)
);

drop table ExtraInfoProdus cascade constraints;
CREATE TABLE ExtraInfoProdus(
  id_extra integer,
  id_produs integer,
  nr_camere integer,
  nr_bai integer,
  descriere VARCHAR2(1000),
  confort integer,
  vechime integer,
  niveluri_imobil integer,
  etaj integer,
  tip_teren VARCHAR2(20),
  clasificare VARCHAR2(20),
  coordonata_lat VARCHAR2(20),
  coordonata_long VARCHAR2(20),
  FOREIGN KEY (id_produs) REFERENCES InfoProdus(id_produs)
);
