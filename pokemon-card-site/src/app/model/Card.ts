export interface Card{
    name: string;
    hp: string;
    id: string;
    nationalPokedexNumber: number;
    imageUrl: string;

    imageUrlHiRes: string;

    ability: IAbility;
    artist: string;
    attacks: IAttack[];
    convertedRetreatCost: number;
    evolvesFrom: string;
    number: string;
    rarity: string;
    resistances: IResistance[];
    retreatCost: string[];
    series: string;
    set: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[];
    weaknesses: IWeakness[];

}

export interface ResultCards{
    cards:Card[];
}

export interface IAbility{
      name: string;
      text: string;
      type: string;
 }

 export interface IAttack{
      cost: string[];
      name: string;
      text: string;
      damage: string;
      convertedEnergyCost: string;
 }

 export interface IResistance {
      type: string;
      value: string;
 }

 export interface IWeakness{
      type: string;
      value: string;

 }