export type ExampleServiceData = {
  id: number;
  name: string;
  email: string;
};
export type ExampleServiceResponse = {
  data: ExampleData;
};

export interface ExampleData {
  name: string;
}
