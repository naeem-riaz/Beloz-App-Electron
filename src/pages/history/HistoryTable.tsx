import { Box, Divider, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

// Updated TableData interface with new fields
interface TableData {
    requester?: string;
    language?: string;
    dateTime?: string;
    callStart?: string;
    callEnd?: string;
    duration?: string;
    location?: string;
    totalTimeForSession?: string;
    status?: string;
    reason?: string;
    amount?: string;
    interpreter?: string;
    canceledBy?: string;
}

interface HistoryTableProps {
    data: TableData[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");

    return (
        <>
            <Box overflowX="auto" >
                <Table variant="unstyled">
                    <Thead>
                        <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Requester</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Language</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Date & Time</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Call Start</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Call End</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Duration</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Location</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Total Time For Session</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Status</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Reason</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Amount</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Interpreter</Th>
                            <Th px={3} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor} whiteSpace="nowrap">Canceled By</Th>
                        </Tr>
                    </Thead>
                    <Divider w={'100%'} />
                    <Tbody>
                        {data.map((item, index) => (
                            <Tr key={index} bg={index % 2 === 0 ? "white" : "gray.50"}>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.requester}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.language}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.dateTime}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.callStart}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.callEnd}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.duration}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.location}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.totalTimeForSession}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.status}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.reason}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.amount}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.interpreter}</Td>
                                <Td px={3} py={2} fontSize="sm" color={headerTextColor} whiteSpace="nowrap">{item.canceledBy}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </>

    );
};

export default HistoryTable;
