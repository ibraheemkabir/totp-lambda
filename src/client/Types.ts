
export interface TotpSeed {
    userId: string;
    secret: string;
    qrCode: string;
    totpUrl: string;
    createdAt: number;
}

export interface NewSeedRequest {
    userId: string;
    label: string;
    qrCodeSize?: number;
}

export interface NewSeedResult {
    seed: TotpSeed;
    error?: string;
}

export interface VerifyTokenRequest {
    userId: string;
    token: string;
}

export interface VerifyTokenResult {
    verified: boolean;
    error?: string;
}

