CREATE OR REPLACE FUNCTION test(t IN VARCHAR2) 
   RETURN VARCHAR2 
   IS acc_bal NUMBER(11,2);
   BEGIN 
      RETURN('test'); 
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
    values (0, 1, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1584549','27.601441799999975', 350,
    '3','2','150 mp', 'lux', '2007', '4', 'caramida', '2','','','','');

insert into produs
    values (1, 1, 'Iasi', 'Apartament', 'Inchiriere','In stare foarte buna','47.1581129','27.60149975', 200,
    '2','1','80 mp', '3', '2004', '6', 'caramida', 'parter','','','','');

insert into produs
    values (2, 2, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1584','27.601975', 310,
    '3','1','120 mp', '1', '1998', '2', 'caramida', '2','','','','');

insert into produs
    values (3, 2, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.128139','27.601442175', 49000,
    '2','1','120 mp', '3', '2005', '6', 'caramida', '4','','','','');

insert into produs
    values (4, 2, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.05734','27.50144172975', 380,
    '3','2','100 mp', 'lux', '2010', '4', 'caramida', '2','','','','');

insert into produs
    values (5, 3, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.13245','27.501441339975', 58000,
    '1','1','80 mp', '4', '2009', '6', 'caramida', '6','','','','');

insert into produs
    values (6, 4, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.15432','27.6043', 220,
    '3','2','160 mp', 'lux', '2005', '4', 'caramida', '4','','','','');

insert into produs
    values (7, 5, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.15811','27.60123324', 67000,
    '2','1','100 mp', '3', '2004', '6', 'caramida', 'parter','','','','');

insert into produs
    values (8, 6, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1584552','27.60143241', 240,
    '3','1','110 mp', 'lux', '2012', '8', 'caramida', '1','','','','');

insert into produs
    values (9, 7, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.114321','27.60143222', 60000,
    '1','1','80 mp', '3', '2004', '4', 'caramida', '2','','','','');

insert into produs
    values (10, 8, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1643256','27.6015432218', 270,
    '4','2','110 mp', 'lux', '1998', '4', 'caramida', '2','','','','');

insert into produs
    values (11, 8, 'Iasi', 'Apartament', 'Inchiriere','In stare foarte buna','47.152222','27.601432443, 290,
    '2','1','120 mp', '3', '2004', '6', 'caramida', '1','','','','');

insert into produs
    values (12, 9, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.0928','27.5827', 199,
    '3','2','90 mp', 'lux', '2009', '4', 'caramida', 'parter','','','','');

insert into produs
    values (13, 9, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.161223','27.60432', 56000,
    '2','1','85 mp', '4', '2002', '7', 'caramida', '1','','','','');

insert into produs
    values (14, 9, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.193221','27.601432145', 360,
    '4','1','160 mp', 'lux', '2008', '4', 'caramida', '2','','','','');

insert into produs
    values (15, 9, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.154324','27.60143213', 45000,
    '2','1','80 mp', '3', '2004', '6', 'caramida', 'parter','','','','');

insert into produs
    values (16, 10, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.12843244','27.60145432', 330,
    '3','2','120 mp', 'lux', '2010', '4', 'caramida', '4','','','','');

insert into produs
    values (17, 15, 'Iasi', 'Apartament', 'Inchiriere','In stare foarte buna','47.1523249','27.601441799999975', 490,
    '2','1','120 mp', '4', '2004', '6', 'caramida', '6','','','','');

insert into produs
    values (18, 16, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1584549','27.601423975', 220,
    '4','2','170 mp', 'lux', '2015', '10', 'caramida', '9','','','','');

insert into produs
    values (19, 17, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.1584123','27.6014324', 39000,
    '1','1','100 mp', '2', '2004', '6', 'caramida', '5','','','','');

insert into produs
    values (20, 18, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.152423','27.59932, 360,
    '3','1','110 mp', 'lux', '2016', '4', 'caramida', '3','','','','');

insert into produs
    values (21, 19, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.089923','27.601324', 48000,
    '2','1','80 mp', '3', '2004', '6', 'caramida', '2','','','','');

