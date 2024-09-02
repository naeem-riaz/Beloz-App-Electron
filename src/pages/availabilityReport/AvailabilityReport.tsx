
import { useState } from "react";
import PagesLayout from "../PagesLayout";
import AvailabilityReportTable from "./AvailabilityReportTable";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Flex, FormControl, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const AvailabilityReport: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            agentId: '123985',
            agentFullName: 'John Doe',
            agentType: 'Support',
            available: 'Yes',
            pause: 'No',
            lunch: 'Yes',
            break: 'No',
            techIssue: 'No',
            offline: 'No',
        },
        {
            agentId: '123986',
            agentFullName: 'Jane Smith',
            agentType: 'Sales',
            available: 'No',
            pause: 'Yes',
            lunch: 'No',
            break: 'Yes',
            techIssue: 'No',
            offline: 'Yes',
        },
        {
            agentId: '123987',
            agentFullName: 'Robert Johnson',
            agentType: 'Support',
            available: 'Yes',
            pause: 'No',
            lunch: 'No',
            break: 'No',
            techIssue: 'Yes',
            offline: 'No',
        },
        {
            agentId: '123988',
            agentFullName: 'Emily Davis',
            agentType: 'Technical',
            available: 'No',
            pause: 'No',
            lunch: 'Yes',
            break: 'No',
            techIssue: 'No',
            offline: 'Yes',
        },
        {
            agentId: '123989',
            agentFullName: 'Michael Brown',
            agentType: 'Support',
            available: 'Yes',
            pause: 'No',
            lunch: 'No',
            break: 'Yes',
            techIssue: 'No',
            offline: 'No',
        },
    ];


    return (
        <>
            <PagesLayout
                headerTitle="Availability Report"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                tableArea={<AvailabilityReportTable data={tableData} />}
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
            </PagesLayout>
        </>
    )
};
export default AvailabilityReport;