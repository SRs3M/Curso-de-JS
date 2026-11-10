/**
 * Nombre: ancho · alto
 * 8K   7680 x 4320
 * 4K   3040 x 2160
 * WQHD 2560 x 1440
 * FHD  1920 x 1080
 * HD   1280 x 720
 */

function nombreResolucion(ancho, alto) {
        if(ancho >= 1280 || alto >= 720) {
            return "HD";
        } else if(ancho >= 1920 && alto >= 1080) {
            return "FHD";
        } else if(ancho >= 2560 && alto >= 1440) {
            return "WQHD";
        } else if(ancho >= 3040 && alto >= 2160) {
            return "4K";
        } else if(ancho >= 7680 && alto >= 4320) {
            return "8K";
        } else if(ancho >= 13000 && alto >= 7000) {
            return "HDFHDWQHD4K8K16K32K64K128K256K512K1024K2048K4096K8192K16192KHDHDHDHDHDHD++++++++++"
        } else {
            return false;
        }
}

let nombre = nombreResolucion(1336, 768);
console.log(nombre);