insert into produs
    values (22, 20, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1324325','27.601441432', 249,
    '3','2','130 mp', '1', '1998', '4', 'caramida', 'parter','','','','');

insert into produs
    values (23, 21, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.14324','27.601234', 630000,
    '1','1','80 mp', '1', '2004', '6', 'caramida', '2','','','','');

insert into produs
    values (24, 21, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.175486,'27.601443', 230,
    '3','1','100 mp', 'lux', '2016', '4', 'caramida', '1','','','','');

insert into produs
    values (25, 22, 'Iasi', 'Apartament', 'Inchiriere','In stare foarte buna','47.158324','27.6014414329975', 220,
    '2','1','90 mp', '3', '2001', '6', 'caramida', '3','','','','');

insert into produs
    values (26, 23, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.152349','27.601441439975', 199,
    '3','2','100 mp', 'lux', '2016', '4', 'caramida', '4','','','','');

insert into produs
    values (27, 24, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.158679','27.60144156759975', 42000,
    '2','1','1400 mp', '3', '2007', '12', 'caramida', '11','','','','');

insert into produs
    values (28, 25, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.15345549','27.60144175', 300,
    '3','2','160 mp', 'lux', '2007', '12', 'caramida', '10','','','','');

insert into produs
    values (29, 25, 'Iasi', 'Apartament', 'Inchiriere','In stare foarte buna','47.1543239','27.6016575', 400,
    '1','1','80 mp', '3', '2005', '7', 'caramida', '4','','','','');

insert into produs
    values (30, 26, 'Iasi', 'Apartament', 'Inchiriere','In stare buna','47.1584349','27.6014546547875', 200,
    '4','1','110 mp', '4', '2009', '4', 'caramida', '3','','','','');

insert into produs
    values (31, 26, 'Iasi', 'Apartament', 'Vanzare','In stare foarte buna','47.174324','27.6111975', 680000,
    '2','1','80 mp', '2', '2004', '4', 'caramida', 'parter','','','','');


--casa/vila
insert into produs
    values (32, 1, 'Iasi', 'Casa/Vila', 'Vanzare','Petrecerile aici se tin','47.1589','27.60144299975', 120000,
    '3','1','240 mp', 'lux', '2006', '2', 'beton', '','300 mp','6m','','');

insert into produs
    values (33, 2, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.158232','27.6432443242975', 100000,
    '5','2','220 mp', '4', '2002', '2', 'beton', '','300 mp','7m','','');

insert into produs
    values (34, 2, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare buna','47.1584549','27.6121375', 600,
    '4','1','180 mp', '3', '2003', '2', 'beton', '','200 mp','7m','','');

insert into produs
    values (35, 2, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare buna','47.1544','27.6129975', 800,
    '3','1','170 mp', '3', '2002', '2', 'beton', '','350 mp','4m','','');

insert into produs
    values (36, 3, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.15323','27.623999975', 150000,
    '6','2','280 mp', 'lux', '2010', '2', 'beton', '','290 mp','4m','','');

insert into produs
    values (37, 6, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.158432','27.61175', 110000,
    '2','1','120 mp', '2', '2004', '2', 'beton', '','240 mp','6m','','');

insert into produs
    values (38, 7, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.1521','27.6432999975', 115000,
    '4','2','200 mp', '2', '2008', '2', 'beton', '','370 mp','4m','','');

insert into produs
    values (39, 15, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare buna','47.1467,'27.64999975', 900,
    '3','1','130 mp', '3', '2005', '2', 'beton', '','180 mp','10m','','');

insert into produs
    values (40, 16, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.14889','27.62975', 100000,
    '3','1','150 mp', '4', '2012', '2', 'beton', '','190 mp','4m','','');

insert into produs
    values (41, 16, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare foarte buna','47.156764','27.6014435', 1000,
    '5','2','200 mp', 'lux', '2009', '2', 'beton', '','270 mp','4m','','');

insert into produs
    values (42, 16, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.154324','27.65975', 90000,
    '2','1','100 mp', '3', '2003', '2', 'beton', '','160 mp','3m','','');

insert into produs
    values (43, 17, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare foarte buna','47.158435','27.6239999975', 600,
    '3','2','180 mp', '2', '2004', '2', 'beton', '','300 mp','3m','','');

