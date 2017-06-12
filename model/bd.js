module.exports = function() { 

    ////////// start cu inde

    this.searchBD = function(res,pret,tip,achiz,nr_cam,nr_bai,conf,etaj,clasif,tip_agr) {

        var str = " "; var ok = 0;

        if(tip != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "tip = '" + tip + "'";
            ok = 1;
        }

        if(achiz != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "achizitie = '" + achiz + "'";
            ok = 1;
        }

        if(nr_cam != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "nr_camere = '" + nr_cam + "'";
            ok = 1;
        }


        if(nr_bai != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "nr_bai = '" + nr_bai + "'";
            ok = 1;
        }

        if(conf != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "confort = '" + conf + "'";
            ok = 1;
        }

        if(etaj != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "etaj = '" + etaj + "'";
            ok = 1;
        }

        if(clasif != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "clasificare = '" + clasif + "'";
            ok = 1;
        }

        if(tip_agr != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "tip_agric = '" + tip_agr + "'";
            ok = 1;
        }

        if(pret=="asc"){
                str += "order by pret asc ";
            } else {
                str += "order by pret desc ";
            }

        var oracledb = require('oracledb');
        var dbConfig = require('./dbconfig.js');

        // Get a non-pooled connection
        oracledb.getConnection(
        {
            user          : dbConfig.user,
            password      : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection)
        {
            if (err) {
                console.error(err.message);
                return;
            }

        connection.execute(
            "SELECT count(*) FROM InfoProdus i join ExtraInfoProdus e on i.id_produs = e.id_produs " + str,

            function(err, result)
            {
                if (err) {
                    console.error(err.message);
                    connection.close(
                        function(err) {
                        if (err) {
                            console.error(err.message);
                        }
                    });
                    return;
                }
                console.log(result.rows);
                connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });
                res.send(result.rows);
            });
        });
    }
    
    /////// END fara index


    ////////// start cu index
    
    this.searchBDindex = function(res,pret,tip,achiz,nr_cam,nr_bai,conf,etaj,clasif,tip_agr) {

        var str = " "; var ok = 0;

        if(tip != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "tip = '" + tip + "'";
            ok = 1;
        }

        if(achiz != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "achizitie = '" + achiz + "'";
            ok = 1;
        }

        if(nr_cam != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "nr_camere = '" + nr_cam + "'";
            ok = 1;
        }


        if(nr_bai != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "nr_bai = '" + nr_bai + "'";
            ok = 1;
        }

        if(conf != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "confort = '" + conf + "'";
            ok = 1;
        }

        if(etaj != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "etaj = '" + etaj + "'";
            ok = 1;
        }

        if(clasif != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "clasificare = '" + clasif + "'";
            ok = 1;
        }

        if(tip_agr != "all"){
            if(ok==0){
                str += " where ";
            }
            if(ok != 0){
                str+=" and ";
            }
            str += "tip_agric = '" + tip_agr + "'";
            ok = 1;
        }

        if(pret=="asc"){
                str += "order by pret asc ";
            } else {
                str += "order by pret desc ";
            }

        var oracledb = require('oracledb');
        var dbConfig = require('./dbconfig.js');

        // Get a non-pooled connection
        oracledb.getConnection(
        {
            user          : dbConfig.user,
            password      : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection)
        {
            if (err) {
                console.error(err.message);
                return;
            }

        connection.execute(
            "SELECT count(*) FROM InfoProdus_index i join ExtraInfoProdus_index e on i.id_produs = e.id_produs " + str,

            function(err, result)
            {
                if (err) {
                    console.error(err.message);
                    connection.close(
                        function(err) {
                        if (err) {
                            console.error(err.message);
                        }
                    });
                    return;
                }
                console.log(result.rows);
                connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });
                res.send(result.rows);
            });
        });
    }
    
    /////// END cu index
}