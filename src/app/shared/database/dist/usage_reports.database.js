"use strict";
exports.__esModule = true;
exports.REPORTS = void 0;
exports.REPORTS = [
    {
        id: 123,
        name: 'Xbox update',
        description: '20 Gb Rendszerfrissítés',
        effectiveDate: '2020-05-20',
        href: 'https://www.xbox.com',
        dataConsumption: 20,
        imageResource: 'data:image/png;base64,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'
    },
    {
        id: 343,
        name: 'Windows update',
        description: '14 Gb Rendszerfrissítés',
        effectiveDate: '2020-05-20',
        href: 'https://www.microsoft.com',
        dataConsumption: 14,
        imageResource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1200px-Windows_logo_-_2012.svg.png'
    },
    {
        id: 233,
        name: 'Black Ops Cold War',
        description: '2.4 K/D ratio',
        effectiveDate: '2020-05-22',
        href: 'https://www.battlenet.com',
        dataConsumption: 19,
        imageResource: 'https://store-images.s-microsoft.com/image/apps.25992.14107985044965209.e8fed65f-093d-40d1-849f-6c564d2ad876.89955624-8043-4f20-8620-4381e11a3546'
    },
    {
        id: 255,
        name: 'Letöltés',
        description: '4 filmet töltöttem le',
        effectiveDate: '2020-05-16',
        href: 'https://www.ncore.cc',
        dataConsumption: 15,
        imageResource: 'https://techcentral.co.za/wp-content/uploads/2017/06/the-pirate-bay-2156-1120.jpg'
    },
    {
        id: 267,
        name: 'Letöltés',
        description: '12 filmet töltöttem le',
        effectiveDate: '2020-05-12',
        href: 'https://www.ncore.cc',
        dataConsumption: 27
    }
];
