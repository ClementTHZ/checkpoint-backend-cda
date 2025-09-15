import { Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: number

    @Column({nullable: true})
    @Field()
    countryCode!: string

    @Column()
    @Field()
    name!: string

    @Column()
    @Field()
    emote!: string

    @Column({nullable: true})
    @Field()
    continentCode!: string
}; 

@InputType()
export class CountryInput {
    @Field()
    name!: string

    @Field()
    emote!: string

    @Field({nullable: true})
    countryCode!: string

    @Field({ nullable: true})
    continentCode!: string

}

export default Country; 
