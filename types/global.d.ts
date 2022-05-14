declare global {
  type Employee = {
    id?: string | number;
    name: string;
    document: string;
    bankAndAgency: string;
    bankAccount: string;
    salary: string;
  }

  type Bank = {
    id?: string;
    agency: string;
    account: string;
    name: string;
  }
}

export {}