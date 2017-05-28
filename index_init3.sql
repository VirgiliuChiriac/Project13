drop table InfoProdus_index cascade constraints;
CREATE TABLE InfoProdus_index(
  id_produs integer,
  id_user integer,
  tip VARCHAR2(50),
  achizitie VARCHAR2(50),
  pret INT,
  suprf_utila VARCHAR2(20),
  PRIMARY KEY (id_produs)
);
/
drop table ExtraInfoProdus_index cascade constraints;
CREATE TABLE ExtraInfoProdus_index(
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
  FOREIGN KEY (id_produs) REFERENCES InfoProdus_index(id_produs)
);
/
declare
  v_id  integer := 1;
  v_id_user integer;
  v_tip varchar2(50);
  v_achizitie varchar2(50);
  v_pret integer;
  v_suprf_utila integer;
begin
  while (v_id <= 3500000) loop
      v_id_user := trunc(dbms_random.value(1,100));
      v_pret := trunc(dbms_random.value(30000,100000));
      v_suprf_utila := trunc(dbms_random.value(30,180));
      
      if(v_id < 1500000) then
        v_tip := 'Apartament/Garsoniera';
      elsif(v_id >= 1500000 and v_id < 2500000) then
        v_tip := 'Casa/Vila';
      elsif(v_id >= 2500000 and v_id < 3000000) then
        v_tip := 'Teren de constructii';
      elsif(v_id >=3000000 and v_id <= 3500000) then
        v_tip := 'Teren agricol';
      end if;
      
      if(v_id < 750000) then
        v_achizitie := 'Inchiriere';
      elsif(v_id >= 750000 and v_id < 2000000) then
        v_achizitie := 'Vanzare';
      elsif(v_id >= 2000000 and v_id < 2500000) then
        v_achizitie := 'Inchiriere';
      elsif(v_id >= 2500000  and v_id < 2750000) then
        v_achizitie := 'Vanzare';
      elsif(v_id >= 2750000  and v_id < 3250000) then
        v_achizitie := 'Inchiriere';
      elsif(v_id >= 3250000 and v_id <= 3500000) then
        v_achizitie := 'Vanzare';
      end if; 
      
      INSERT INTO InfoProdus_index(id_produs, id_user, tip, achizitie, pret, suprf_utila) values (v_id, v_id_user, v_tip, v_achizitie, v_pret, v_suprf_utila);
      v_id := v_id +1;
  end loop;
commit;
end; 
/
declare
  v_id_extra integer;
  v_id_produs integer;
  v_nr_camere integer;
  v_nr_bai integer;
  v_descriere VARCHAR2(1000);
  v_confort integer;
  v_vechime integer;
  v_niveluri_imobil integer;
  v_etaj integer;
  v_tip_teren VARCHAR2(20);
  v_clasificare VARCHAR2(20);
  v_coordonata_lat VARCHAR2(20);
  v_coordonata_long VARCHAR2(20);
begin
  v_id_extra := 1;
  v_id_produs := 1;
  
  while (v_id_extra <= 3500000) loop
      v_descriere := DBMS_RANDOM.STRING('L', 20);
      
      if(v_id_extra < 2500000) then
        v_nr_camere := trunc(dbms_random.value(1,6));
        v_nr_bai := trunc(dbms_random.value(1,3));
        v_confort := trunc(dbms_random.value(1,5));
        v_vechime := trunc(dbms_random.value(1,30));
        v_tip_teren := null;
        v_niveluri_imobil := null;
        v_etaj := null;
      end if;
      
      if(v_id_extra <= 1500000) then
        v_niveluri_imobil := trunc(dbms_random.value(0,30));
        v_etaj := trunc(dbms_random.value(0,30));
      end if;
      
      if(v_id_extra >= 2500000 and v_id_extra < 2750000) then
        v_nr_camere := null;
        v_nr_bai := null;
        v_confort := null;
        v_vechime := null;
        v_tip_teren := null;
        v_clasificare := 'Intravilan';
        v_niveluri_imobil := null;
        v_etaj := null;
      end if;
      
      if(v_id_extra >= 27500000 and v_id_extra < 3000000) then
        v_nr_camere := null;
        v_nr_bai := null;
        v_confort := null;
        v_vechime := null;
        v_tip_teren := null;
        v_clasificare := 'Extravilan';
        v_niveluri_imobil := null;
        v_etaj := null;
      end if;
      
      if(v_id_extra >= 3000000 and v_id_extra < 3250000) then
        v_nr_camere := null;
        v_nr_bai := null;
        v_confort := null;
        v_vechime := null;
        v_clasificare := 'Extravilan';
        v_tip_teren := 'Livada';
        v_niveluri_imobil := null;
        v_etaj := null;
      end if;
      
      if(v_id_extra >= 3250000and v_id_extra <= 3500000) then
        v_nr_camere := null;
        v_nr_bai := null;
        v_confort := null;
        v_vechime := null;
        v_clasificare := 'Intravilan';
        v_tip_teren := 'Teren Arabil';
        v_niveluri_imobil := null;
        v_etaj := null;
      end if;      
      
      
      INSERT INTO ExtraInfoProdus_index(id_extra, id_produs, nr_camere, nr_bai, descriere, confort, vechime, niveluri_imobil, etaj, tip_teren) values (v_id_extra, v_id_produs, v_nr_camere, v_nr_bai, v_descriere, v_confort, v_vechime, v_niveluri_imobil, v_etaj, v_tip_teren);
      v_id_extra := v_id_extra + 1;
      v_id_produs := v_id_produs + 1;
  end loop;
commit;
end; 
/
