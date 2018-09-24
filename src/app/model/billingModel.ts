export interface billingModel{
    billing:{
        fname:string,
        lname:string,
        email:string,
        company?:string,
        addressA:string,
        addressB?:string,
        city:string,
        state:string,
        pin:number,
        country:string,
        aInfo?:string,
        mobile:number,
        atitle?:string
    }
}