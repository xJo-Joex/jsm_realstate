import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import noresult from '../assets/images/noresult.svg';

export default function NoResult() {
	return (
		<Flex
			h="90vh"
			justifyContent="center"
			alignItems="center"
			flexDirection="coloumn"
			marginTop="5"
			marginBottom="5"
		>
			<Image src={noresult} alt="no result" />
			<Text fontSize="2x1" marginTop="3" fontWeight="bold">
				No Results Found
			</Text>
		</Flex>
	);
}
