import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType()
@Entity()
export default class Country {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;
  @Field({ nullable: true })
  @Column()
  code: string;
  @Field({ nullable: true })
  @Column()
  name: string;
  @Field({ nullable: true })
  @Column()
  emoji: string;
  @Column()
  @Field()
  continent: string;
}

@InputType()
export class CountryInput implements Omit<Country, "id"> {
  @Field({ nullable: true })
  @Column()
  code: string;
  @Field({ nullable: true })
  @Column()
  name: string;
  @Field({ nullable: true })
  @Column()
  emoji: string;
  @Field()
  continent: string;
}
