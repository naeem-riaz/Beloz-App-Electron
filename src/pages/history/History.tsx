import { CalendarIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import PagesLayout from '../PagesLayout';
import HistoryTable from './HistoryTable';

type MenuItemType =
    'Mobile Interpreter' |
    'Web Interpreter' |
    'CSR' |
    'Customer' |
    'Mobile Customer';
const History: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const [selectedItem, setSelectedItem] = useState<MenuItemType>('Mobile Interpreter');

    const handleMenuItemClick = (item: MenuItemType) => {
        setSelectedItem(item);
    };

    const tableData = [
        {
            requester: "John Doe",
            language: "English",
            dateTime: "2024-08-29 10:00 AM",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            duration: "30 mins",
            location: "	3686 Parthenia Avenue, Louisville, Ky, Usa",
            totalTimeForSession: "30 mins",
            status: "Completed",
            reason: "N/A",
            amount: "$100",
            interpreter: "Yes",
            canceledBy: "N/A"
        },
        {
            requester: "Jane Smith",
            language: "Spanish",
            dateTime: "2024-08-29 11:00 AM",
            callStart: "11:00 AM",
            callEnd: "11:45 AM",
            duration: "45 mins",
            location: "Los Angeles",
            totalTimeForSession: "45 mins",
            status: "Cancelled",
            reason: "Client Request",
            amount: "$120",
            interpreter: "No",
            canceledBy: "Client"
        },
    ];
    return (
        <PagesLayout
            headerTitle="History"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            tableArea={<HistoryTable data={tableData} />}
        >
            <Flex alignItems={'center'} >
                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            width="2.5rem"
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                        >
                            <CalendarIcon color="gray.500" />
                        </InputLeftElement>
                        <DatePicker
                            selected={startDate}
                            onChange={(date: Date | null) => setStartDate(date)}
                            dateFormat="d MMMM, yyyy"
                            customInput={
                                <input
                                    id="start-date"
                                    style={{
                                        border: '1px solid black',
                                        borderRadius: '8px',
                                        padding: '8px 12px 8px 2.5rem',
                                        width: '100%',
                                        fontSize: '16px',
                                        color: '#333',
                                        backgroundColor: '#fff',
                                    }}
                                />
                            }
                        />
                    </InputGroup>
                </FormControl>
                <Text px={3}>To</Text>
                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            width="2.5rem"
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                        >
                            <CalendarIcon color="gray.500" />
                        </InputLeftElement>
                        <DatePicker
                            selected={endDate}
                            onChange={(date: Date | null) => setEndDate(date)}
                            dateFormat="d MMMM, yyyy"
                            customInput={
                                <input
                                    id="end-date"
                                    style={{
                                        border: '1px solid black',
                                        borderRadius: '8px',
                                        padding: '8px 12px 8px 2.5rem',
                                        width: '100%',
                                        fontSize: '16px',
                                        color: '#333',
                                        backgroundColor: '#fff',
                                    }}
                                />
                            }
                        />
                    </InputGroup>
                </FormControl>

            </Flex>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<RiArrowDropDownLine />}
                    border="1px solid black"
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
                </MenuList>
            </Menu>
        </PagesLayout >
    );
};

export default History;
