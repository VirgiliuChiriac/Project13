create or replace trigger try1 after delete on extrainfoprodus
begin
  if deleting then
    delete from infoprodus where id_produs in(select id_produs from extrainfoprodus);
  end if;
end;
/