import db from "@/storage";
import { Keyboard } from "@capacitor/keyboard";
import { StatusBar, Style } from "@capacitor/status-bar";
import { isPlatform, toastController } from "@ionic/vue";
import axios from "axios";
import { useLoading } from "vue-loading-overlay";
import { checkmarkCircleOutline, informationCircle } from "ionicons/icons";
//import "vue3-toastify/dist/index.css";
import { DateTime } from 'luxon';
import { format } from "date-fns";

class Helpers {
  async getIP(): Promise<string> {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  }

  getDate(tipo: number = 4): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const hr = today.getHours();
    const min = today.getMinutes();
    const seg = today.getSeconds();
    const date = yyyy + "-" + mm + "-" + dd + " " + hr + ":" + min + ":" + seg;

    return this.formatoFecha(date, tipo);
  }
  
  formatoFecha(fecha: string, tipo: number) {
    let formato = "";
    if (fecha) {
      if (tipo === 1) {
        formato = format(new Date(fecha), "dd/MM/yyyy HH:mm:ss");
      } else if (tipo === 2) {
        formato = format(new Date(fecha), "dd/MM/yyyy");
      } else if (tipo === 3) {
        formato = format(new Date(fecha), "yyyy-MM-dd");
      } else if (tipo === 4) {
        formato = format(new Date(fecha), "yyyy-MM-dd HH:mm:ss");
      }
    }

    return formato;
  }


  formatoFechaZonaHoraria(fecha: string, tipo: number) {
    const zonaHoraria = "America/Mexico_City"; // Zona horaria deseada
  let formato = "";

  if (fecha) {
    const fechaLocal = DateTime.fromISO(fecha, { zone: zonaHoraria });

    if (tipo === 1) {
      formato = fechaLocal.toFormat("dd/MM/yyyy HH:mm:ss");
    } else if (tipo === 2) {
      formato = fechaLocal.toFormat("dd/MM/yyyy");
    } else if (tipo === 3) {
      formato = fechaLocal.toFormat("yyyy-MM-dd");
    } else if (tipo === 4) {
      formato = fechaLocal.toFormat("yyyy-MM-dd HH:mm:ss");
    }
  }

  return formato;
  }



  formatoMoneda(valor: number) {
    const val = (valor / 1).toFixed(2);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getRandom(length: number, especiales: boolean) {
    let value = "";
    let cadenaBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    cadenaBase += "0123456789";
    if (especiales) {
      cadenaBase += "!@#%&*()_/<>?[]{}|=+";
    }

    const limite = cadenaBase.length - 1;

    for (let i = 0; i < length; i++) {
      const aux = Math.floor(Math.random() * limite);
      value += cadenaBase[aux];
    }
    return value;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async cargarSesion(llaveConexion: string, deviceID: string, username: string, mantenerSesion: boolean) {
    await db.clear();
    await db.set("llaveConexion", llaveConexion);
    await db.set("deviceID", deviceID);
    await db.set("mantenerSesion", mantenerSesion);
    await db.set("username", username);
  }

  checkKeyboard(): boolean {
    let hide = false;

    if (isPlatform("capacitor")) {
      Keyboard.addListener("keyboardDidShow", () => {
        hide = true;
      });

      Keyboard.addListener("keyboardDidHide", () => {
        hide = false;
      });
    }

    return hide;
  }

  checkStatusBarOverlay(overlay: boolean) {
    if (isPlatform("capacitor")) {
      StatusBar.setOverlaysWebView({ overlay: overlay });
    }
  }

  async checkStatusBar(color: string) {
    if (isPlatform("capacitor")) {
      await StatusBar.setStyle({ style: Style.Default });
      await StatusBar.setBackgroundColor({ color: color });
    }
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  getDistanceFromLatLngInKm(lat1: number, lng1: number, lat2: number, lng2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    const dLon = this.deg2rad(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  async toastMessage(mensaje: string, tipo: string, duration = 1550) {
    let icono = "";
    switch (tipo) {
      case "alert":
        icono = informationCircle;
        break;
      case "success":
        icono = checkmarkCircleOutline;
        break;
    }

    const toast = await toastController.create({
      message: mensaje,
      duration: duration,
      icon: icono,
      position: "bottom",
      cssClass: tipo + "-toast",
    });
    toast.present();

  }

  loaderPage() {
    const $loading = useLoading();
    return $loading.show({
      canCancel: false, color: "#f00505", loader: 'spinner',
      width: 64,
      height: 64,
      backgroundColor: '#ffffff',
      opacity: 0.5,
      zIndex: 999,
    });
  }
}

export default new Helpers();