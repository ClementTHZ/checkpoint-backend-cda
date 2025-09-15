import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import Country, { CountryInput } from "../entities/Country";

@Resolver(Country)
export default class CountryResolver{
    @Query(() => [Country])
    async getAllCountries(){
        const allCountries = await Country.find({
            select: ["name", "countryCode", "emote"]
        }); 
        return allCountries; 
    }; 

    @Query(() => Country)
    async getCountryByCode(@Arg("code") countryCode: string){
        const country = Country.findOneByOrFail({countryCode});
        return country; 
    }; 

    @Query(() => [Country])
    async getCountriesByContinent(@Arg("continentCode") continentCode: string){
        const  countriesByContinent = Country.find({
            where: { continentCode: continentCode}
        });
        return countriesByContinent; 
    }; 

    @Mutation(() => String)
    async createCountry(@Arg("data") data: CountryInput){
        const country = Country.create({
        name: data.name, 
        countryCode: data.countryCode, 
        continentCode: data.continentCode,
        emote: data.emote 
        });
        await country.save(); 
        return `the country ${country.name} has been created !`
    }; 

    @Mutation(() => ID)
    async deleteCountry(@Arg("id") id: number){
        await Country.delete({id}); 
        return id; 
    }; 
}; 