insert into produs
    values (44, 18, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.1543543333','27.6699975', 80000,
    '4','2','200 mp', '2', '2004', '2', 'beton', '','240 mp','4m','','');

insert into produs
    values (45, 18, 'Iasi', 'Casa/Vila', 'Vanzare','Petrecerile aici se tin','47.15545','27.62999975', 120000,
    '2','2','210 mp', '2', '2004', '2', 'beton', '','250 mp','2m','','');

insert into produs
    values (46, 25, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.1584563','27.60275', 120000,
    '6','2','230 mp', '3', '2009', '2', 'beton', '','320 mp','4m','','');

insert into produs
    values (47, 26, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.14802','27.60575', 120000,
    '3','1','140 mp', '5', '2008', '2', 'beton', '','160 mp','4m','','');

insert into produs
    values (48, 26, 'Iasi', 'Casa/Vila', 'Vanzare','Petrecerile aici se tin','47.15845','27.601441792975', 89000,
    '4','1','200 mp', '1', '2000', '2', 'beton', '','270 mp','9m','','');

insert into produs
    values (49, 26, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.1582','27.659975', 125000,
    '2','1','210 mp', '2', '2004', '2', 'beton', '','290 mp','4m','','');

insert into produs
    values (50, 26, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare foarte buna','47.1564','27.6129999975', 750,
    '3','1','120 mp', '2', '2006', '2', 'beton', '','150 mp','4m','','');

insert into produs
    values (51, 26, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna,'47.1544','27.6675799999975', 60000,
    '2','1','120 mp', '3', '2005', '2', 'beton', '','190 mp','5m','','');

insert into produs
    values (52, 26, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare buna','47.15876','27.6098, 580,
    '2','1','100 mp', '3', '2001', '2', 'beton', '','200 mp','8m','','');

insert into produs
    values (53, 27, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.15899','27.643249999975', 105000,
    '4','1','170 mp', '2', '2004', '2', 'beton', '','210 mp','5m','','');

insert into produs
    values (54, 29, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.1533','27.601232', 100000,
    '3','2','190 mp', '3', '2004', '2', 'beton', '','320 mp','4m','','');

insert into produs
    values (55, 29, 'Iasi', 'Casa/Vila', 'Vanzare','Petrecerile aici se tin','47.15546','27.60154999975', 90000,
    '4','1','150 mp', '4', '2004', '2', 'beton', '','180 mp','4m','','');

insert into produs
    values (56, 29, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.151','27.60144179945', 100000,
    '5','1','190 mp', '2', '2004', '2', 'beton', '','220 mp','4m','','');

insert into produs
    values (57, 29, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare foarte buna','47.1583','27.60142975', 950,
    '3','2','180 mp', '3', '2008', '2', 'beton', '','240 mp','4m','','');

insert into produs
    values (58, 29, 'Iasi', 'Casa/Vila', 'Vanzare','In stare buna','47.155','27.60144179943', 100000,
    '3','1','160 mp', '2', '2003', '2', 'beton', '','190 mp','4m','','');

insert into produs
    values (59, 30, 'Iasi', 'Casa/Vila', 'Inchiriere','In stare foarte buna','47.15123','27.60111', 800,
    '2','1','110 mp', '2', '2004', '2', 'beton', '','310 mp','4m','','');

insert into produs
    values (60, 32, 'Iasi', 'Casa/Vila', 'Vanzare','In stare foarte buna','47.156578','27.601443', 140000,
    '3','1','130 mp', 'lux', '2012', '2', 'beton', '',' 160 mp','3m','','');



--teren constructii
insert into produs
    values (61, 5, 'Iasi', 'Teren Constructii', 'Vanzare','Locul tau preferat','47.1584549','27.601441799999975', 90000,
    '','','','','','','','','600mp','','Intravilan','');

insert into produs
    values (62, 8, 'Iasi', 'Teren Constructii', 'Vanzare','','47.15432','27.601324975', 30000,
    '','','','','','','','','165mp','','Intravilan','');

insert into produs
    values (63, 12, 'Iasi', 'Teren Constructii', 'Vanzare','','47.154','27.601442349975', 40000,
    '','','','','','','','','220mp','','Intravilan','');

