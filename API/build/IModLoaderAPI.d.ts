import IMemory from './IMemory';
import { ILobbyManager, INetworkPlayer, INetwork } from './NetworkHandler';
import IUtils from './IUtils';
import ISaveState from './ISaveState';
import { IRomHeader } from './IRomHeader';
import { IGUIAPI } from './GUITunnel';
import { IPayloadManager } from './PayloadType';
export declare const enum ILoggerLevels {
    ALL = "all",
    TRACE = "trace",
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error",
    FATAL = "fatal"
}
export interface ILogger {
    info(...msg: string[]): void;
    error(...msg: string[]): void;
    debug(...msg: string[]): void;
    setLevel(level: ILoggerLevels): void;
}
export interface IConfig {
    data: any;
    file: string;
    setData(category: string, key: string, value: any, override?: boolean): void;
    registerConfigCategory(category: string): object;
    save(): void;
}
export interface IModLoaderAPI {
    logger: ILogger;
    config: IConfig;
    emulator: IMemory;
    lobbyManager: ILobbyManager;
    me: INetworkPlayer;
    clientSide: INetwork;
    serverSide: INetwork;
    clientLobby: string;
    utils: IUtils;
    savestates: ISaveState;
    gui: IGUIAPI;
    payloadManager: IPayloadManager;
}
export interface IPlugin {
    ModLoader: IModLoaderAPI;
    pluginName?: string;
    preinit(): void;
    init(): void;
    postinit(): void;
    onTick(frame?: number): void;
}
export interface ICore {
    header: string;
    ModLoader: IModLoaderAPI;
    rom_header?: IRomHeader;
    preinit(): void;
    init(): void;
    postinit(): void;
    onTick(frame?: number): void;
}
export declare enum ModLoaderEvents {
    ON_ROM_PATH = "ON_ROM_PATH",
    ON_ROM_PATCHED = "ON_ROM_PATCHED",
    ON_ROM_HEADER_PARSED = "ON_ROM_HEADER_PARSED",
    ON_CRASH = "ON_MODLOADER_CRASH"
}