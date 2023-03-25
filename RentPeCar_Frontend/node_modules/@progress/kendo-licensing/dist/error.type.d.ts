export declare const enum ErrorType {
    NoLicenseFound = 0,
    ProductNotLicensed = 1,
    OutdatedLicense = 2
}
export interface NoLicenseFoundError {
    type: ErrorType.NoLicenseFound;
    packageName: string;
    docsUrl: string;
}
export interface ProductNotLicensedError {
    type: ErrorType.ProductNotLicensed;
    packageName: string;
    docsUrl: string;
}
export interface OutdatedLicenseError {
    type: ErrorType.OutdatedLicense;
    packageName: string;
    publishDate: Date;
    expiryDate: Date;
    docsUrl: string;
}
export type Error = NoLicenseFoundError | ProductNotLicensedError | OutdatedLicenseError;
