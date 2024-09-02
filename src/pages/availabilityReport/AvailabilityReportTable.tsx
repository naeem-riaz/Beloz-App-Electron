
import { Box, Divider, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface TableData {
    agentId: string;
    agentFullName: string;
    agentType: string;
    available: string;
    pause: string;
    lunch: string;
    break: string;
    techIssue: string;
    offline: string;
}

interface AvailabilityReportTableProps {
    data: TableData[];
}

const AvailabilityReportTable: React.FC<AvailabilityReportTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");
    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead>
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent ID</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent Full Name</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent Type</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Available</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Pause</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Lunch</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Break</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Tech Issue</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Offline</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "#EEF4FB"}>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.agentId}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.agentFullName}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.agentType}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.available}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.pause}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.lunch}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.break}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.techIssue}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.offline}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AvailabilityReportTable;
