/* tslint:disable */

declare var Object: any;
export interface StatisticsInterface {
  text: string;
  dueAt: Date;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Statistics implements StatisticsInterface {
  text: string;
  dueAt: Date;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: StatisticsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Statistics`.
   */
  public static getModelName() {
    return "Statistics";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Statistics for dynamic purposes.
  **/
  public static factory(data: StatisticsInterface): Statistics{
    return new Statistics(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Statistics',
      plural: 'Statistics',
      properties: {
        text: {
          name: 'text',
          type: 'string'
        },
        dueAt: {
          name: 'dueAt',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
