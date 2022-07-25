import { HStack, Text } from 'native-base';

export type OrderProps = {
  id: string;
  when: string;
  patrimony: string;
  status: 'open' | 'closed';
}

type Props = {
  data: OrderProps;
}

export function Order({data, ...rest}: Props) {
  return (
    <HStack>
      <Text color="white" fontSize="md">
        Património {data.patrimony}
      
      </Text>
      </HStack>
  );
}