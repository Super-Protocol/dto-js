export type EnrollRequest = {
    teeDeviceId: string;
    isRenewKeys: boolean;
}

export type EnrollResponse = {
    nodeName: string;
    deviceId?: string;
    tlbBlob?: Buffer;
    keysBlob?: Buffer;
    pubKeyBlob?: Buffer;
    meta?: string;
}

export type GetInfoResponse = {
    nodeName: string;
    deviceId: string;
    tlb: Buffer;
    publicKey: Buffer;
    meta: string;
}
