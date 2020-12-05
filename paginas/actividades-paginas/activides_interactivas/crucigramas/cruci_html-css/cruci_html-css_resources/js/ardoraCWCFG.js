//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lfaHRtbC1jc3M"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","QQ","VA","Ug","SQ","Qg","VQ","VA","Tw","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Tw","Og","Og","Og","Og","SA","VA","TQ","TA","Og"],["Og","Og","SA","RQ","QQ","RA","Og","Og","Tg","Og","Og","Og","QQ","Og","Og"],["Og","Og","RQ","Og","Og","WQ","Og","Og","QQ","Og","Og","Og","Ug","Og","Og"],["Og","Og","QQ","Og","RQ","Og","Og","Og","Vg","Og","Og","Og","Rw","Og","Rg"],["Og","RQ","RA","SQ","VA","Tw","Ug","RA","RQ","Qw","Tw","RA","SQ","Rw","Tw"],["Og","Og","RQ","Og","SQ","Og","Og","Og","Rw","Og","Og","Og","Tg","Og","Tw"],["Og","Og","Ug","Og","UQ","Og","Og","Tg","QQ","Vg","Og","Qw","Og","Og","VA"],["Og","Og","Og","Og","VQ","Og","Og","Og","RA","Og","QQ","Uw","SQ","RA","RQ"],["Og","Og","Og","Og","RQ","Og","Og","Og","Tw","Og","Og","Uw","Og","Og","Ug"],["Rg","TA","Tw","QQ","VA","Og","Og","Og","Ug","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","QQ","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"]];
var x1=[2,11,3,2,8,11,1,6,13,3,9,15,12,5];
var y1=[2,3,4,7,9,10,12,2,3,4,4,6,9,6];
var x2=[9,14,6,15,10,15,5,6,13,3,9,15,12,5];
var y2=[2,3,4,7,9,10,12,5,8,9,12,11,11,13];
var imaCW=["","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","",""];
var defCW=["Son valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas para cumplir los criterios de los usuarios","Lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet","Elemento que provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos","Es un editor de texto diseñado específicamente para editar el código fuente de programas informáticos","Representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos","Representa una sección de una página que consiste en contenido que está indirectamente relacionado con el contenido principal del documento","Propiedad que especifica si un elemento debe salir del flujo normal y aparecer a la izquierda o a la derecha de su contenedor","Elemento que representa el contenido de un documento HTML","Es el área fuera del borde. El margen es transparente y es útil para separar el elemento de sus vecinos","Elemento que provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos","Es un software que permite el acceso a la Web, interpretando la información de distintos tipos de sitios web para que estos puedan ser vistos","Representa un pie de página para el contenido de sección más cercano o el elemento  raíz de sección","Lenguaje de hoja de estilo utilizado para describir la presentación de un documento escrito en un lenguaje de marcado como HTML","Es una marca con clase que delimita una región en los lenguajes basados en XML"];
var colNum=15;
var rowNum=13;
