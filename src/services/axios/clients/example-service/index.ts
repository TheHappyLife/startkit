import type { ExampleServiceData, ExampleServiceResponse } from './type';
import userClientRequest from '../userClientRequest';

export default function exampleService(data: ExampleServiceData): Promise<ExampleServiceResponse> {
  return userClientRequest.get('/example', { params: data });
}
