import { Box, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import DeleteModalLayout from '../DeleteModalLayout';
import CreateUserModalLayout from './create-user-modals/CreateUserModalLayout';

interface TableData {
    name?: string;
    email?: string;
    phone?: string;
    role?: string;
    extension?: string;
    language?: string;
    status?: string;
}

interface UserTableProps {
    data: TableData[];
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
    const headerTextColor = useColorModeValue("#1A2A41", "#CBD5E0");
    const statusBgActive = useColorModeValue("#A6D7A8", "#A6D7A8");
    const statusTextActive = useColorModeValue("#4CAF50", "#4CAF50");
    const statusBgInactive = useColorModeValue("#D1D4D9", "#D1D4D9");
    const statusTextInactive = useColorModeValue("#1A2A41", "#1A2A41");

    const {
        isOpen: isEditModalOpen,
        onOpen: onEditModalOpen,
        onClose: isEditModalClose
    } = useDisclosure();
    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: isDeleteModalClose
    } = useDisclosure();
    return (
        <Box overflowX="auto">
            <Table variant="unstyled">
                <Thead >
                    <Tr borderBottom={"1px"} borderColor={'#CBD5E1'} >
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Name</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Email</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Phone</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Role</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Extension</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Language</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Status</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Edit</Th>
                        <Th px={4} py={2} textAlign="left" fontSize="xs" fontWeight="medium" color={headerTextColor}>Delete</Th>
                    </Tr>

                </Thead>
                <Tbody>

                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 === 0 ? "white" : "#EEF4FB"}>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.name}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.email}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.phone}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.role}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.extension}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>{item.language}</Td>
                            <Td px={4} py={2} fontSize="sm" color={headerTextColor}>
                                <Box
                                    px={2}
                                    py={1}
                                    rounded="md"
                                    bg={item.status === 'Active' ? statusBgActive : statusBgInactive}
                                    color={item.status === 'Active' ? statusTextActive : statusTextInactive}
                                    textAlign="center"
                                    width="fit-content"
                                >
                                    {item.status}
                                </Box>
                            </Td>
                            <Td px={4} py={2} color={'#73C2FB'} onClick={onEditModalOpen}>
                                <FaEdit cursor="pointer" />
                            </Td>
                            <Td px={4} color={"#FF5252"} py={2} onClick={onDeleteModalOpen}>
                                <FaTrashAlt cursor="pointer" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <CreateUserModalLayout
                heading="Edit Interpreter"
                buttonText='Update Interpreters'
                isOpen={isEditModalOpen}
                onClose={isEditModalClose}
                fields={{
                    firstName: true,
                    lastName: true,
                    phone: true,
                    email: true,
                    gender: true,
                    language: true,
                    status: true,
                    password: true,
                    confirmPassword: true,
                    interpretingSkills: true
                }}
            />
            <DeleteModalLayout
                isOpen={isDeleteModalOpen}
                onClose={isDeleteModalClose}
                buttonText='Delete'
                heading='Delete'
                subheading='Are you sure you want to delete this User'
            />
        </Box>
    );
};

export default UserTable;
