export type ThemeMode = "light" | "dark" | "default" | "system";
export type NotificationFrecuency = "hourly" | "6hours" | "daily" | "never";
export type NotificationType = "major" | "all" | "up" | "down";

export interface CurrencyNotificationSettings {
  enable: boolean;
  threshold: number; // Porcentaje de cambio para notificar
}

export interface PrivacySettingsType {
  saveHistory: boolean;
  saveOfflineData: boolean;
}

export interface AppConfig {
  theme: ThemeMode;
  notifications: NotificationSettings; // Debo usar una iterface dedicada para esto
  privacy: PrivacySettingsType;
  lastUpdate: string; // ISO date string
}

export interface NotificationSettings {
  enabled: boolean;
  frequency: NotificationFrecuency;
  type: NotificationType;
  quietHoursEnabled: boolean;
  quietHoursStart: string; // Formato "HH:MM"
  quietHoursEnd: string; // Formato "HH:MM"
}

export const DEFAULT_CONFIG: AppConfig = {
  theme: "system",
  notifications: "Hola",
  privacy: {
    saveHistory: true,
    saveOfflineData: true,
  },
  lastUpdate: new Date().toISOString(),
};
