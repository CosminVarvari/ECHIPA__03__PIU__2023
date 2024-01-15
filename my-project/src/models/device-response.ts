export interface Device {
  id: number;
  userId: number;
  name: string;
  description: string;
  address: string;
  maxConsumption: number;
}

export const mockedDevices: Device[] = [
  {
    id: 1,
    userId: 12,
    name: 'Device',
    address: 'string',
    maxConsumption: 123,
    description: 'la dracu',
  },
  {
    id: 1,
    userId: 12,
    name: 'phone',
    address: 'string',
    maxConsumption: 123,
    description: 'la dracu',
  },
  {
    id: 1,
    userId: 12,
    name: 'Device',
    address: 'string',
    maxConsumption: 123,
    description: 'la dracu',
  }
]
