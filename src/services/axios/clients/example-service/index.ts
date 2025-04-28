import userClientRequest from "../userClientRequest";
import { ExampleServiceData, ExampleServiceResponse } from "./type";

export default function exampleService(data: ExampleServiceData): Promise<ExampleServiceResponse> {
  return userClientRequest.get("/example", { params: data });
}
