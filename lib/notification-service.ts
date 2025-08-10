import { AppConfig } from "@/types/config";

export interface NotificationData {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

export interface RateChange {
  action: string;
  title: string;
  icon?: string;
}

export class NotificationService {
  //Solicitar permiso para mostrar notificacions
  static async requestPermission(): Promise<boolean> {
    if (!("Notification" in window)) {
      console.warn("This browser can´t support notifications");
      return false;
    }
    if (Notification.permission === "granted") {
      return true;
    }
    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    }
    return false;
  }

  //Mostrar notificaciones
  static async showNotification(data: NotificationData): Promise<boolean> {
    const hashPermission = await this.requestPermission();

    if (!hashPermission) {
      console.warn("Not permiss for show notification");
      return false;
    }

    try {
      //Si el Service Worker esta registrado, usar notificaciones push
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(data.title, {
          body: data.body,
          icon: data.icon || "/icons/icon-192x192.png", //Estos iconos son solo como ejemplo
          badge: data.badge || "/icons/badge-72x72.png",
          data: data.data,
          //vibrate: [200, 100, 200],
          tag: data.tag || "tasas-cuba-notification",
          // renotify: true,             //Revisar como incluir las propiedades comentadas
          //actions: data.actions,
          requireInteraction: true,
        } as any);
        return true;
      } else {
        //Fallback a notificaciones normales
        new Notification(data.title, {
          body: data.body,
          icon: data.icon || "/icons/icon-192x192.png",
          badge: data.badge || "/icons/badge-72x72.png",
          tag: data.tag || "tasas-cuba-notification",
        });
        return true;
      }
    } catch (err) {
      console.error("Error to show notifications:", err);
      return false;
    }
  }
}
