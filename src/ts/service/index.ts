import PushManager from '../class/PushManager';
import HomeScreenManager from '../class/HomeScreenManager';
import Translator from '../class/Translator';
import PwaManager from "../class/PwaManager";
import Debug from "../class/Debug";

export const pwaManager = new PwaManager();
export const homeScreenManager = new HomeScreenManager();
export const pushManager = new PushManager();
export const translator = new Translator();
export const debug = new Debug();
