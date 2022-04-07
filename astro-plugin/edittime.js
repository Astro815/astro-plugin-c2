function GetPluginSettings() {
    return {
        "name": "Astro",
        "id": "astro_astroGr",
        "version": "1.1",
        "description": "Configurações extras muitos uteis para seus jogos!",
        "author": "Astro_815.StayForGame",
        "help url": "https://stayforgame.indie.af/",
        "category": "Astro - Geral",
        "type": "object", // not in layout
        "rotatable": false,
        "flags": pf_singleglobal
    };
};

//////////////////////////////////////////////////////////////
// Conditions
//AddStringParam("Comment", "Comment.", '""');
//AddCondition(1, 0, "Add comment", "comment", "<i><b>{0}</b></i>", "Add comment.", "NOOP");

AddStringParam("Json", "Valor JSON que irá checar se existe.", '""');
AddStringParam("Elemento", "Nome do Elemento ou Array que vai checar se existe.", '""');
AddStringParam("Caminho (opcional)", "Escreva o SubElemento utilizando pontos (Exemplo: 'elemento1.element2' é elemento1:{elemento2:'value'}).", '""');
AddStringParam("Caminho1 (opcional)", "Escreva o SubElemento1 utilizando pontos (Exemplo: 'elemento1.element2' é elemento1:{elemento2:'value'}).", '""');
AddStringParam("Caminho2 (opcional)", "Escreva o SubElemento2 utilizando pontos (Exemplo: 'elemento1.element2' é elemento1:{elemento2:'value'}).", '""');
AddStringParam("Caminho3 (opcional)", "Escreva o SubElemento3 utilizando pontos (Exemplo: 'elemento1.element2' é elemento1:{elemento2:'value'}).", '""');
AddCondition(1, 0, "Elemento Existe", "JSON", "Elemento <b>{1}</b> existe em <b>{0}</b>", "Checar se elemento JSON existe.", "checkElementExist");

//////////////////////////////////////////////////////////////
// Actions
AddComboParamOption("Pausar");
AddComboParamOption("Não pausar");
AddComboParam("Quando minimizado", "Sempre quando o jogo ser minimizado ou não aberto, o jogo irá pausar ou não.");
AddAction(1, 0, "Quando o jogo for minimizado", "Sistema", "Jogo minimizado, <b>{0}</b> o jogo.", "Setar se o jogo vai pausar quando for minimizado ou não aberto.", "gameFocusPause");

AddStringParam("Titulo", "Crie uma notificação.", '""');
AddStringParam("Descrição", "Descrição.", '""');
AddStringParam("Icone", "Icone (URL ou Base64).", '""');
AddComboParamOption("Não Silencioso");
AddComboParamOption("Silencioso");
AddComboParam("Modo silencioso", "Sempre quando notificar, ira tocar um som ou não.");
AddAction(2, 0, "Notificar", "Sistema", "Notificar <b>{0}</b>, <i>{1}</i>.", "Crie uma notificação para o usuario saber sobre oque está acontecendo!.", "createNotification");

//////////////////////////////////////////////////////////////
// Expressions

AddExpression(0, ef_return_string, "Horario Completo", "Tempo", "dateCompleted", "Pegue o horarios exato do seu computador.");

ACESDone();

// Property grid properties for this plugin
var property_list = [];

// Called by IDE when a new object type is to be created
function CreateIDEObjectType() {
    return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType() {
    assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance) {
    return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type) {
    assert2(this instanceof arguments.callee, "Constructor called as a function");

    // Save the constructor parameters
    this.instance = instance;
    this.type = type;

    // Set the default property values from the property table
    this.properties = {};

    for (var i = 0; i < property_list.length; i++)
        this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function() {}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name) {}

// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer) {}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function() {}