insert into produs
    values (64, 31, 'Iasi', 'Teren Constructii', 'Vanzare','','47.15149','27.6023499975', 50000,
    '','','','','','','','','150 mp','','Intravilan','');

insert into produs
    values (65, 13, 'Iasi', 'Teren Constructii', 'Vanzare','','47.15249','27.60142975', 45000,
    '','','','','','','','','130mp','','Intravilan','');

insert into produs
    values (66, 23, 'Iasi', 'Teren Constructii', 'Vanzare','','47.154','27.6014414975', 30000,
    '','','','','','','','','800mp','','Intravilan','');

insert into produs
    values (67, 24, 'Iasi', 'Teren Constructii', 'Vanzare','','47.15841','27.601499975', 60000,
    '','','','','','','','','270mp','','Intravilan','');

insert into produs
    values (68, 24, 'Iasi', 'Teren Constructii', 'Vanzare','','47.158443','27.6019375', 55500,
    '','','','','','','','','150mp','','Intravilan','');

insert into produs
    values (69, 24, 'Iasi', 'Teren Constructii', 'Vanzare','','47.1449','27.60124139975', 40000,
    '','','','','','','','','800mp','','Intravilan','');

insert into produs
    values (70, 25, 'Iasi', 'Teren Constructii', 'Vanzare','','47.1523549','27.6012417919975', 47000,
    '','','','','','','','','100mp','','Intravilan','');

insert into produs
    values (71, 30, 'Iasi', 'Teren Constructii', 'Vanzare','','47.1583249','27.603142239975', 39000,
    '','','','','','','','','200mp','','Intravilan','');


--teren agricol
insert into produs
    values (72, 13, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15329','27.6014345', 20000,
    '','','','','','','','','340mp','','Intravilan','Livada');

insert into produs
    values (73, 15, 'Iasi', 'Teren Agricol', 'Vanzare','','47.1581239','27.60144134975', 15000,
    '','','','','','','','','320mp','','Intravilan','');

insert into produs
    values (74, 15, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15349','27.6014423499975', 25000,
    '','','','','','','','','470mp','','Intravilan','');

insert into produs
    values (75, 19, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15823','27.60239999975', 27000,
    '','','','','','','','','500mp','','Intravilan','');

insert into produs
    values (76, 16, 'Iasi', 'Teren Agricol', 'Vanzare','','47.152','27.60144134975', 30000,
    '','','','','','','','','250mp','','Intravilan','Livada');

insert into produs
    values (77, 30, 'Iasi', 'Teren Agricol', 'Vanzare','','47.154','27.6014413475', 24000,
    '','','','','','','','','400mp','','Intravilan','');

insert into produs
    values (78, 33, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15854','27.60144349975', 18500,
    '','','','','','','','','200mp','','Intravilan','Livada');

insert into produs
    values (79, 35, 'Iasi', 'Teren Agricol', 'Vanzare','','47.1523','27.60134975', 19000,
    '','','','','','','','','100mp','','Intravilan','');

insert into produs
    values (80, 38, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15865','27.6014329975', 21000,
    '','','','','','','','','300mp','','Intravilan','');

insert into produs
    values (81, 38, 'Iasi', 'Teren Agricol', 'Vanzare','','47.15856','27.601443275', 17000,
    '','','','','','','','','600mp','','Intravilan','Livada');


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

insert into users values (4, 'Daniel', 'Bivol', 'daniel.bivol@gmail.com', 'asdqwe', '0723134890'
);

insert into users values (5, 'Ciprian', 'Gavril', 'ciprian.gavril@gmail.com', 'mare', '0723555890'
);

insert into users values (6, 'Andrei', 'Popescu', 'andrei.popescu@gmail.com', 'sare', '0721423890'
);

insert into users values (7, 'Gigel', 'Arhie', 'gigel.arhie@gmail.com', 'certe', '0723122220'
);

insert into users values (8, 'Marius', 'Zagan', 'marius.zagan@gmail.com', 'vinete', '0723165890'
);

