
import { Box, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface TableData {
    agentId?: string;
    agentFullName?: string;
}

interface WebAndMobileTimesheetTableProps {
    data: TableData[];
}

const WebAndMobileTimesheetTable: React.FC<WebAndMobileTimesheetTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");
    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead>
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent ID</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent Full Name</Th>
                    </Tr>
                </Thead>
                {/* <Divider w={'100%'} /> */}
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "#EEF4FB"}>
                            <Td px={4} py={2} fontSize="sm" color={'#73C2FB'}>{item.agentId}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.agentFullName}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default WebAndMobileTimesheetTable;
