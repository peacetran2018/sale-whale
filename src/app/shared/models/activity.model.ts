export class Activity{
    id: number;
    person: Person;
    action: string;
    target: string;
    created_at: string;
}

class Person{
    id: number;
    name: string;
    avatar: string;
}