insert into users values (9, 'Magda', 'Baimacea', 'magda.baimacean@gmail.com', 'cerg', '0723122540'
);


insert into users values (10, 'Ana', 'Calancea', 'ana.calancea@gmail.com', 'veter', '0723113344'
);

insert into users values (11, 'Marta', 'Popescu', 'marta.popescu@gmail.com', 'retes', '0723127734'
);

insert into users values (12, 'Florin', 'Apostol', 'florin.apostol@gmail.com', 'more', '0723127134'
);

insert into users values (13, 'Andrei', 'Birgu', 'andrei.birgu@gmail.com', 'zmeura', '0723127855'
);

insert into users values (14, 'Shauki', 'Gareeb', 'shauki.gareeb@gmail.com', 'pepsi', '0723127895'
);

insert into users values (15, 'Vasile', 'Biju', 'vasile.biju@gmail.com', 'cafea', '0723127890'
);
insert into users values (16, 'Eugen', 'Gavrilovici', 'eugen.gavrilovici@gmail.com', 'comp', '0723126890'
);

insert into users values (17, 'Teodor', 'Blindu', 'teodor.blindu@gmail.com', 'lasa', '0723554490'
);

insert into users values (18, 'Fabian', 'Gavril', 'fabian.gavril@gmail.com', 'nani', '0722237890'
);
insert into users values (19, 'Catalin', 'Jecu', 'catalin.jecu@gmail.com', 'calc', '0723134590'
);

insert into users values (20, 'Andreea', 'Florea', 'andreea.florea@gmail.com', 'salt', '0723165490'
);

insert into users values (21, 'Andreea', 'Borcan', 'andreea.borcan@gmail.com', 'dag', '0724567890'
);

insert into users values (22, 'Virgiliu', 'Chiriac', 'virgiliu.chiriac@gmail.com', ''petrecere, '0722337890'
);

insert into users values (23, 'Dorin', 'Chiriac', 'dorin.chiriac@gmail.com', 'bere', '0723112290'
);
insert into users values (24, 'Stefan', 'Bivol', 'stefan.bivol@gmail.com', 'lamaie', '0724791890'
);

insert into users values (25, 'Onisim', 'Gula', 'onisim.gula@gmail.com', 'qwer', '0723145890'
);

insert into users values (26, 'Andrei', 'Gula', 'andrei.gula@gmail.com', 'mare', '0723100000'
);
insert into users values (27, 'Florin', 'Borcan', 'florin.borcan@gmail.com', 'viop', '0723121110'
);
insert into users values (28, 'Andrei', 'Stanciu', 'andrei.stanciu@gmail.com', 'asdas', '0723454690'
);
insert into users values (29, 'Denisa', 'Olariu', 'denisa.olariu@gmail.com', 'carte', '0725858890'
);

insert into users values (30, 'Alina', 'Bilic', 'alina.bilic@gmail.com', 'bila', '0723145450'
);

insert into users values (31, 'Alin', 'Croitor', 'alin.croitor@gmail.com', 'asd', '0723154890'
);
insert into users values (32, 'Maria', 'Pop', 'maria.pop@gmail.com', 'bine', '0723000890'
);
insert into users values (33, 'Mara', 'Popescu', 'mara.popescu@gmail.com', 'grai', '0723123210'
);
insert into users values (34, 'Maria', 'Gaitan', 'maria.gaitan@gmail.com', 'qwerefds', '0721237890'
);

insert into users values (35, 'Alina', 'Butuc', 'alina.butuc@gmail.com', 'buta', '0723877690'
);
insert into users values (36, 'Vasile', 'Bondar', 'vasile.bondar@gmail.com', 'albina', '0776341890'
);
insert into users values (37, 'Tudor', 'Spoiala', 'tudor.spoiala@gmail.com', 'pol', '0721456890'
);

insert into users values (38, 'Cipri', 'Croitor', 'cipri.croitor@gmail.com', 'soim', '0721234890'
);

insert into users values (39, 'Ilie', 'Gaitan', 'ilie.gaitan@gmail.com', 'gaita', '0721956890'
);

insert into users values (40, 'Dani', 'Mocanu', 'dani.mocanu@gmail.com', 'bani', '0721400090'
);
