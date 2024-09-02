import { Box, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import DeleteModalLayout from '../DeleteModalLayout';
import PriceEditModal from './LanguageAndRateModals/PriceEditModal';

interface TableData {
    language?: string;
    languageGroup?: string;
    normalCallRate?: string;
    emergencyCallRate?: string;
}

interface LanguageAndRateTableProps {
    data: TableData[];
}

const LanguageAndRateTable: React.FC<LanguageAndRateTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");

    const {
        isOpen: isPriceEditModalOpen,
        onOpen: onPriceEditModalOpen,
        onClose: onPriceEditModalClose
    } = useDisclosure();
    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: isDeleteModalClose
    } = useDisclosure();

    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead>
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'}>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Language</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Language Group</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Normal Call Rate <br /> (per minute)</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Emergency Call Rate <br />  (per minute)</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Edit</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Delete</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "#EEF4FB"}>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.language}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.languageGroup}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.normalCallRate}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.emergencyCallRate}</Td>
                            <Td px={4} py={2} color={'#73C2FB'} onClick={onPriceEditModalOpen}>
                                <FaEdit cursor="pointer" />
                            </Td>
                            <Td px={4} py={2} color={"#FF5252"} onClick={onDeleteModalOpen}>
                                <FaTrashAlt cursor="pointer" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <PriceEditModal
                isOpen={isPriceEditModalOpen}
                onClose={onPriceEditModalClose}
            />
            <DeleteModalLayout
                isOpen={isDeleteModalOpen}
                onClose={isDeleteModalClose}
                buttonText='Yes, Delete it'
                heading='Delete Language Confirmation'
                subheading='This will permanently remove the selected language.'
            />
        </Box>
    );
};
export default LanguageAndRateTable;
