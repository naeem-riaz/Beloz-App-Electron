import {
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { RiArrowDropDownLine } from "react-icons/ri";
import CreateUserModalLayout from './create-user-modals/CreateUserModalLayout';
import PagesLayout from "../PagesLayout";
import UserTable from './UserTable';

type MenuItemType =
    'All' |
    'Mobile Interpreter' |
    'Web Interpreter' |
    'CSR' |
    'Customer' |
    'Mobile Customer' |
    'Web Manager' |
    'Mobile Manager';
const User: React.FC = () => {
    const [showCreateUserDropdown, setShowCreateUserDropdown] = useState(false);

    const {
        isOpen: isInterpreterModalOpen,
        onOpen: onInterpreterModalOpen,
        onClose: isInterpreterModalClose
    } = useDisclosure();
    const {
        isOpen: isCsrModalOpen,
        onOpen: onCsrModalOpen,
        onClose: isCsrModalClose
    } = useDisclosure();
    const {
        isOpen: isManagerModalOpen,
        onOpen: onManagerModalOpen,
        onClose: isManagerModalClose
    } = useDisclosure();
    const {
        isOpen: isCustomerModalOpen,
        onOpen: onCustomerModalOpen,
        onClose: isCustomerModalClose
    } = useDisclosure();

    const toggleCreateUserDropdown = () => {
        setShowCreateUserDropdown(!showCreateUserDropdown);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const [selectedItem, setSelectedItem] = useState<MenuItemType>('All');

    const handleMenuItemClick = (item: MenuItemType) => {
        setSelectedItem(item);
    };

    const tableData = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            role: 'Admin',
            extension: '001',
            language: 'English',
            status: 'Active'
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987-654-3210',
            role: 'User',
            extension: '002',
            language: 'Spanish',
            status: 'Inactive'
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987-654-3210',
            role: 'User',
            extension: '002',
            language: 'Spanish',
            status: 'Inactive'
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987-654-3210',
            role: 'User',
            extension: '002',
            language: 'Spanish',
            status: 'Active'
        }
    ];
    return (
        <>
            <PagesLayout
                headerTitle="User"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                tableArea={<UserTable data={tableData} />}
            >
                <Flex alignItems="center" justifyContent="left">
                    {/* Filter Button */}
                    <Flex direction={'column'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<BiFilterAlt />}
                                borderColor="#588CD8"
                                borderWidth="1px"
                                px={4}
                                py={3}
                                mr={3}
                                rounded="lg"
                                width="56"
                                bg="white"
                                textAlign="left"
                                _hover={{ bg: "white" }}
                                _active={{ bg: "white" }}
                            >
                                {selectedItem}
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('All')}
                                >
                                    All
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Mobile Interpreter')}
                                >
                                    Mobile Interpreter
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Web Interpreter')}
                                >
                                    Web Interpreter
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('CSR')}
                                >
                                    CSR
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Customer')}
                                >
                                    Customer
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Mobile Customer')}
                                >
                                    Mobile Customer
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Web Manager')}
                                >
                                    Web Manager
                                </MenuItem>
                                <MenuItem
                                    _hover={{ color: "white", bg: "#588CD8" }}
                                    onClick={() => handleMenuItemClick('Mobile Manager')}
                                >
                                    Mobile Manager
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    {/* Create New User Button */}
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            onClick={toggleCreateUserDropdown}
                            bg="#588CD8"
                            color="white"
                            px={4}
                            py={3}
                            rounded="lg"
                            width="56"
                            _hover={{ bg: "#4A6DAC" }}
                            _active={{ bg: "#4A6DAC" }}
                        >
                            Create New User
                        </MenuButton>
                        <MenuList>
                            <MenuItem _hover={{ color: "white", bg: "#588CD8" }} onClick={onInterpreterModalOpen}>Interpreter</MenuItem>
                            <MenuItem _hover={{ color: "white", bg: "#588CD8" }} onClick={onCsrModalOpen}>CSR</MenuItem>
                            <MenuItem _hover={{ color: "white", bg: "#588CD8" }} onClick={onCustomerModalOpen}>Customer</MenuItem>
                            <MenuItem _hover={{ color: "white", bg: "#588CD8" }} onClick={onManagerModalOpen}>Manager</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </PagesLayout>
            {/* Modals for Creating Users */}
            <CreateUserModalLayout
                heading="Create New Interpreter"
                buttonText='Create Interpreter'
                isOpen={isInterpreterModalOpen}
                onClose={isInterpreterModalClose}
                fields={{
                    firstName: true,
                    lastName: true,
                    phone: true,
                    email: true,
                    gender: true,
                    extension: true,
                    language: true,
                    status: true,
                    password: true,
                    confirmPassword: true,
                    type: true,
                    interpretingSkills: true,
                }}
            />
            <CreateUserModalLayout
                heading="Add New CSR"
                buttonText='Create New CSR'
                isOpen={isCsrModalOpen}
                onClose={isCsrModalClose}
                fields={{
                    firstName: true,
                    lastName: true,
                    phone: true,
                    email: true,
                    gender: true,
                    extension: true,
                    language: true,
                    status: true,
                    password: true,
                    confirmPassword: true,
                    interpretingSkills: true,
                }}
            />
            <CreateUserModalLayout
                heading="Add New Manager"
                buttonText='Create Manager'
                isOpen={isManagerModalOpen}
                onClose={isManagerModalClose}
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
                    type: true,
                }}
            />
            <CreateUserModalLayout
                heading="Add New Customer"
                buttonText='Create Customer'
                isOpen={isCustomerModalOpen}
                onClose={isCustomerModalClose}
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
                    type: true,
                }}
            />
        </>
    );
};

export default User;
