import { Box, Divider, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import ExtensionsEditModal from './ExtensionsEditModal/ExtensionsEditModal';

interface TableData {
    agentName?: string;
    role?: string;
    extension?: string;
}

interface ExtensionsTableProps {
    data: TableData[];
}

const ExtensionsTable: React.FC<ExtensionsTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");
    const {
        isOpen: isExtensionsEditModallOpen,
        onOpen: onExtensionsEditModallOpen,
        onClose: isExtensionsEditModallClose
    } = useDisclosure();
    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead>
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Agent Name</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Role</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Extension</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Edit</Th>
                    </Tr>
                </Thead>
                <Divider w={'100%'} />
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "gray.50"}>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.agentName}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.role}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.extension}</Td>
                            <Td px={4} py={2} color={'#73C2FB'} onClick={onExtensionsEditModallOpen}>
                                <FaEdit cursor="pointer" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <ExtensionsEditModal
                isOpen={isExtensionsEditModallOpen}
                onClose={isExtensionsEditModallClose}
            />
        </Box>
    );
};

export default ExtensionsTable;
