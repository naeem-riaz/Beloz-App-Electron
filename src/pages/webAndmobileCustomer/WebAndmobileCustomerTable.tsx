
import { Box, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface TableData {
    accessCode?: string;
    customerName?: string;
}

interface WebAndmobileCustomerTableProps {
    data: TableData[];
}

const WebAndmobileCustomerTable: React.FC<WebAndmobileCustomerTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");
    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead>
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Access Code</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Customer Name</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "#EEF4FB"}>
                            <Td px={4} py={2} fontSize="sm" color={'#73C2FB'}>{item.accessCode}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.customerName}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default WebAndmobileCustomerTable;
