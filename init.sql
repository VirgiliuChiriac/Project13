CREATE OR REPLACE FUNCTION login(usr IN VARCHAR2, pass in VARCHAR2) 
   RETURN VARCHAR2 
   IS v_res int;
   BEGIN 
   v_res := -1;
    select id_user into v_res from users where email = usr and pass = parola;
    IF (v_res = -1)
      THEN 
        return('nu a fost gasit');
      ELSE
        return('logare reusita');
   END IF; 
    END;
/

DROP TABLE produs;
CREATE TABLE produs(
  id_produs INT,
  id_user INT,
  oras VARCHAR2(20),
  tip VARCHAR2(20),
  achizitie VARCHAR2(20),
  descriere VARCHAR2(1000),
  coordonata_lat VARCHAR2(20),
  coordonata_long VARCHAR2(20),
  pret INT,
  nr_camere VARCHAR2(20),
  nr_bai VARCHAR2(20),
  suprf_utila VARCHAR2(20),
  confort VARCHAR2(20),
  vechime VARCHAR2(20),
  niveluri_imobil VARCHAR2(20),
  struct_rezistenta VARCHAR2(20),
  etaj VARCHAR2(20),
  suprafata_teren VARCHAR2(20),
  front_stradal VARCHAR2(20),
  clasificare VARCHAR2(20),
  tip_agric VARCHAR2(20)
);

--apartament
insert into produs
    values (0, 1, 'San Francisco', 'Apartament', 'Inchiriere','In stare buna','37.769266','-122.423955', 350,
    '3','2','110 mp', 'lux', '1998', '4', 'caramida', '2','','','','');

insert into produs
    values (1, 1, 'San Francisco', 'Apartament', 'Vanzare','In stare foarte buna','37.783266','-122.433755', 49000,
    '2','1','80 mp', '3', '2004', '6', 'caramida', '1','','','','');

--casa/vila
insert into produs
    values (2, 2, 'San Francisco', 'Casa/Vila', 'Vanzare','Petrecerile aici se tin','37.731266','-122.442355', 120000,
    '6','3','240 mp', '2', '2004', '2', 'beton', '','1000mp','4m','','');

--teren constructii
insert into produs
    values (3, 3, 'San Francisco', 'Teren Constructii', 'Vanzare','Locul tau preferat','37.721866','-122.453655', 40,
    '','','','','','','','','2000mp','2m','Intravilan','');

--teren agricol
insert into produs
    values (4, 3, 'San Francisco', 'Teren Agricol', 'Vanzare','Locul tau preferat','37.743266','-122.464355', 10,
    '','','','','','','','','6000mp','2m','Intravilan','Livada');


DROP TABLE users;
CREATE TABLE users(
  id_user INT,
  prenume VARCHAR2(20),
  nume VARCHAR2(20),
  email VARCHAR2(50),
  parola VARCHAR2(100),
  telefon VARCHAR2(20)
);

insert into users values (0, 'Vasile', 'Belciug', 'vasile.belciug@gmail.com', 'secret', '0735267873'
);

insert into users values (1, 'Marinel', 'Timofte', 'marinel.timofte@gmail.com', 'secret', '0745235643'
);

insert into users values (2, 'Sandra', 'Marinescu', 'sandra.marinescu@gmail.com', 'secret', '0753234598'
);

insert into users values (3, 'Calean', 'Miculescu', 'calean.miculescu@gmail.com', 'secret', '0735267873'
);