const PRODUCCION = false;
const EMPRESA = "RSF Financiera";
const VERSION = "1.0.0";
const SISTEMA = PRODUCCION ? "RSF050920LP2" : "RSF050920LPT";
const S2REST = PRODUCCION ? "https://servicios.s2red.net/" : "http://72.32.155.74:6081/";
const TOKEN = PRODUCCION ? "K3KEkyPkyGu5Qi2cUzC0nT5bptpve7lsOIEJ" : "O3QyljAT6jq2DOFIm2QWToILNEeiUkbPSPOJ";
const PERMISOSUSUARIOS = "s2movil/" + SISTEMA + "/permisosusuarios";
const COBRANZA = "s2movil/" + SISTEMA + "/cobranza";
const APIGMAP = "AIzaSyDW5BSvYMs5UlRo_2H9_ZTqcF9cqdnqNtA";

export { APIGMAP, EMPRESA, PERMISOSUSUARIOS, COBRANZA, PRODUCCION, S2REST, SISTEMA, TOKEN, VERSION };