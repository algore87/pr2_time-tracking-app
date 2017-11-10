export class Task {
    _id: number;
    title: string;
    description: string;
    active = false;
    started_at: Date;
    stopped_at: Date;
    created_at: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    public get id(): number {
        return this._id;
    }

}
