// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.astro_astroGr = function(runtime) {
    this.runtime = runtime;
};

(function() {
    var pluginProto = cr.plugins_.astro_astroGr.prototype;

    /////////////////////////////////////
    // Object type class
    pluginProto.Type = function(plugin) {
        this.plugin = plugin;
        this.runtime = plugin.runtime;
    };

    var typeProto = pluginProto.Type.prototype;

    typeProto.onCreate = function() {};

    /////////////////////////////////////
    // Instance class
    pluginProto.Instance = function(type) {
        this.type = type;
        this.runtime = type.runtime;
    };

    var instanceProto = pluginProto.Instance.prototype;

    instanceProto.onCreate = function() {};

    instanceProto.onDestroy = function() {};
    //////////////////////////////////////
    // Conditions
    function Cnds() {};
    pluginProto.cnds = new Cnds();

    Cnds.prototype.NOOP = function() {
        return true;
    };

    Cnds.prototype.checkElementExist = function(Vjson, key, cmn0, cmn1, cmn2, cmn3) {

        if (Vjson != "" || Vjson != null || key != "" || key != null) {
            let thisJSON = JSON.parse(Vjson);
            let endJson = null;

            if (cmn3 != "") {
                endJson = thisJSON[cmn0][cmn1][cmn2][cmn3];
            } else if (cmn2 != "") {
                endJson = thisJSON[cmn0][cmn1][cmn2];
            } else if (cmn1 != "") {
                endJson = thisJSON[cmn0][cmn1];
            } else if (cmn0 != "") {
                endJson = thisJSON[cmn0];
            } else {
                endJson = JSON.parse(Vjson);
            }

            if (key in endJson) { /** will return true if exist */
                return true;
            }
        }
    };
    //////////////////////////////////////
    // Actions
    function Acts() {};
    pluginProto.acts = new Acts();

    Acts.prototype.NOOP = function() {
        return true;
    };

    Acts.prototype.gameFocusPause = function(onoff) {
        if (onoff === 1) {
            cr_setSuspended = function() {};
        } else {
            cr_setSuspended = function(s) {
                var runtime = window["cr_getC2Runtime"]();

                if (runtime)
                    runtime["setSuspended"](s);
            };
        }
    }

    Acts.prototype.createNotification = function(title, boby, icon, silent) {
        var mSilen = false;

        if (silent === 0) {
            mSilen = false;
        } else {
            mSilen = true;
        }

        function spawnNotification(corpo, icone, titulo, silencioso) {
            var opcoes = {
                body: corpo,
                icon: icone,
                silent: mSilen
            }
            var n = new Notification(titulo, opcoes);
        }

        spawnNotification(boby, icon, title, mSilen);
    };

    //////////////////////////////////////
    // Expressions
    function Exps() {};
    pluginProto.exps = new Exps();

    Exps.prototype.dateCompleted = function(ret) {
        ret.set_string(document.lastModified);
    }
}());