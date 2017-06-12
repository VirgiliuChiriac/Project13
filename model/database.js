module.exports = function() { 
    this.message = function(message) { 
        return message;
    };

    this.filters = function(res) {

        var message = [];

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
            "SELECT unique oras FROM produs order by oras asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/

                message.push(result.rows);
            

                connection.execute(
                "SELECT unique tip FROM produs order by tip asc",

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
                    /*connection.close(
                        function(err) {
                        if (err) {
                            console.error(err.message);
                        }
                    });*/

                    message.push(result.rows);

                    connection.execute(
            "SELECT unique achizitie FROM produs order by achizitie asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT nr_camere FROM produs order by nr_camere asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT unique nr_bai FROM produs order by nr_bai asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT unique confort FROM produs order by confort asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT unique etaj FROM produs order by etaj asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT unique clasificare FROM produs order by clasificare asc",

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
                /*connection.close(
                    function(err) {
                    if (err) {
                        console.error(err.message);
                    }
                });*/
                message.push(result.rows);
                connection.execute(
            "SELECT unique tip_agric FROM produs order by tip_agric asc",

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
                message.push(result.rows);
                res.send(message);
            });
            });
            });
            });
        });
        });
        });
                });
            });
        });
    };

    this.search = function(res,oras,tip,achiz,nr_cam,nr_bai,conf,etaj,clasif,tip_agr) {

        var str = " "; var ok = 0;

        if(oras != "all"){
            if(ok==0){
                str += " where ";
            }
            str += "oras = '" + oras + "'";
            ok = 1;
        }

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
            "SELECT * FROM produs " + str,

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

    this.login = function(res,user,pass){
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
            "login( " + user + "," + pass + ")",

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
}