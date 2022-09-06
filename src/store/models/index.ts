export interface IUser{
    
}


export interface IPole{
    idPole: number,
    name: string,
    size: string,
    price: number,
    photos: [
        {
            idPhoto: number,
            url: string,
            desc: string
        },
        {
            idPhoto: number,
            url: string,
            desc: ""
        },
        {
            idPhoto: number,
            url: string,
            desc: string
        }
    ],
    club: {
        idClub: number,
        clubName: string,
        adres: string
    }
}