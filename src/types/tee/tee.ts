export type EnrollRequest = {
    teeDeviceId: string;
    isRenewKeys: boolean;
}

export type EnrollResponse = {
    nodeName?: string;
    deviceId?: string;
    tlb?: Buffer;
    keys?: Buffer;
    pubKey?: Buffer;
    meta?: string;
}
