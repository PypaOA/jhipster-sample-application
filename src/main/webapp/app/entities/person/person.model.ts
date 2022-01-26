import { State } from 'app/entities/enumerations/state.model';

export interface IPerson {
  id?: number;
  firstName?: string | null;
  surName?: string | null;
  state?: State | null;
}

export class Person implements IPerson {
  constructor(public id?: number, public firstName?: string | null, public surName?: string | null, public state?: State | null) {}
}

export function getPersonIdentifier(person: IPerson): number | undefined {
  return person.id;
}
