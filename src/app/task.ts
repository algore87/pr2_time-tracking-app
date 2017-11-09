export class Task {
    id: number;
    title = '';
    description = '';
    active = false;
    started_at: Date;
    stopped_at: Date;
    created_at: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
