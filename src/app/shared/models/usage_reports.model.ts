export  interface  usage_reports {
    id: number;
    name: string;
    description?: string;
    effectiveDate: string;
    href: string;
    docId?: string;
    dataConsumption: number;
    firebaseFilename?: string;
    imageResource?: string;
    star?: boolean;
}