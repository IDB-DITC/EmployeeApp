export class Employee {

  empId: number = 0;
  empName: string = '';
  address: string = '';


  constructor(id:number, name:string, address:string) {
    this.empId = id;
    this.empName = name;
    this.address = address;
  }

  validate(): boolean {
    if (this.empName.length < 5) {
      return false;
    }
     


    return true;
  }




}
