export class User {
    _id: string;
    email: string;
    name: string;
}
export class Project {
    _id: string;
    projectName: string;
    description: string;
    estimatedTime: string;
    employeeIde: string;
}
export class LogTime {
    _id: string;
    date: any;
    timeLogged: string;
    projectId: string;
    employeeIde: string;
}